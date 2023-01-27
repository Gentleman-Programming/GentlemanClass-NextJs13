import { Roboto } from "@next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import "./tailwind-global.scss";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head lang="es" className={roboto.className} />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
