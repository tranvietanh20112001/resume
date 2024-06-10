import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Box } from "@mui/material";
import Medium_Button from "../../components/button";
import I from "../../components/icon";
import F from "../../components/font";
import { styled } from "@mui/material";
const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_wbls52y", "template_qmw3v1u", form.current, {
          publicKey: "lpZKxV990IC2RfGNk",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const ButtonStyle = {
    width: "56px",
    background: "transparent",
    color: "black",
    border: "2px solid black",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  };

  const Form = styled("form")({
    width: "100%",
    height: "60%",
  });

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "@media (max-width: 768px)": {
            width: "100%",
            height: "auto",
          },
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            height: "60%",
            justifyContent: "space-between",
            "@media (max-width: 768px)": {
              width: "100%",
              height: "auto",
              gap: "12px",
              margin: "24px 0",
              alignItems: "center",
            },
          }}
        >
          <F.displaytext>Contact me</F.displaytext>
          <F.P2>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </F.P2>
          <F.H3>tranvietanh20112001@gmail.com</F.H3>
          <F.H3>0857648024</F.H3>
          <Box display={"flex"} gap={"24px"}>
            <Medium_Button style={ButtonStyle}>
              <I.FacebookIcon />
            </Medium_Button>
            <Medium_Button style={ButtonStyle}>
              <I.InstagramIcon />
            </Medium_Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "@media (max-width: 768px)": {
            width: "100%",
            margin: "0 0 24px 0",
          },
        }}
      >
        <Form ref={form} onSubmit={sendEmail}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 768px)": {
                gap: "12px",
              },
            }}
          >
            <TextField
              id="name"
              label="Your name"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="email"
              label="Your email"
              variant="outlined"
              required
              fullWidth
            />
            <TextField
              id="message"
              label="Your message"
              multiline
              maxRows={4}
              required
              fullWidth
            />

            <Medium_Button style={{ width: "100%" }} type="submit">
              Send
            </Medium_Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default ContactMe;
