import { Box } from "@mui/material";
import S from "../../components/font";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import Medium_Button from "../../components/button";
import I from "../../components/icon";
import Avatar from "../../assets/logo3.gif";
const introduction = () => {
  const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  });

  const OutlinedText = styled("span")({
    color: "transparent",
    "-webkit-text-stroke": "1px black",
  });

  const state = useState;
  const effect = useEffect;
  const [text, setText] = state("Frontend Developer");

  effect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Frontend Developer"
          ? "Business Analyst"
          : "Frontend Developer"
      );
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        height={"90vh"}
        alignItems={"center"}
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
            height: "auto",
          },
        }}
      >
        <Box
          width={"60%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"24px"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <S.displaytext style={{ fontWeight: "normal" }}>
            Hello, I am{" "}
            <span style={{ fontWeight: "bold" }}>Tran Viet Anh</span>
          </S.displaytext>
          <S.displaytext>
            <OutlinedText>{text}</OutlinedText>
          </S.displaytext>
          <S.displaytext style={{ fontWeight: "normal" }}>
            Based in <span style={{ fontWeight: "bold" }}>Ha Noi,Viet Nam</span>
          </S.displaytext>
          <S.P2>
            Hello, I am Tran Viet Anh, a Frontend Developer and Business Analyst
            from Hanoi, Vietnam. I look forward to developing my work and
            technology-related skills with talented programmers. Hopefully I can
            become an employee and complete my tasks well in your company.
          </S.P2>
          <Box display={"flex"} gap={"20px"}>
            <Medium_Button style={{ width: "56px" }}>
              <I.FacebookIcon />
            </Medium_Button>
            <Medium_Button
              style={{
                width: "56px",
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid black",
              }}
            >
              <I.GitHubIcon />
            </Medium_Button>
            <Medium_Button
              style={{
                width: "56px",
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid black",
              }}
            >
              <I.InstagramIcon />
            </Medium_Button>
            <Medium_Button
              style={{
                width: "56px",
                backgroundColor: "transparent",
                color: "black",
                border: "2px solid black",
              }}
            >
              <I.YouTubeIcon />
            </Medium_Button>
          </Box>
        </Box>
        <Box
          width={"40%"}
          sx={{
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Image src={Avatar}></Image>
        </Box>
      </Box>
    </>
  );
};

export default introduction;
