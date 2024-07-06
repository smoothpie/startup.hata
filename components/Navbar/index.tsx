import Link from "next/link";
import s from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <Link href="/">
        <p>startup.hata</p>
      </Link>
      <ul>
        <li>
          <Link href="/who">Кто мы такие</Link>
        </li>
        {/* <li>
          <a href="/about">Квартира</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;