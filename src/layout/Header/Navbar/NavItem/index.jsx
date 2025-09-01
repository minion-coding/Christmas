function NavItem({ caption, isActive, handleClick }) {
  return (
    <li>
      <a
        href={`#${caption.toLowerCase()}`}
        className={
          isActive
            ? "text-base font-medium text-first-color"
            : "text-base font-medium text-title-color"
        }
        onClick={handleClick}>
        {caption}
      </a>
    </li>
  );
}

export default NavItem;
