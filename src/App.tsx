import "./App.css";
import JavascriptLogo from "./assets/JavascriptLogo";
import { Container, Stack, Typography } from "@mui/material";
import Start from "./assets/components/Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./assets/components/Game";
import { useQuiz } from "./store/Quiz";
import ReactLogo from "./assets/ReactLogo"
import TypescriptLogo from "./assets/TypescriptLogo";

function App() {
  const currentQuiz = useQuiz((state) => state.currentQuiz);

  const questions = useQuestionsStore((state) => state.questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "200px" }}
        >
          <Typography variant="h2" component="h1" color="white">
            {currentQuiz === undefined && <h4>Hola</h4>}
            {currentQuiz === "javascript" && <JavascriptLogo />}
            {currentQuiz === "react" && <ReactLogo />}
            {currentQuiz === "typescript" && <TypescriptLogo />}
            Quizzo
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
