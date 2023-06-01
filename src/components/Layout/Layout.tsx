import type { NextPage } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage = ({children}:LayoutProps) =>{
  return (

    <main>{children}</main>
    <Footer></Footer>
    </div>
  )
}

export default Layout
