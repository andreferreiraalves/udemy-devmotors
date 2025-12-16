"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { X, Menu } from "lucide-react";

export function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toogleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.submenu}>
      <div className={styles.submenuIcon} onClick={toogleMenu}>
        <Menu size={34} color="#121212" />
        Menu
      </div>

      <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
        {isOpen && (
          <button onClick={toogleMenu} className={styles.closeButton}>
            <X size={54} color="#121212" />
          </button>
        )}

        <li>
          <Link href="/post/pagina-1">Página 1</Link>
        </li>
        <li>
          <Link href="/post/pagina-2">Pagina 2</Link>
        </li>
        <li>
          <Link href="/post/pagina-3">Pagina 3</Link>
        </li>
      </ul>
    </section>
  );
}
