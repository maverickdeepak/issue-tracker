import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={"navigation"}>
      <div className={"navigation__left"}>
        <p className={"navigation__left__logo"}>🌸</p>
      </div>
      <div className={"navigation__right"}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/price"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/faq"}>FAQ</Link>
          </li>
        </ul>
        <Link href={"/register"} className={"btn btn-primary"}>
          Register
        </Link>
        <Link href={"/login"} className={"btn btn--secondary"}>
          Login
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
