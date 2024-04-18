import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useQuestionData } from "./hooks/useQuestionData";
import { useQuestionsStore } from "./store/questions";

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData();
  const reset = useQuestionsStore((state) => state.reset);
  const [showModal, setShowModal] = useState(false);

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
          <Button onClick={handleClose} variant="outlined" color="secondary" styles={{backgroundColor: 'red'}}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </footer>
  );
};

export default Footer;
