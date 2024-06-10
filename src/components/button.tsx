import { styled, Button } from "@mui/material";
import color from "../config/color";
const Medium_Button = styled(Button)({
  height: "56px",
  backgroundColor: color.Black,
  color: color.White,
  borderRadius: "4px",
  border: "none",
  fontWeight: "600px",
  fontSize: "20px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: color.Neutral,
  },
  "&:active": {
    backgroundColor: color.White,
    color: color.Black,
    border: "1px solid " + color.Black,
  },
});

export default Medium_Button;
