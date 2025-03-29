import { Font } from "@react-email/components";
import React from "react";

export default function RobotoFont() {
  return (
    <Font
      fontFamily="Roboto"
      fallbackFontFamily={["Helvetica", "Arial", "sans-serif"]}
      webFont={{
        url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&display=swap",
        format: "woff2",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
  );
}
