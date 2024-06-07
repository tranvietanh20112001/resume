import { Box, styled } from "@mui/material";
import F from "../../components/font";
import Avatar from "../../assets/logo4.gif";
const AboutMe = () => {
  const Image = styled("img")({
    width: "100%",
    height: "90%",
    objectFit: "cover",

    "@media (max-width: 768px)": {
      width: "30%",
    },
  });
  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
            height: "auto",
          },
        }}
      >
        <Box
          width={"50%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Image src={Avatar} alt="logo" />
        </Box>

        <Box
          width={"50%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"24px"}
          justifyContent={"center"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <F.displaytext>About Me</F.displaytext>
          <F.P2 sx={{ fontWeight: "200" }}>
            I am a Front End programmer with a strong passion and knowledge and
            experience implementing many different technologies. I can work well
            with HTML, CSS, JS, React.js, Angular.js and many other plugin
            libraries. My desire is to create many different programs with
            clear, user-friendly interfaces, high efficiency and bring many
            benefits to owners.
          </F.P2>
          <F.P2 sx={{ fontWeight: "200" }}>
            In addition, I also feel that I am very suitable to become a
            Business Analyst expert. I have a lot of experience in implementing
            projects with Agile, offering many solutions to solve problems,
            documenting requirements clearly and accurately, and can work well
            with supporting software (Figma, Draw). .io, Word... and communicate
            well with members and customers.
          </F.P2>
          <F.P2 sx={{ fontWeight: "200" }}>
            My goal is to deliver high-quality business solutions that drive
            success and innovation for organizations. I aim to advance my career
            in a dynamic environment where I can leverage my analytical skills,
            business acumen, and project management expertise to contribute to
            impactful projects. I am excited to collaborate with
            forward-thinking teams and organizations to develop solutions that
            meet and exceed business objectives.
          </F.P2>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;
