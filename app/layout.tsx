import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

// const myFont = localFont({
//   src: [
//     {
//       path: "Font/Infra-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "Font/Infra-Medium.woff2",
//       weight: "500",
//       style: "medium",
//     },
//     {
//       path: "Font/Infra-SemiBold.woff2",
//       weight: "600",
//       style: "semibold",
//     },
//     {
//       path: "Font/Infra-Bold.woff2",
//       weight: "700",
//       style: "bold",
//     },
//   ],
// });

const myFont = localFont({ src: "Font/CarbonBold.woff2" });

export const metadata: Metadata = {
  title: "DSG",
  description: "Graphic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
