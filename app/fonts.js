import { Cactus_Classical_Serif } from "next/font/google";
import { Noto_Sans } from "next/font/google";
const cactus = Cactus_Classical_Serif({ subsets: ["latin"], weight: ["400"], variable: "--font-cactus" });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-noto" });
export { cactus, noto };