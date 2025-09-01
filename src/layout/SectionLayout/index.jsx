function SectionLayout({ title, children, elementId }) {
  return (
    <section
      id={elementId}
      className="container flex flex-col items-center pt-24 pb-5">
      <h2 className="text-center text-title-color text-xl font-semibold text--wrap w-40 mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionLayout;
