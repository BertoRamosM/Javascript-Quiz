import {
  Card,
  IconButton,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import { type Question as QuestionType } from "../../types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";


  const getBackgroundColor = (info: QuestionType, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info

    //if user hasnt press any button
    if (userSelectedAnswer === null) return 'transparent'
    
    //if user has chosen but answer its incorrect
    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

    //if user has chosen the correct answer
    if (index === correctAnswer) return 'green'

    //if user has chosen the wrong answer
    if (index === userSelectedAnswer) return 'red'
    
    //if any of the rest
    return "transparent";
  };


const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswers = useQuestionsStore(state => state.selectAnswer)

  const handleClick = (answerIndex: number) => () => {
    selectAnswers(info.id, answerIndex)
  }


  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "#222", textAlign: "left", p: 2, marginTop: 4 }}
    >
      <Typography variant="h5" color="lightBlue">
        {info.question}
      </Typography>

      <SyntaxHighlighter language="javascript" style={hybrid}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} divider>
            <ListItemButton
              sx={{
                backgroundColor: getBackgroundColor(info, index)
              }}
              disabled={info.userSelectedAnswer !== null}
              onClick={handleClick(index) }>
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const loading = useQuestionsStore((state)=> state.loading)

  const questionInfo = questions[currentQuestion];

  return (
    <>
      { loading && <CircularProgress />}
      <Question info={questionInfo} />
    </>
  );
};

export default Game;
