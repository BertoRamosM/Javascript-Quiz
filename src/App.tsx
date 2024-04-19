import "./App.css";
import { Container, Stack, Typography } from "@mui/material";
import Start from "./assets/components/Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./assets/components/Game";
import { useQuiz } from "./store/Quiz";
import FooterInfo from "./assets/components/FooterInfo";
import QuizzLogo from "../public/quizzo-logo.png";
import JavascriptLogo from "./assets/JavascriptLogo";
import ReactLogo from "./assets/ReactLogo";
import TypescriptLogo from "./assets/TypescriptLogo";
import CSSLogo from "./assets/CSSLogo";
import NodeJsLogo from "./assets/NodeJsLogo";

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
            {currentQuiz === "javascript" && (
              <JavascriptLogo width={88} height={88} />
            )}
            {currentQuiz === "react" && <ReactLogo width={88} height={88} />}
            {currentQuiz === "typescript" && (
              <TypescriptLogo width={88} height={88} />
            )}
            {currentQuiz === "CSS" && <CSSLogo width={88} height={88} />}
            {currentQuiz === "nodejs" && <NodeJsLogo width={88} height={88} />}

            <img src={QuizzLogo} style={{ height: "160px" }}></img>
            {currentQuiz === undefined && <h6>Select a quiz:</h6>}
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
      <FooterInfo />
    </main>
  );
}

export default App;
