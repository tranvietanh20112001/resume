import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import C from "../../config/color";
import { Box } from "@mui/material";
import F from "../../components/font";
import { styled } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const myexperince = () => {
  const iconStyle = {
    background: C.Black,
    color: C.White,
  };

  const ContentStyle = {
    background: C.Black,
  };

  const contentRightArrowStyle = {
    borderRight: "7px solid",
    borderRightColor: C.Black,
  };

  const Title = styled(F.H3)({
    color: C.White,
    marginBottom: "12px",
  });

  const SubTitle = styled(F.H4)({
    color: C.White,
  });

  const P = styled(F.P2)({
    color: C.White,
  });

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} margin={"24px 0"}>
        <F.displaytext>My Experince</F.displaytext>
      </Box>
      <VerticalTimeline lineColor={C.Neutral}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={ContentStyle}
          contentArrowStyle={contentRightArrowStyle}
          date="2024 - present"
          iconStyle={iconStyle}
          icon={<WorkIcon />}
        >
          <Title>Freelance Frontend Developer</Title>
          <SubTitle>Ha Noi</SubTitle>
          <P>
            Use Reactjs, HTML, CSS, JS, MUI, Redux and other libraries to design
            interfaces and call APIs from the backend
          </P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11/2023-2/2024"
          iconStyle={iconStyle}
          contentStyle={ContentStyle}
          contentArrowStyle={contentRightArrowStyle}
          icon={<WorkIcon />}
        >
          <Title>Intern Frontend Developer</Title>
          <SubTitle>FPT Academy</SubTitle>
          <P>
            Learn ReactJS, advanced knowledge of HTML, CSS, JS, and complete
            assigned tasks
          </P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={ContentStyle}
          contentArrowStyle={contentRightArrowStyle}
          date="4/2023 - 8/2023"
          iconStyle={iconStyle}
          icon={<WorkIcon />}
        >
          <Title>Intern Business Analyst/ Frontend Developer</Title>
          <SubTitle>The Tech Garden</SubTitle>
          <P>
            Analyze requirements and document the Social Network project for
            learning and exams, design the interface on Figma, develop the
            interface in HTML, CSS, Js
          </P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={ContentStyle}
          contentArrowStyle={contentRightArrowStyle}
          date=" 11/2021-5/2022"
          iconStyle={iconStyle}
          icon={<WorkIcon />}
        >
          <Title>Frontend Developer</Title>
          <SubTitle>Alphaway Technology</SubTitle>
          <P>
            Using Angular Framework, developing interfaces using HTML, SASS, Js
          </P>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={iconStyle}
          icon={<ArrowUpwardIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default myexperince;
