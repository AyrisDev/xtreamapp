import { Thumbnail } from "./index";

type Props = {
  title: string;
};

const Collection: React.FC<Props> = ({ title }) => {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto no-scrollbar">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden  scrollbar-hide p-2 -m-2">
        <Thumbnail />
      </div>
    </div>
  );
};

export default Collection;
