export const URLS = {
  MAIN: "/",
  TEST: "/test",
  RESULT: (type: string, correctCount: number) =>
    `/result?type=${type}&correct=${correctCount}`,
};
