import Image from "next/image";
import { useRouter } from "next/router";

const Thumbnail = ({}) => {
  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px]
    rounded-lg overflow-hidden shadow-xl  no-scrollbar cursor-pointer border-3px border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <Image
        src="https://images.unsplash.com/photo-1532423622396-10a3f979251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
        width={330}
        height={210}
        objectFit="cover"
        objectPosition="top"
        className="rounded-lg"
      />
    </div>
  );
};

export default Thumbnail;
