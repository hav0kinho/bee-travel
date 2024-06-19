import logo from "../../assets/Logo.svg";
import ContactButton from "../ContactButton";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between h-[54px]">
      <nav className="flex w-[550px] items-center justify-between">
        <img src={logo} alt="Logo BeeTravel" className=" h-[20px]" />
        <ul className="flex items-center gap-8">
          <li>
            <a href="#" className="text-primary-orange">
              Home
            </a>
          </li>
          <li>
            <a href="#">Countries</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
        </ul>
      </nav>

      <div>
        <ContactButton />
      </div>
    </header>
  );
};

export default Header;
