import SlideShowGallery from "../../components/SlideShowGallery";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

import { urlArray, properties } from "../../vdatas/VDatas";
import PropertyList from "./PropertyList";

function ProductPage() {
  return (
    <>
      <Header />
      <section className="container flex flex-row justify-center-safe items-center">
        <SlideShowGallery urlArray={urlArray} />
        <PropertyList data={properties} />
      </section>
      <Footer />
    </>
  );
}

export default ProductPage;
