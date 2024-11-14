import { useLoaderData } from "react-router-dom";
import SingelNews from "./SingelNews";


const AllNewsCategory = ( ) => {
    const {data:news} = useLoaderData();
    console.log(news);
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dragon News Home</h2>
      <p>({news.length})all data</p>

      <div className="space-y-4">
        {news.map((singelNew) => (
          <SingelNews key={singelNew._id} news={singelNew}></SingelNews>
        ))}
      </div>
    </div>
  );
};

export default AllNewsCategory;