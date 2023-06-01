'use client'
import type { NextPage } from "next";
import style from "./index.module.scss";
import {navs} from './config'
import Link from "next/link";
import { Segmented } from "antd";

const Navbar: NextPage = ({}) =>{
  return (
    <div className={style.navbar}>
      <section style={{marginRight:'60px'}}> Seesaw </section>
      <section> 
        {
          navs?.map((nav) => (
            <Link key={nav?.label} href={nav?.value} className={style.navitem}>
              {nav?.label}
            </Link>
          ))
        }
        <Segmented options={['首页','咨询']}/>
      </section>
    </div>
  )
}

export default Navbar
