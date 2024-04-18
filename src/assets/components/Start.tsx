import { Button } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import { useQuiz } from "../../store/Quiz";

const LIMIT_QUESTIONS = 10;

const Start = () => {
  const currentQuiz = useQuiz((state) => state.currentQuiz);
  const quizzes = useQuiz((state) => state.quizzes)
  const changeQuiz = useQuiz((state) => state.changeQuiz);

  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = (quiz: string) => {
    fetchQuestions(LIMIT_QUESTIONS, quiz);
    changeQuiz(quiz)
  };

  

  return (
    <>
      {quizzes.map((quiz, index) => {
        return (
          <Button onClick={()=>handleClick(quiz)} variant="contained" key={index} style={{marginLeft: '1.5rem'}}>
            {quiz}
          </Button>
        );
      })}
    </>
  );
};

export default Start;
