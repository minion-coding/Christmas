function CardImage({ url }) {
  return (
    <img
      src={url}
      className="w-25 transition-transform duration-300 hover:-translate-y-2"
    />
  );
}

export default CardImage;
