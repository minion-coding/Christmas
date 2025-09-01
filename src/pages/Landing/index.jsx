import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Hero from "../../views/Hero";
import Giving from "../../views/Giving";
import Celebrate from "../../views/Celebrate";
import GiftSection from "../../views/GiftSection";
import NewGiftSection from "../../views/NewGiftSection";
import MessageSection from "../../views/MessageSection";

import { givings, gifts } from "../../vdatas/VDatas";

function LandingPage() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Giving data={givings} />
      <Celebrate />
      <GiftSection data={gifts} />
      <NewGiftSection data={gifts} />
      <MessageSection />
      <Footer></Footer>
    </>
  );
}

export default LandingPage;
