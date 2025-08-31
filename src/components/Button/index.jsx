function Button({ type, title }) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-first-color hover:bg-first-color-alt"
          : "bg-title-color hover:bg-title-color-alt"
      } text-white py-4 px-11 rounded-full transition-colors duration-200 w-fit`}>
      {title}
    </button>
  );
}

export default Button;
