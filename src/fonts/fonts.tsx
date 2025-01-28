import {
  Playfair_Display,
  Jomolhari,
  Lexend,
  Gabarito,
} from "next/font/google";

export const jomolhari = Jomolhari({ weight: "400", subsets: ["latin"] });

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});

export const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});
export const gabirato = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});
