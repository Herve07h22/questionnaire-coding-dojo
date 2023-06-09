import { Question } from "../Question";
import { Questionnaire } from "../Questionnaire";

describe("Questionnaire", () => {
  it("should start at first question", () => {
    const questionnaire = startQuestionnaire();

    expect(questionnaire.currentQuestion()).toEqual(firstQuestion());
  });

  it("should answer first question", () => {
    const questionnaire = startQuestionnaire().answer("YES");

    expect(questionnaire.currentQuestion()).toEqual(secondQuestion());
    expect(questionnaire.answers()).toEqual([
      { question: "first", answer: "YES" },
    ]);
  });
});

const startQuestionnaire = () =>
  Questionnaire.start([firstQuestion(), secondQuestion()]);

const firstQuestion = (): Question => ({
  id: "first",
  label: "This is a first question",
});

const secondQuestion = (): Question => ({
  id: "second",
  label: "This is a second question",
});
