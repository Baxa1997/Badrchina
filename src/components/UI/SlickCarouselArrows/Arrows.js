import React from "react";
import { Box } from "@mui/material";
import { ArrowNextIcon, ArrowPrevIcon } from "components/svg";

export function ArrowRight(props) {
  const { className, style, onClick, styles } = props;
  return (
    <div>
      <Box
        sx={{
          ...style,
          color: "#5B6871",
          background: "#fff",
          height: "48px",
          width: "48px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "40%",
          right: "-20px",
          cursor: "pointer",
          boxShadow: '2px 1px 12px rgba(0, 0, 0, 0.07)'
        }}
        onClick={onClick}
      >
        <ArrowNextIcon />
      </Box>
    </div>
  );
}

export function ArrowLeft(props) {
  const { className, style, onClick, styles } = props;
  return (
    <div>
      <Box
        sx={{
          ...style,
          background: "#fff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "40%",
          left: "-25px",
          width: "48px",
          height: "48px",
          zIndex: "99",
          cursor: "pointer",
          boxShadow: '2px 1px 12px rgba(0, 0, 0, 0.07)'
        }}
        onClick={onClick}
      >
        <ArrowPrevIcon />
      </Box>
    </div>
  );
}
