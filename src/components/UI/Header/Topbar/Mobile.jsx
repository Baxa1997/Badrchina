import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Drawer } from "@mui/material";

import styles from "../Header.module.scss";
import Logo from "../../../../../public/images/Logo.png";
import {
  MenuBurgerIcon,
  DrawerCloseIcon,
  DrawerPhoneIcon,
} from "../../../svg.js";

function Mobile() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => setOpenDrawer(true);
  const handleClose = () => setOpenDrawer(false);

  return (
    <>
      <div className={styles.mobile_topbar}>
        <Container>
          <div className={styles.mobile_header}>
            <div>
              <Link href="/">
                <a className={styles.mobile_header_logo}>
                  <Image src={Logo} alt="" width={119.1} height={27} />
                </a>
              </Link>
            </div>
            {openDrawer || (
              <button onClick={handleOpen} className={styles.mobile_header_btn}>
                <MenuBurgerIcon />
              </button>
            )}
          </div>
        </Container>
      </div>

      <Drawer open={openDrawer} anchor="left" onClose={handleClose}>
        <div className={styles.mobile_header_drawer}>
          <div className={styles.mobile_header_brand}>
            <button onClick={handleClose}>
              <DrawerCloseIcon />
            </button>
            <Link href="/">
              <a
                className={styles.mobile_header_drawer_logo}
                onClick={handleClose}
              >
                <Image src={Logo} alt="" width={119.1} height={27} />
              </a>
            </Link>
          </div>
          <div className={styles.mobile_header_links}>
            <Link href="/#courses">
              <a className={styles.mobile_header_link} onClick={handleClose}>
                All courses
              </a>
            </Link>
            <Link href="/#feedback">
              <a className={styles.mobile_header_link} onClick={handleClose}>
                Feedbacks
              </a>
            </Link>
            <Link href="/#numbers">
              <a className={styles.mobile_header_link} onClick={handleClose}>
                About us
              </a>
            </Link>
          </div>
          <a
            href="tel:+998 (99) 400-20-40"
            className={styles.mobile_header_phone}
            onClick={handleClose}
          >
            <span className={styles.mobile_header_phone_icon}>
              <DrawerPhoneIcon />
            </span>
            <span className={styles.mobile_header_phone_number}>
              +998 (99) 400-20-40
            </span>
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Mobile;
