import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSide = () => {
    const [Categorys, setCategory]= useState([])
    
    //     "category_id": "03",
    //     "category_name": "International News"
    //   },

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
          .then((res) => res.json())
          .then((data) => setCategory(data.data.news_category));
    },[])

    return (
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">All Category({Categorys.length})</h2>
        <div className="flex flex-col bg-gray-200 p-4 gap-2">
          {Categorys.map((Category) => (
            <NavLink
              to={`/Category/${Category.category_id}`}
              className="btn"
              key={Category.category_id}
            >
              {Category.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default LeftSide;