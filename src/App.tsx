import "./App.css";
import JavascriptLogo from "./assets/JavascriptLogo";
import { Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" alignItems="center" justify="center">
          <Typography variant="h2" component="h1">
            <JavascriptLogo />
            Javascript Quiz
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
