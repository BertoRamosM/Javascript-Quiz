import { useMediaQuery } from "@mui/material";
import {
  Card,
  IconButton,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import { type Question as QuestionType } from "../../types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import Footer from "../../Footer";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;

  //if user hasnt press any button
  if (userSelectedAnswer == null) return "transparent";

  //if user has chosen but answer its incorrect
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";

  //if user has chosen the correct answer
  if (index === correctAnswer) return "green";

  //if user has chosen the wrong answer
  if (index === userSelectedAnswer) return "red";

  //if any of the rest
  return "transparent";
};

const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswers = useQuestionsStore((state) => state.selectAnswer);

  const handleClick = (answerIndex: number) => () => {
    selectAnswers(info.id, answerIndex);
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isExtraSmallScreen = useMediaQuery("(max-width:400px)");

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#222",
        textAlign: "left",
        p: 2,
        marginTop: 4,
        overflow: "auto",
        maxHeight: isSmallScreen ? "70vh" : "none",
        width: isSmallScreen ? "90%" : "auto",
        margin: isSmallScreen ? "auto" : "inherit",
        ...(isExtraSmallScreen && {
          padding: "1rem",
          maxHeight: "none",
        }), // Adjust for extra small screens
      }}
    >
      <Typography variant="h5" color="lightBlue" sx={{ mb: 2 }}>
        {info.question}
      </Typography>

      <SyntaxHighlighter language="javascript" style={hybrid} sx={{ mb: 2 }}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} divider>
            <ListItemButton
              sx={{
                backgroundColor: getBackgroundColor(info, index),
              }}
              disabled={info.userSelectedAnswer != null}
              onClick={handleClick(index)}
            >
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
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPrevQuestion = useQuestionsStore((state) => state.goPreviousQuestion);

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          sx={{ padding: "0" }}
          onClick={goPrevQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowBack />
        </IconButton>
        {currentQuestion + 1}/{questions.length}
        <IconButton
          sx={{ padding: "0" }}
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowNext />
        </IconButton>
      </Stack>
      <Question info={questionInfo} />

      <Footer />
    </>
  );
};

export default Game;
