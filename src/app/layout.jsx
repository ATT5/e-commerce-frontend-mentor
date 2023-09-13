import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";

const font = Kumbh_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const layout = ({ children }) => {
  return (
    <html>
      <body className={font.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default layout;
