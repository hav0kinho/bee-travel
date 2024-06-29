import logo from "../../assets/Logo.svg";
import useScrollToId from "../../util/hooks/useScrollToId";
import ContactButton from "../ContactButton";

const Header = () => {
  const scrollToHome = useScrollToId("home");
  const scrollToCountries = useScrollToId("countries");
  const scrollToFeatures = useScrollToId("features");
  const scrollToCustomers = useScrollToId("customers");

  return (
    <header className="flex w-full items-center justify-between h-[54px]">
      <nav className="flex w-[550px] items-center justify-between">
        <img src={logo} alt="Logo BeeTravel" className=" h-[20px]" />
        <ul className="flex items-center gap-8">
          <li>
            <a onClick={scrollToHome} className="text-primary-orange">
              Home
            </a>
          </li>
          <li>
            <a onClick={scrollToCountries}>Countries</a>
          </li>
          <li>
            <a onClick={scrollToFeatures}>Features</a>
          </li>
          <li>
            <a onClick={scrollToCustomers}>Customers</a>
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
