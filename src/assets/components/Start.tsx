import { Button, Container, Grid } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import { useQuiz } from "../../store/Quiz";

import JavascriptLogo from "../JavascriptLogo";
import ReactLogo from "../ReactLogo";
import TypescriptLogo from "../TypescriptLogo";
import CSSLogo from "../CSSLogo";
import NodeJsLogo from "../NodeJsLogo";

type LogoType = {
  [key: string]: JSX.Element; 
};

const LIMIT_QUESTIONS = 10;

const Start = () => {
  const quizzes = useQuiz((state) => state.quizzes);
  const changeQuiz = useQuiz((state) => state.changeQuiz);

  const logoSize = {
    width: 30,
    height: 25,
  };

  const logos: LogoType = {
    javascript: (
      <JavascriptLogo width={logoSize.width} height={logoSize.height} />
    ),
    react: <ReactLogo width={logoSize.width} height={logoSize.height} />,
    typescript: (
      <TypescriptLogo width={logoSize.width} height={logoSize.height} />
    ),
    CSS: <CSSLogo width={logoSize.width} height={logoSize.height} />,

    nodejs: <NodeJsLogo width={logoSize.width} height={logoSize.height} />,
  };

  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = (quiz: string) => {
    fetchQuestions(LIMIT_QUESTIONS, quiz);
    changeQuiz(quiz);
  };

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{alignItems: 'center', justifyContent: 'center'}}
      >
        {quizzes.map((quiz, index) => (
          <Grid item xs={3} sm={4} md={4} key={index}>
            <Button
              onClick={() => handleClick(quiz)}
              variant="outlined"
              fullWidth
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: " center",
                gap: "0.5rem",
              }}
            >
              <div>{logos[quiz]}</div>
              <span>{quiz}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Start;
