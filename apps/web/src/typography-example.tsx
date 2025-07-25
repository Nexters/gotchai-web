import {
  Title1,
  Title2,
  Title3,
  Title4,
  SubTitle1,
  SubTitle2,
  Body1,
  Body2,
  Body3,
  Body4,
  Body5,
  Typography,
} from "@gotchai/ui";

export const TypographyExample = () => {
  return (
    <div>
      <h2>Typography 시스템 예시</h2>

      {/* 제목 스타일들 */}
      <section>
        <h3>제목 스타일 (Title)</h3>

        <p className={Title1}>Title1 - 메인 제목 (36px, semibold)</p>

        <p className={Title2}>Title2 - 섹션 제목 (30px, bold)</p>

        <p className={Title3}>Title3 - 서브 섹션 제목 (26px, bold)</p>

        <p className={Title4}>Title4 - 작은 제목 (24px, semibold)</p>
      </section>

      {/* 부제목 스타일들 */}
      <section>
        <h3>부제목 스타일 (SubTitle)</h3>

        <p className={SubTitle1}>SubTitle1 - 부제목 (22px, semibold)</p>

        <p className={SubTitle2}>SubTitle2 - 작은 부제목 (20px, semibold)</p>
      </section>

      {/* 본문 스타일들 */}
      <section>
        <h3>본문 스타일 (Body)</h3>

        <p className={Body1}>
          Body1 - 본문 텍스트 (18px, medium) - 가장 큰 본문 텍스트로 중요한
          내용에 사용합니다.
        </p>

        <p className={Body2}>
          Body2 - 강조 본문 (16px, semibold) - 강조가 필요한 본문 텍스트에
          사용합니다.
        </p>

        <p className={Body3}>
          Body3 - 일반 본문 (16px, medium) - 기본적인 본문 텍스트에 사용합니다.
        </p>

        <p className={Body4}>
          Body4 - 작은 본문 (15px, medium) - 작은 크기가 필요한 본문에
          사용합니다.
        </p>

        <p className={Body5}>
          Body5 - 가장 작은 본문 (14px, medium) - 캡션이나 부가 정보에
          사용합니다.
        </p>
      </section>

      {/* Typography 객체 직접 사용 예시 */}
      <section>
        <h3>Typography 객체 직접 사용</h3>

        <div
          style={{
            fontSize: Typography.fontSize.xl,
            fontWeight: Typography.fontWeight.bold,
            fontFamily: Typography.fontFamily.sans,
            lineHeight: Typography.lineHeight.normal,
          }}
        >
          인라인 스타일로 직접 사용 (24px, bold)
        </div>

        <div
          style={{
            fontSize: Typography.fontSize.lg,
            fontWeight: Typography.fontWeight.semibold,
            fontFamily: Typography.fontFamily.sans,
            lineHeight: Typography.lineHeight.normal,
          }}
        >
          커스텀 조합 (22px, semibold)
        </div>

        <div
          style={{
            fontSize: Typography.fontSize.base,
            fontWeight: Typography.fontWeight.medium,
            fontFamily: Typography.fontFamily.sans,
            lineHeight: Typography.lineHeight.normal,
          }}
        >
          기본 크기 (20px, medium)
        </div>
      </section>

      {/* 실제 사용 예시 */}
      <section>
        <h3>실제 사용 예시</h3>

        <article>
          <p className={Title2}>웹 개발 가이드</p>

          <p className={SubTitle1}>
            React와 TypeScript를 활용한 현대적인 웹 개발
          </p>

          <p className={Body1}>
            이 가이드는 React와 TypeScript를 사용하여 현대적인 웹 애플리케이션을
            개발하는 방법을 다룹니다. 컴포넌트 기반 아키텍처와 타입 안전성을
            통해 견고하고 유지보수하기 쉬운 코드를 작성할 수 있습니다.
          </p>

          <p className={Title4}>주요 특징</p>

          <ul>
            <li className={Body3}>컴포넌트 기반 개발</li>
            <li className={Body3}>타입 안전성 보장</li>
            <li className={Body3}>일관된 타이포그래피 시스템</li>
          </ul>

          <p className={Body4}>이 문서는 지속적으로 업데이트됩니다.</p>
        </article>
      </section>
    </div>
  );
};

export default TypographyExample;
