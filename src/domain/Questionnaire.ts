import { Answer } from './Answer';
import { Question, QuestionId } from './Question';

export class Questionnaire {
  private constructor(
    private readonly questions: Question[],
    private readonly questionIndex: number,
    private readonly questionAnswers: QuestionAnswer[]
  ) {}

  static start(questions: Question[]): Questionnaire {
    return new Questionnaire(questions, 0, []);
  }

  currentQuestion(): Question {
    return this.questions[this.questionIndex];
  }

  answer(answer: Answer): Questionnaire {
    const questionAnswer = { question: this.currentQuestion().id, answer };

    return new Questionnaire(this.questions, this.questionIndex + 1, [...this.questionAnswers, questionAnswer]);
  }

  answers(): ReadonlyArray<QuestionAnswer> {
    return this.questionAnswers;
  }
}

interface QuestionAnswer {
  question: QuestionId;
  answer: Answer;
}
