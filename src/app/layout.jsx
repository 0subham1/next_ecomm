import "./app.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next_ecomm",
  description: "this is made by subham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body className={inter.className}>
          <>
            <Header />
            <Nav />
            <div id="subham">subham</div>
            {children}
          </>
        </body>
      </>
    </html>
  );
}
