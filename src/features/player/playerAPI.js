import { instance } from "../../utils/axios";

export function handlePIN(pin) {
  // call api || websocket
  const QuestionFake = {
    isRightPin: true,
    questions: [
      {
        type: 'True or false',
        point: 5,
        totalAns: 2,
        correctAns: [0],
        timeLimit: 20
      },
    ],
  }
  return QuestionFake;
}

export function handleNAME(name) {
  // call api || websocket
  return true;
}

