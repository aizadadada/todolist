import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./editmodal.module.css";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center'
};


export default function EditModal({
  selectedTodo,
  isOpen,
  onCloseModal,
  onSave,
}) {
  const [title, setTitle] = useState(selectedTodo.title);
  console.log(title);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={classes.h2}
          >
            Edit Your Task
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => onSave(selectedTodo.id, title)}
            >
              Save
            </Button>
            <Button variant="outlined" color="error" onClick={onCloseModal}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
