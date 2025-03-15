export interface Question{
    question:string;
    options:string[];
    answer:string;
}

export const quizData:Question[]=[
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
    },
    {
        question: "Which language is used for React?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript",
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
]