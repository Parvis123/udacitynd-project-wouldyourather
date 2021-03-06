import {
  RECEIVE_QUESTION,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION_ANSWER:
      let noVotes = state[action.questionId][action.answer].votes;
      return {
        ...state,
        [action.questionId]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: noVotes.concat([action.authedUser]),
          },
        },
      };
    default:
      return state;
  }
}
