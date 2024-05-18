import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

// export const metadata = {
//   title: "OpenResume - Free Open-source Resume Builder and Parser",
//   description:
//     ".",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <TopNavBar /> */}
        {children}
        <Analytics /> 
      </body>
    </html>
  );
}
