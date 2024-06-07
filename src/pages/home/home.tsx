import Header from "../../components/header";
import Introduction from "../../pages/home/introduction";
import Hiring from "../../pages/home/hiring";
import AboutMe from "./aboutme";
const home = () => {
  return (
    <>
      <Header />
      <Introduction />

      <Hiring />

      <AboutMe />
    </>
  );
};

export default home;
