import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <Link href="/login">back </Link>

      <iframe
        className="w-full aspect-video sm: pr-4 pl-4"
        src={"https://autoembed.to/movie/tmdb/385687"}
        frameBorder={`0`}
        allowFullScreen={true}></iframe>
    </div>
  );
};

export default index;
