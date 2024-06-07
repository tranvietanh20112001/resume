import { Box } from "@mui/material";
import Medium_Button from "./button";
import F from "./font";
const Header = () => {
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
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <F.P2>About me</F.P2>
          <F.P2>Skills</F.P2>
          <F.P2>Project</F.P2>
          <F.P2>Contact me</F.P2>
        </Box>
        <Medium_Button style={{ width: "150px" }}>Resume</Medium_Button>
      </Box>
    </>
  );
};

export default Header;
