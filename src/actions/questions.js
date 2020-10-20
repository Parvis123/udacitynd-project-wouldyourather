export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTIONS = "SAVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
export function saveQuestions(questions) {
  return {
    type: SAVE_QUESTIONS,
    questions,
  };
}
export function saveQuestionAnswer(answer, questionId, authedUser) {
  return {
    type: SAVE_QUESTION_ANSWER,
    answer,
    questionId,
    authedUser,
  };
}