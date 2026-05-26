import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";


export const freightDisplay = localFont({
  src: [
    { path: "../public/fonts/freight-display-pro/FreightDispProBook-Regular.woff2",     weight: "400", style: "normal"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProBook-Italic.woff2",      weight: "400", style: "italic"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProMedium-Regular.woff2",   weight: "500", style: "normal"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProMedium-Italic.woff2",    weight: "500", style: "italic"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProSemibold-Regular.woff2", weight: "600", style: "normal"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProSemibold-Italic.woff2",  weight: "600", style: "italic"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProBold-Regular.woff2",     weight: "700", style: "normal"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProBold-Italic.woff2",      weight: "700", style: "italic"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProBlack-Regular.woff2",    weight: "900", style: "normal"  },
    { path: "../public/fonts/freight-display-pro/FreightDispProBlack-Italic.woff2",     weight: "900", style: "italic"  },
  ],
  variable: "--font-display",
  display: "swap",
});



export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});