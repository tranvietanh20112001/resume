/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from "@mui/material";
import F from "../../components/font";
import C from "../../config/color";
import I from "../../components/icon";
import { useNavigate } from "react-router-dom";

const hiring = () => {
  const navigate = useNavigate();
  const styledBox = {
    backgroundColor: C.White,
    border: "2px solid black",
    borderRadius: "4px",
    width: "48%",
    height: "100%",
    cursor: "pointer",
    transition: "all 0.5s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    "&:hover": {
      backgroundColor: C.Black,
      color: C.White,

      "& svg": {
        color: C.White,
      },
      "& img": {
        filter: "invert(100%)",
      },
      "& div div": {
        border: "2px solid white",
      },
    },
    "@media (max-width: 768px)": {
      width: "100%",
      height: "240px",
    },
  };

  const styledIconBox = {
    backgroundColor: "transparent",
    width: "56px",
    height: "56px",
    borderRadius: "4px",
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: C.Black,
    transition: "all 0.5s ease",
  };

  const styledListIcon = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    "@media (max-width: 768px)": {
      width: "90%",
    },
  };

  return (
    <>
      <Box
        width={"100%"}
        display={"flex"}
        height={"100vh"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"24px"}
        sx={{
          "@media (max-width: 768px)": {
            height: "auto",
          },
        }}
      >
        <F.displaytext>Hiring me as a</F.displaytext>
        <F.P2>Click to read the detail</F.P2>
        <Box
          width={"100%"}
          height={"70%"}
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            "@media (max-width: 768px)": {
              flexDirection: "column",
              gap: "24px",

              justifyContent: "space-evenly",
            },
          }}
        >
          <Box sx={styledBox} onClick={() => navigate("/frontend-development")}>
            <Box sx={styledListIcon}>
              <Box sx={styledIconBox}>
                <I.HtmlIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.CssIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.JavascriptIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.GitHubIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.ReactIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.AngularIcon />
              </Box>
            </Box>
            <F.displaytext>Frontend Developer</F.displaytext>
          </Box>

          <Box sx={styledBox} onClick={() => navigate("/business-analysis")}>
            <Box sx={styledListIcon}>
              <Box sx={styledIconBox}>
                <I.AssignmentIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.FigmaIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.WordIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.GroupsIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.ContactIcon />
              </Box>
              <Box sx={styledIconBox}>
                <I.ChecklistIcon />
              </Box>
            </Box>
            <F.displaytext>Business Analyst</F.displaytext>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default hiring;
