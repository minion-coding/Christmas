import Logo from "../../components/Logo";
import Avatar from "../../components/Avatar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex container gap-5 py-5">
      <Logo title={"Christmas"} />
      <Navbar />
      <Avatar Name={"DJ"} />
    </div>
  );
}

export default Header;
