import { Libre_Franklin, Lexend_Deca, Roboto, DM_Sans } from "next/font/google";

export const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});
export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  display: "swap",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  display: "swap",
  subsets: ["latin"],
});
