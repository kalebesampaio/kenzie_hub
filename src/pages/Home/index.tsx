import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { TechList } from "../../components/TechList";
import { HomeStyle } from "./style";

export const Home = () => {
  return (
    <HomeStyle>
      <Navbar />
      <Header />
      <TechList />
    </HomeStyle>
  );
};
