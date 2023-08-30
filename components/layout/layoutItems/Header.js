import Link from "next/link";
import Logo from "./logo";
import classes from "../header.module.css";

export const Header = () => {
  return (
      <header className={classes.header}>
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
