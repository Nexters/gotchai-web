// useStoreLink.ts
import { useEffect, useMemo, useState } from "react";

export type Platform = "iOS" | "Android";

export type Options = {
  /** 앱 스킴/유니버설 링크 (있으면 먼저 시도) */
  deepLink?: string;
  /** 딥링크 실패 시 스토어로 폴백 대기 시간(ms) */
  deepLinkTimeoutMs?: number;
  /** SSR에서 UA를 주입하고 싶을 때 */
  userAgent?: string;
  /** 스토어 대신 보여줄 웹 페이지 (선택) */
  webFallback?: string;
  /** 인앱브라우저(카톡/인스타 등)인 경우 강제 스토어 이동 */
  forceStoreOnInApp?: boolean; // default: true
};

function isInAppBrowser(uaRaw?: string): boolean {
  const ua = (
    uaRaw ?? (typeof navigator !== "undefined" ? navigator.userAgent : "")
  ).toLowerCase();

  // 대표 인앱 브라우저 패턴들
  return (
    ua.includes("kakaotalk") || // 카카오톡
    ua.includes("instagram") || // 인스타그램
    ua.includes("fb_iab") || // 페이스북 인앱
    ua.includes("fban") ||
    ua.includes("fbav") ||
    ua.includes("line/") || // 라인
    ua.includes("naver(inapp)") || // 네이버앱 인앱
    ua.includes("wv") || // Android WebView (크게 잡기)
    ua.includes("daumapps") // 다음앱
  );
}

function detectPlatform(uaRaw?: string): Platform {
  const ua = (
    uaRaw ?? (typeof navigator !== "undefined" ? navigator.userAgent : "")
  ).toLowerCase();

  const isiOSLike =
    /iphone|ipod|ipad/.test(ua) ||
    // iPadOS 13+: Mac처럼 보일 수 있어 터치 포인트로 구분
    (typeof navigator !== "undefined" &&
      /mac os x|macintosh/.test(ua) &&
      "maxTouchPoints" in navigator &&
      (navigator as Navigator).maxTouchPoints > 1) ||
    // 명시적 macOS → iOS로 취급
    /mac os x|macintosh/.test(ua);

  if (isiOSLike) return "iOS";

  // 명시적 Windows → Android로 취급
  if (/windows nt/.test(ua)) return "Android";

  // 일반 Android
  if (/android/.test(ua)) return "Android";

  // 모르면 Android 쪽으로 (요청 사양)
  return "Android";
}

/**
 * iOS/Android 스토어 링크 훅
 * - macOS는 iOS로, Windows는 Android로 매핑
 * - 인앱브라우저에서 강제 스토어로 보낼 수 있음
 */
export function useStoreLink(
  iosUrl: string,
  androidUrl: string,
  opts: Options = {}
) {
  const {
    deepLink,
    deepLinkTimeoutMs = 800,
    userAgent,
    webFallback,
    forceStoreOnInApp = true,
  } = opts;

  const [platform, setPlatform] = useState<Platform>("Android");
  const [inApp, setInApp] = useState<boolean>(false);

  useEffect(() => {
    setPlatform(detectPlatform(userAgent));
    setInApp(isInAppBrowser(userAgent));
  }, [userAgent]);

  const storeUrl = useMemo(
    () => (platform === "iOS" ? iosUrl : androidUrl),
    [platform, iosUrl, androidUrl]
  );

  const open = (target: "auto" | "store" | "deeplink" = "auto") => {
    if (typeof window === "undefined") return;

    const go = (url?: string) => {
      if (url) window.location.href = url;
    };

    // 인앱 브라우저에서 강제 스토어 이동 옵션
    if (forceStoreOnInApp && inApp) {
      return go(storeUrl || webFallback);
    }

    const tryDeepLink = () => {
      if (!deepLink) return false;
      const start = Date.now();

      const timer = setTimeout(() => {
        // 앱 전환이 없으면 스토어 → 없으면 웹 폴백
        if (Date.now() - start < deepLinkTimeoutMs + 100) {
          go(storeUrl || webFallback);
        }
      }, deepLinkTimeoutMs);

      const clear = () => clearTimeout(timer);
      // 앱이 열려 브라우저가 백그라운드로 가면 blur/visibilitychange 발생
      window.addEventListener("blur", clear, { once: true });
      document.addEventListener(
        "visibilitychange",
        () => {
          if (document.visibilityState === "hidden") clear();
        },
        { once: true }
      );

      go(deepLink);
      return true;
    };

    if (target === "store") return go(storeUrl || webFallback);
    if (target === "deeplink")
      return void (tryDeepLink() || go(storeUrl || webFallback));

    // auto
    if (deepLink) {
      if (!tryDeepLink()) go(storeUrl || webFallback);
    } else {
      go(storeUrl || webFallback);
    }
  };

  return { platform, storeUrl, deepLink, inApp, open };
}
