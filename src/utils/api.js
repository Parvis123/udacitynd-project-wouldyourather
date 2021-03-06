import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestionApi(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswerApi(questionAnswer) {
  return _saveQuestionAnswer(questionAnswer);
}
