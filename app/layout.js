import Main_Header from "@/components/header/main-header";
import "./globals.css";
import Main_Footer from "@/components/footer/main-footer";


export default function RootLayout({ children, navbarData, footerData, bgcolor }) {

  return (
    <html className="bg-white" lang="en">
      <body className={"bg-[#96c5f7]"}>
      <Main_Header data={navbarData} />
      {children}
      <Main_Footer data={footerData} />
      </body>
      
    </html>
  );
}
