import "./App.css";
import JavascriptLogo from "./assets/JavascriptLogo";
import { Container, Stack, Typography } from "@mui/material";
import Start from "./assets/components/Start";
import { useQuestionsStore } from "./store/questions";
import Game from "./assets/components/Game";

function App() {

  const questions = useQuestionsStore(state => state.questions)
  console.log(questions)


  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "200px" }}
        >
          <Typography variant="h2" component="h1" color="yellow">
            <JavascriptLogo />
            Javascript Quiz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
      
    </main>
  );
}

export default App;
