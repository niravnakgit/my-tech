import {Public_Sans} from "next/font/google";
import "./globals.css";

const public_sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Mytech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={public_sans.className}
      >
        {children}
      </body>
    </html>
  );
}
