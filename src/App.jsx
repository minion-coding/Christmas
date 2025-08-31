import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./views/Hero";
import Giving from "./views/Giving";
import Celebrate from "./views/Celebrate";
import GiftSection from "./views/GiftSection";

import "./App.css";

import { givings, gifts } from "./vdatas/VDatas";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Giving data={givings} />
      <Celebrate />
      <GiftSection data={gifts} />
      <Footer></Footer>
    </>
  );
}

export default App;
