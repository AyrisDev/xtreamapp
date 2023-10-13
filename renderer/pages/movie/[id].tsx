import Head from "next/head";
import Image from "next/image";

import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// import request from '../../api/movie.json';

const Movie = ({}) => {
  return (
    <div>
      <Head>
        <title>title</title>
      </Head>
      <main className="relative z-50">
        <div className="relative min-h-[calc(100vh-80px)]">
          <Image
            src="https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute z-20 inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">title</h1>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button className="text-xs md:text-base text-black flex items-center bg-[#f9f9f9] py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
              <img
                src="/images/play-icon-black.svg"
                alt="play"
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">Play</span>
            </button>
            <button className="text-xs md:text-base text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center bg-black/30 py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
              <img
                src="/images/play-icon-white.svg"
                alt="play"
                className="h-6 md:h-8"
              />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </button>
            <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60"></div>
            <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
              <img src="/images/group-icon.svg" alt="group" />
            </div>
          </div>
          <p className="text-xs md:text-sm"></p>
          <h4 className="text-sm md:text-lg max-w-4xl">overview</h4>
        </div>

        <div
          className="absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 
       opacity-100 z-50">
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"></div>
          </div>
          <div className="relative pt-[56.25%]"></div>
        </div>
      </main>
    </div>
  );
};

export default Movie;
