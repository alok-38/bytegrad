import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* Use Link from next/link with the logo content */}
      <Link href="/">
        {/* Apply styles directly to the logo content */}
        <div className={styles.logo}>Logo</div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
