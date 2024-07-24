import { useState } from "react";
import "./speedMailStyle.css";
import { TextField, TextareaAutosize, Button, Box, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";

function SpeedMail() {
  const [showForm, setShowForm] = useState(false);
  const [values, setValues] = useState();
  const [status, setStatus] = useState('init');

  console.log("values", values);

  const sendMail = () => {
    setStatus('proccess')
    emailjs
      .send("service_uiw9iak", "template_v31y6g1", values, "Gs3XVwK5sRt76NwMy")
      .then((res) => {
        if (res.status === 200) {
          setStatus('success');
          setValues();
        } else {
          setStatus('error');
        }
        console.log("response", res);
      })
      .catch((e) => setStatus('error'));
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues((prev) => ({
      ...prev,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  return (
    <Box className="speedMailContainer">
      {showForm ? (
        <Box className="formContainer">
          {status === 'success' ? (
            <Alert color="success">Votre message a été envoyé</Alert>
          ) : status === 'error' ? (
            <Alert color="error">Erreur d'envoie de votre message</Alert>
          ) : (
            <></>
          )}
          <h2>Besoin d'aide?</h2>
          <h3>
            Envoyer nous un message par mail. Nous vous répondrons le plus tôt
            possible
          </h3>
          <TextField
            type="email"
            sx={{ width: "80%", mb: "20px" }}
            id="filled-basic"
            name="from_name"
            label="Votre addresse email"
            variant="filled"
            onChange={handleChange}
          />
          <TextareaAutosize
            minRows={6}
            type="text"
            name="message"
            placeholder="Votre message"
            className="inputMail"
            onChange={handleChange}
          />
          <Button
            onClick={sendMail}
            variant="contained"
            sx={{ marginTop: "30px" }}
            disabled={status === 'proccess' || !values?.from_name || !values?.message}
          >
            Envoyer
          </Button>
        </Box>
      ) : (
        <></>
      )}
      <img
        className="mailIcon"
        src="./icones/white_mail.png"
        alt="speed_mail_icon"
        onClick={() => setShowForm((prev) =>{
          setStatus('init')
          setValues()
          return !prev
        })}
      />
    </Box>
  );
}

export default SpeedMail;
