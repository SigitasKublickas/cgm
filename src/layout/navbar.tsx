"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {
  login: boolean;
};
function NavBar(props: Props) {
  const [expandSideBar, setExpandSideBar] = useState<boolean>(false);
  return (
    <nav className="w-full h-12 bg-slate-600 flex">
      <div
        className={`w-8 h-full flex flex-col gap-y-1 justify-center ml-8 cursor-pointer md:${
          props.login ? "flex" : "hidden"
        }`}
      >
        <div className="border-solid border-2 border-slate-950"></div>
        <div className="border-solid border-2 border-slate-950"></div>
        <div className="border-solid border-2 border-slate-950"></div>
      </div>
      <div
        className={`w-full  fixed md:static md:flex-row top-12 gap-y-3 flex flex-col bg-slate-600 h-full`}
      >
        <ul className="w-full pl-8 md:w-6/12 flex flex-col md:flex-row">
          <li className="w-full md:w-2/6 p-2 md:flex-center md:pl-0">
            <Link href="/">Pagrindinis</Link>
          </li>
          <li className="w-full md:w-2/6 p-2 md:flex-center md:pl-0">
            <Link href="/about">Apie mus</Link>
          </li>
          <li className="w-full md:w-2/6 p-2 md:flex-center md:pl-0">
            <Link href="/contact">Kontaktai</Link>
          </li>
        </ul>
        <ul className="w-full pl-8  md:w-6/12  flex flex-col md:flex-row">
          {!props.login ? (
            <>
              <li className="w-full p-2 md:w-3/6 md:flex-center md:pl-0">
                <Link href="/login">Prisijungti</Link>
              </li>
              <li className="w-full p-2 md:w-3/6 md:flex-center md:pl-0">
                <Link href="/registration">Registruotis</Link>
              </li>
            </>
          ) : (
            <>
              <li className="w-full p-2 md:w-3/6 md:flex-center md:pl-0">
                <Link href="/login">Sigitas Kublickas</Link>
              </li>
              <li className="w-full p-2 md:w-3/6 md:flex-center md:pl-0">
                <Link href="/registration">Atsijungti</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
