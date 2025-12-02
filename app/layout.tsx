import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import "./globals.css";
import Providers from "./providers";
import { fetchStaffs, fetchTimeInfo } from "@/actions/server/data";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSG",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["staffs"],
      queryFn: fetchStaffs,
    }),
    queryClient.prefetchQuery({
      queryKey: ["hours"],
      queryFn: fetchTimeInfo,
    }),
  ]);

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
