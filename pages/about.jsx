import React from "react";
import Head from "next/head";
import { SiBloglovin } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { AiOutlineDownload } from "react-icons/ai";
import { AiFillCloud } from "react-icons/ai";
import Link from "next/link";
function Home() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center ">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
                <Link href='/user'>
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg cursor-pointer">
                <div className="text-blue-600 flex justify-center mb-9">
                  <FiUsers size={50} />
                </div>
                <p class="leading-relaxed mr-3">User</p>
              </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
            <Link href='/bloge'>
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg cursor-pointer ">
                <div className="text-blue-600 flex justify-center mb-9">
                  <SiBloglovin size={50} />
                </div>
                <p class="leading-relaxed mr-4">Blog</p>
              </div>
              </Link>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg cursor-pointer ">
                <div className="text-blue-600 flex justify-center mb-9">
                  <AiOutlineDownload size={50} />
                </div>

                <p class="leading-relaxed ">Download</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg cursor-pointer ">
                <div className="text-blue-600 flex justify-center mb-9">
                  <AiFillCloud size={50} />
                </div>
                <p class="leading-relaxed">Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
