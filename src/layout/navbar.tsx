"use client";
import React from "react";
import Link from "next/link";
type Props = {};
function NavBar(props: Props) {
  return (
    <nav className="w-full">
      <ul className="w-6/12 flex">
        <li className="nav-text">
          <Link href="/">Pagrindinis</Link>
        </li>
        <li className="nav-text">
          <Link href="/about">Apie mus</Link>
        </li>
        <li className="nav-text">
          <Link href="/contact">Kontaktai</Link>
        </li>
      </ul>
      <ul className="w-6/12 flex">
        <li className="nav-text">
          <Link href="/login">Prisijungti</Link>
        </li>
        <li className="nav-text">
          <Link href="/registration">Registruotis</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
