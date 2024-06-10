import Header from "../../components/header";
import Introduction from "../../pages/home/introduction";
import Hiring from "../../pages/home/hiring";
import AboutMe from "./aboutme";
import MyExperince from "./myexperince";
const home = () => {
  return (
    <>
      <Header />
      <Introduction />

      <Hiring />

      <AboutMe />

      <MyExperince />
    </>
  );
};

export default home;
