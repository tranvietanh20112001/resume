import { styled } from "@mui/material";

const displaytext = styled("h1")({
  fontSize: "48px",
  lineHeight: "56px",
  tracking: "-2%",
  margin: 0,
  fontWeight: "400px",
  "@media (max-width: 768px)": {
    fontSize: "28px",
    lineHeight: "32px",
  },
});
// const displaytext_medium = styled.p`
//   font-size: 24px;
//   line-height: 28px;
//   tracking: -2%;
// `;

// const P1 = styled.p`
//   font-size: 20px;
//   line-height: 24px;
//   tracking: 2%;
// `;

const P2 = styled("p")({
  fontSize: "16px",
  lineHeight: "20px",
  tracking: "2%",
  margin: 0,
});

// const P3 = styled.p`
//   font-size: 12px;
//   line-height: 16px;
//   tracking: 2%;
// `;

// const H1 = styled.h1`
//   font-size: 36px;
//   line-height: 44px;
//   tracking: -2%;
// `;

// const H2 = styled.h2`
//   font-size: 32px;
//   line-height: 40px;
//   tracking: -2%;
// `;

// const H3 = styled.h3`
//   font-size: 28px;
//   line-height: 32px;
//   tracking: -2%;
// `;

// const H4 = styled.h4`
//   font-size: 24px;
//   line-height: 28px;
//   tracking: -2%;
// `;

// const H5 = styled.h5`
//   font-size: 20px;
//   line-height: 24px;
//   tracking: -2%;
// `;

// const H6 = styled.h6`
//   font-size: 16px;
//   line-height: 20px;
//   tracking: -2%;
// `;

export default {
  displaytext,
  //   displaytext_medium,
  //   P1,
  P2,
  //   P3,
  //   H1,
  //   H2,
  //   H3,
  //   H4,
  //   H5,
  //   H6,
};
