import React from "react";
import Image from "next/image";
import { Dialog, Button } from "@mui/material";

import styles from "./Success.module.scss";
import { CancelBtn } from "../../svg.js";
import SuccesIcon from "../../../../public/images/success_icon.png";

function Succes({ open, close }) {
  return (
    <Dialog
      open={open}
      className={styles.success_dialog}
      onClose={close}
      id="success_dialog"
    >
      <div className={styles.success_content}>
        <div className={styles.success_content_context}>
          <div className={styles.success_image}>
            <Image src={SuccesIcon} alt="" layout="fill" objectFit="cover" />
          </div>
          <h2>
            {/* Muvaffaqiyatli */}
            Successful
          </h2>
          <p>
            {/* Sizni arizangizni muvaffaqiyatli topshirildi. Tez orada bizning
            mutaxassislar siz bilan bog'lanadi. */}
            Your application has been successfully submitted. Our specialists
            will contact you soon.{" "}
          </p>
          <Button href="/" className={styles.home_page_btn}>
            {/* Bosh sahifaga qaytish */}
            Main page
          </Button>
        </div>
      </div>
    </Dialog>
  );
}

export default Succes;
