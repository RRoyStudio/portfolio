import localFont from "next/font/local";
import "./globals.css";


const roca = localFont({
  src: [
    {
      path: "../../public/fonts/Roca-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/Roca-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Roca-Black.woff2",
      weight: "900",
      style: "black",
    },
    {
      path: "../../public/fonts/Roca-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Roca-Light-Italic.woff2",
      weight: "300",
      style: "italic-light",
    },
  ],
});

export const metadata = {
  title: "Rebeccas Portfolio",
  description: "A portfolio for Rebecca Roy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roca.className}>
      <body>{children}
      </body>
    </html>
  );
}