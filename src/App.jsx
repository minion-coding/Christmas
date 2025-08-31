import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./views/Hero";
import Giving from "./views/Giving";
import Celebrate from "./views/Celebrate";

import "./App.css";

import { givings } from "./vdatas/VDatas";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Giving data={givings} />
      <Celebrate />
      <Footer></Footer>
    </>
  );
}

export default App;
