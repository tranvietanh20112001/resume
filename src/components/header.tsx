import { Box } from "@mui/material";
import Medium_Button from "./button";
import F from "./font";
import I from "./icon";
const Header = () => {
  const ButtonDownloadStyle = {
    width: "150px",
    "@media (max-width: 768px)": {
      display: "none",
    },
  };

  const ButtonDownloadMobileStyle = {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100px"}
        alignItems={"center"}
      >
        <F.displaytext style={{ margin: 0 }}>TranVietAnh</F.displaytext>
        <Box
          display={"flex"}
          width={"30%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            "@media (max-width: 1080px)": {
              display: "none",
            },
          }}
        >
          <F.P2>About me</F.P2>
          <F.P2>Skills</F.P2>
          <F.P2>Project</F.P2>
          <F.P2>Contact me</F.P2>
        </Box>
        <Medium_Button sx={ButtonDownloadStyle}>Resume</Medium_Button>
        <Medium_Button sx={ButtonDownloadMobileStyle}>
          <I.DownloadIcon />
        </Medium_Button>
      </Box>
    </>
  );
};

export default Header;
