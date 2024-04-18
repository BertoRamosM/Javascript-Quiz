import { Button } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import { useQuiz } from "../../store/Quiz";

const LIMIT_QUESTIONS = 10;

const Start = () => {
  const currentQuiz = useQuiz((state) => state.currentQuiz);
  const quizzes = useQuiz((state)=> state.quizzes)

  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS, currentQuiz);
  };

  

  return (
    <>
      {quizzes.map((quiz, index) => {
        return (
          <Button onClick={handleClick} variant="contained" key={index}>
            {quiz}
          </Button>
        );
      })}
    </>
  );
};

export default Start;
