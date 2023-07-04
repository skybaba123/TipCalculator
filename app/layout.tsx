import "./globals.scss";
// import { Space_Mono } from "next/font/google";

// const spaceMono = Space_Mono({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Tip Calculator App",
  description: "Calculate your tip with ease",
};

interface RootType {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootType) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
