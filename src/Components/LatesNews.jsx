import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatesNews = () => {
  return (
    <div className="flex gap-2 p-3 bg-gray-200 items-center">
      <p className="text-white bg-[#D72050] p-2">Lates</p>

      <Marquee  pauseOnHover='true' className="space-x-8">
        <Link to={"/"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam
          deleniti alias labore ea sit cupiditate et aliquam incidunt in!
        </Link>
        <Link to={"/"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam
          deleniti alias labore ea sit cupiditate et aliquam incidunt in!
        </Link>
        <Link to={"/"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam
          deleniti alias labore ea sit cupiditate et aliquam incidunt in!
        </Link>
        <Link to={"/"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nam
          deleniti alias labore ea sit cupiditate et aliquam incidunt in!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatesNews;
