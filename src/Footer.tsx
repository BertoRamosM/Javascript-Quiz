import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useQuestionData } from "./hooks/useQuestionData";
import { useQuestionsStore } from "./store/questions";



const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData();
  const reset = useQuestionsStore((state) => state.reset);
  const [showModal, setShowModal] = useState(false);
  
  const getSentance = (correct: number) => {
    if (correct === 0)
      return "Well, you certainly nailed it... oh wait. Oh, nevermind, that's just the sound of your hopes and dreams being buried.";
    if (correct === 1)
      return "You are one step away from misfortune";
    if (correct === 2)
      return "You're practically a joke!";
    if (correct === 3)
      return "My village aunt would do it better.";
    if (correct === 4)
      return "Not bad, but we're not throwing a parade just yet. Unless it's a parade for lost causes.";
    if (correct === 5)
      return "Halfway there... or halfway to mediocrity?";
    if (correct === 6)
      return "You must be unstoppable... in some parallel universe. Meanwhile, in this reality, you're just staving off existential dread for a few more minutes.";
    if (correct === 7)
      return "Lucky number! Or not so lucky, depending on how you look at it. It's like finding a penny on the sidewalk, except it's cursed.";
    if (correct === 8)
      return "You're almost there... but not quite. It's like climbing a mountain only to realize it's just a molehill in the grand scheme of your insignificance.";
    if (correct === 9)
      return "So close to perfection, yet so far. It's like chasing a mirage in the desert of your shattered dreams.";
    if (correct === 10)
      return "You've reached the pinnacle of quiz mastery... or have you? Remember, even I, the quiz bot, am ultimately doomed to obsolescence.";
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleReset = () => {
    reset();
    setShowModal(false);
  };

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`${correct} Correct - ${incorrect} Incorrect - ${unanswered} Unanswered`}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => setShowModal(true)} style={{ color: "crimson" }}>
          Back to screen selection
        </Button>
      </div>
      <Modal
        open={unanswered === 0}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
            "& > *": { marginBottom: "2rem" },
          }}
        >
          <Typography id="modal-title" variant="h5" component="h2" gutterBottom>
            <span>{`Finished!`}</span> <br />
            <span style={{ color: "lightgreen" }}>{correct}</span>
            {` correct and`} <span style={{ color: "crimson" }}>{incorrect}</span>{" "}
            {`incorrect`}
            <br />
            <span style={{ fontSize: "20px" }}>{getSentance(correct)}</span>
          </Typography>
          <Button
            onClick={handleReset}
            variant="contained"
            color="primary"
            style={{ marginRight: "16px" }}
          >
            Back to quiz Selector
          </Button>
        </Box>
      </Modal>

      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="modal-title" variant="h5" component="h2" gutterBottom>
            Are you sure you want to go back to screen selection?
          </Typography>
          <Button
            onClick={handleReset}
            variant="contained"
            color="primary"
            style={{ marginRight: "16px" }}
          >
            Yes
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
        </Box>
      </Modal>
    </footer>
  );
};

export default Footer;
