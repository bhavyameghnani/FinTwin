

const questions = [
   {
      question: "Currency notes are issued by",
      answers: [
         { answerText: "RBI", isCorrect: true },
         { answerText: "NABARD", isCorrect: false },
         { answerText: "Public sector banks", isCorrect: false },
         { answerText: "Central Government", isCorrect: false },
      ]
   },
   {
      question: " Coins are issued by",
      answers: [
         { answerText: "Government of India", isCorrect: true },
         { answerText: "NABARD", isCorrect: false },
         { answerText: "Public sector banks", isCorrect: false },
         { answerText: "State Bank of India", isCorrect: false },
      ]
   },
   {
      question: "Education Loans",
      answers: [
         { answerText: "Cover tuition fee & expenses", isCorrect: false },
         { answerText: "Are repayable after completion of course", isCorrect: false },
         { answerText: "Granted for studies in India & abroad", isCorrect: false },
         { answerText: "All of above", isCorrect: true },
      ]
   },
   {
      question: "Who can open bank account",
      answers: [
         { answerText: "Indian citizen", isCorrect: false },
         { answerText: "Non Resident Indian", isCorrect: false },
         { answerText: "Illiterate", isCorrect: false },
         { answerText: "All of above", isCorrect: true },
      ]
   },
   {
      question: "NEFT stands for",
      answers: [
         { answerText: "National Electric Fund Transfer", isCorrect: false },
         { answerText: "National Electronic Fund Transfer", isCorrect: true },
         { answerText: "National Electrical Fund Transfer", isCorrect: false },
         { answerText: "None of Above", isCorrect: false },
      ]
   },
   

]

export const randQustions = questions.sort(() => Math.random() - 0.5)