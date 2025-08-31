function Logo({ title }) {
  return (
    <a className="flex items-center gap-x-1.5 text-base font-bold text-title-color">
      <img src="./src/assets/logo.png" alt="logo" className="w-6" />
      {title}
    </a>
  );
}

export default Logo;
