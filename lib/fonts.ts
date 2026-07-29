import localFont from "next/font/local";

export const freightDisplay = localFont({
  src: [
    { path: "../public/fonts/freight-display-pro/FreightDispProBook-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/freight-display-pro/FreightDispProBook-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/freight-display-pro/FreightDispProMedium-Regular.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/freight-display-pro/FreightDispProMedium-Italic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/freight-display-pro/FreightDispProBold-Regular.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});
