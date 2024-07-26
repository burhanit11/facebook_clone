import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook CLone App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="@favicon.ico" sizes="any" />
        <meta name="description" content="NextJs web app" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* <Providers>{children}</Providers> */}
        {children}
      </body>
    </html>
  );
}