import { Box, styled } from "@mui/material";
import F from "../../components/font";
import C from "../../config/color";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";

const myproject = () => {
  const ProjectContainer = styled("div")({
    width: "100%",
    height: "240px",
    display: "flex",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      height: "auto",
    },
  });

  const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: C.Black,
    borderRadius: "8px",
  });

  const ImageContainer = styled("div")({
    width: "50%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const TextContainer = styled("div")({
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 60px",
    "@media (max-width: 768px)": {
      width: "100%",
      margin: 0,
    },
  });

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        margin={"24px 0"}
        alignItems={"center"}
      >
        <F.displaytext>My Projects</F.displaytext>
      </Box>

      <ProjectContainer>
        <ImageContainer>
          <Image src={pro1} />
        </ImageContainer>
        <TextContainer>
          <F.H3>E-commerce</F.H3>
          <F.P2>
            Fullstack, using Reactjs, MUI, redux for creating user interface,
            using Nodejs for the server
          </F.P2>
        </TextContainer>
      </ProjectContainer>

      <ProjectContainer>
        <ImageContainer>
          <Image src={pro2} />
        </ImageContainer>
        <TextContainer>
          <F.H3>ALHKQ</F.H3>
          <F.P2>
            Fullstack, using Reactjs, MUI, redux for creating user interface,
            using Nodejs for the server
          </F.P2>
        </TextContainer>
      </ProjectContainer>
    </>
  );
};

export default myproject;
