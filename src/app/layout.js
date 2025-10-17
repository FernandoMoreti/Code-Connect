import { Prompt } from "next/font/google";
import { Aside } from "@/components/Aside";
import "./globals.css";

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="flex justify-center w-screen gap-7 h-screen p-10">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
