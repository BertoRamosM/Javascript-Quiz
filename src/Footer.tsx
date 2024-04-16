import { useQuestionData } from "./hooks/useQuestionData";
import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const Footer = () => {

  const { correct, incorrect, unanswered } = useQuestionData()
  
  const reset = useQuestionsStore(state => state.reset)

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`${correct} Correct - ${incorrect} Incorrect - ${unanswered} Unanswered`}</strong>

      <div style={{marginTop: '16px'}}>
        <Button onClick={() => reset()}>
          Reset Game
        </Button>
      </div>
    </footer>
  );
}

export default Footer