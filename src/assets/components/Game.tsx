import { Card, IconButton, Stack, Typography } from "@mui/material"
import { useQuestionsStore } from "../../store/questions"
import { type Question as QuestionType } from "../../types"
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Question = ({info} : {info: QuestionType}) => {
  return (
    <Card variant="outlined" sx={{ bgcolor: "#222", textAlign: "left", p: 2}}>
      <Typography variant="h5" color="lightBlue">
        {info.question}
      </Typography>

      <SyntaxHighlighter language="javascript" style={hybrid}>
        {info.code}
      </SyntaxHighlighter>
    </Card>
  );
}

const Game = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Question info={questionInfo}/>
    </>
  )
}

export default Game