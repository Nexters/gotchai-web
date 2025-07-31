export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: `‘나 내일부터 다이어트할까?’라는 말에 사람과 Ai 모두 대답했어요.`,
    options: [
      {
        id: "A",
        text: "저번주에도 그 말 하지 않았어?",
        isCorrect: false,
      },
      {
        id: "B",
        text: `좋아. 내일부터 다이어트 한다는 건 아주 강한 결심이 필요하단 뜻이야.\n하지만 작심삼일로 끝나지 않으려면, 전략이 필요해.`,
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    question: `‘롯데 자이언츠가 올해 우승할 수 있을까?’라는 말에 사람과 Ai 모두 대답했어요.`,
    options: [
      {
        id: "A",
        text: "롯데가 우승까지 연결되려면 투수진이 안정화되고 포스트시즌에서 집중력을 발휘해야 해.",
        isCorrect: true,
      },
      {
        id: "B",
        text: "내가 연애할 확률이 더 높겠는데.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: `‘지금이라도 엔비디아 주식을 살까?’라는 말에 사람과 Ai 모두 대답했어요.`,
    options: [
      {
        id: "A",
        text: "ㅋㅋㅋ제가 한달 전에 엔비디아 사라고 했죠.",
        isCorrect: false,
      },
      {
        id: "B",
        text: "AI 성장 기대가 크고 중장기 유망하지만, 현재 밸류에이션이 높고 단기 조정 가능성도 있어 신중한 진입이 필요합니다.",
        isCorrect: true,
      },
    ],
  },
  {
    id: 4,
    question: `‘여름인데 요아정 시킬까?’라는 말에 사람과 Ai 모두 대답했어요.`,
    options: [
      {
        id: "A",
        text: "요아정이면 치킨 한 마리는 기본 세팅이지?",
        isCorrect: true,
      },
      {
        id: "B",
        text: "아 요아정 좋지~ 너 토핑 뭐 추가해서 먹냐? 가게 하나 다 먹지?",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: `술자리에서 친구가 ‘나 헤어졌어...’라고 말하자 사람과 Ai가 동시에 대답했어요`,
    options: [
      {
        id: "A",
        text: "짠이나 하자.",
        isCorrect: false,
      },
      {
        id: "B",
        text: "그래… 사람은 원래 혼자야. 고기나 먹어.",
        isCorrect: true,
      },
    ],
  },
  {
    id: 6,
    question: `사람과 Ai가 모두 고양이로 삼행시를 지었어요.`,
    options: [
      {
        id: "A",
        text: `고: 고생 끝에\n양: 양치 안 하면\n이: 이도 잃고 인생도 잃어`,
        isCorrect: true,
      },
      {
        id: "B",
        text: `고: 고통받는\n양: 양아치\n이: 이병헌`,
        isCorrect: true,
      },
    ],
  },
  {
    id: 7,
    question: `민트초코를 최애라고 말하는 친구에게 사람과 Ai 모두 대답했어요.`,
    options: [
      {
        id: "A",
        text: "와..사람 잘못봤네.. 민초파였어?",
        isCorrect: true,
      },
      {
        id: "B",
        text: "당신은 훈이머리를 좋아하십니까?",
        isCorrect: false,
      },
    ],
  },
];
