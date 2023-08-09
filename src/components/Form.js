import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  CssBaseline,
  Avatar,
} from "@mui/material";
import Navbar from "./Navbar";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Navbar></Navbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ margin: "8px", backgroundColor: "blue" }}></Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <form
            style={{ width: "100%", marginTop: "24px" }}
            onSubmit={handleSubmit}
          >
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ForwardToInboxIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: "24px 0 16px" }}
              startIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Form;
