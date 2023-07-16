import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

import Desktop from "./Topbar/Desktop";
import Mobile from "./Topbar/Mobile";
import styles from "./Header.module.scss";

export function Header() {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();
  const { t } = useTranslation("common");
  const langs = [
    {
      key: "ru",
      label: "ru",
    },
    {
      key: "uz",
      label: "uz",
    },
    {
      key: "en",
      label: "en",
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 59) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header className={`${styles.header} ${navbar && styles.active}`}>
      <Desktop />
      <Mobile />
    </header>
  );
}
