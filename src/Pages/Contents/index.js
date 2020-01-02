export const FirstChapter = {
  open: {
    content: `상상의 집.
    엔즈에 오신걸 환영합니다.\n
    당신의 인생은 항상 선택의 연속이며 음....
    ... (어떻게 써야할까?) 그럼 이제 첫번째 질문을 하도록 하죠.
    당신은 어디로 가고 싶으신가요?`,
    choices: {
      question: "선택",
      options: [
        ["개인서재", "profile"],
        ["도서관", "lib"],
        ["안내", "info"],
        ["음....", 1]
      ]
    }
  },
  profile: {
    content: `당신의 신분을 증명`,
    choices: {
      question: "선택",
      options: [
        ["개인서재", "profile"],
        ["도서관", "lib"],
        ["안내", "info"],
        ["음....", 1]
      ]
    }
  },
  lib: {
    content: `도서관`,
    choices: {
      question: "선택",
      options: [
        ["개인서재", "profile"],
        ["도서관", "lib"],
        ["안내", "info"],
        ["음....", 1]
      ]
    }
  },
  info: {
    content: `안내`,
    choices: {
      question: "선택",
      options: [
        ["개인서재", "profile"],
        ["도서관", "lib"],
        ["안내", "info"],
        ["음....", 1]
      ]
    }
  },
  1: {
    content: `404`,
    next: "end"
  },
  end: {
    content: `ENDz`,
    next: "end"
  }
};
