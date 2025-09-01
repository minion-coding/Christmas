import Logo from "../../components/Logo";
import Avatar from "../../components/Avatar";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex container gap-5 py-5" id="header">
      <Logo title={"Christmas"} />
      <Navbar />
      <Avatar Name={"DJ"} />
    </header>
  );
}

export default Header;
