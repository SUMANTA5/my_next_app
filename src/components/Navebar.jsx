import React from "react";
// import { useRouter } from "next/router";
import Link from "next/link";

function Navebar() {
  //   const router = useRouter();
  //   const navAbout = () => {
  //     router.push("/about");
  //   };
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/'>
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Sumanta</span>
          </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a class="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/about">
              <a class="mr-5 hover:text-gray-900">About</a>
            </Link>
            <Link href="/project">
              <a class="mr-5 hover:text-gray-900">Projects</a>
            </Link>
            <Link href="/experience">
              <a class="mr-5 hover:text-gray-900">Experience</a>
            </Link>
            <Link href="/contact">
              <a class="mr-5 hover:text-gray-900">Contact</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navebar;
