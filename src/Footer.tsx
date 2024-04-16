import { useQuestionData } from "./hooks/useQuestionData";
const Footer = () => {

  const {correct, incorrect, unanswered} = useQuestionData()

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`${correct} Correct - ${incorrect} Incorrect - ${unanswered} Unanswered`}</strong>
    </footer>
  );
}

export default Footer