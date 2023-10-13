import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Slider from "../components/slider";
import Brands from "../components/Brands";
import { Collection } from "../components";
function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <Slider />
      <Brands />
      <Collection title="Popular Movies" />
    </React.Fragment>
  );
}

export default Home;
