import { Title, Text } from "@gotchai/ui";

export const TypographyExample = () => {
  return (
    <div>
      <h2>Typography 컴포넌트 예시</h2>

      {/* Title 컴포넌트들 (order 1~6) */}
      <section>
        <h3>Title 컴포넌트 (order 1~6)</h3>

        <Title order={1}>Title1 - 메인 제목 (36px, semibold)</Title>

        <Title order={2}>Title2 - 섹션 제목 (30px, bold)</Title>

        <Title order={3}>Title3 - 서브 섹션 제목 (26px, bold)</Title>

        <Title order={4}>Title4 - 작은 제목 (24px, semibold)</Title>

        <Title order={5}>Title5 - 부제목 (22px, semibold)</Title>

        <Title order={6}>Title6 - 작은 부제목 (20px, semibold)</Title>
      </section>

      <section>
        <h3>Text 컴포넌트 (size 1~5)</h3>
        <Text size="xl">Text - 기본 텍스트 (20px, medium)</Text>
      </section>
    </div>
  );
};

