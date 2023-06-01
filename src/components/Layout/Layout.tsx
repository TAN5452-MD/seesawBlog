import type { NextPage } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Layout: NextPage = (props: any) =>{
  const chrildren = props.children;
  return (
    <div style={{width:"100%",height:"100%"}}>
    <Navbar></Navbar>
    <main>{chrildren}</main>
    <Footer></Footer>
    </div>
  )
}

export default Layout
