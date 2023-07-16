import React from "react";
import { Container } from "@mui/material";

import styles from "./stepInfo.module.scss";

function StepInfo({stepInfo}) {
  return (
    <div className={styles.stepInfo}>
      <Container className="container">
        <div className={styles.stepInfo_content}>
          {stepInfo?.map((item) => (
            <div key={item?.id} className={styles.stepInfo_content_item}>
              <div className={styles.stepInfo_title}>
                <div className={styles.stepInfo_dot}></div>
                <h3>{item?.title}</h3>
              </div>
              <p className={styles.stepInfo_subtitle}>{item?.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default StepInfo;
