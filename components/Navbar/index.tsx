import s from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <p>startup.hata</p>
      <ul>
        <li>
          <a href="/who">Кто мы такие</a>
        </li>
        {/* <li>
          <a href="/about">Квартира</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;