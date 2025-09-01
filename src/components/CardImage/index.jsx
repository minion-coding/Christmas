function CardImage({ url, size }) {
  return (
    <img
      src={url}
      className={`relative w-${
        size ? size : 25
      } justify-self-center transition-transform duration-300 hover:-translate-y-2`}
    />
  );
}

export default CardImage;
