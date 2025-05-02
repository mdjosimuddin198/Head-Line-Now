import { ca } from "date-fns/locale";
import React, { use } from "react";
import { NavLink } from "react-router";

const dataPromises = fetch("/categories.json").then((res) => res.json());

const NewsCategories = () => {
  const categories = use(dataPromises);
  // console.log(categories);

  return (
    <div className="grid grid-cols-1 ">
      {categories.map((category) => (
        <NavLink
          to={`/categories/${category.id}`}
          key={category.id}
          className="btn mt-4 text-[#9f9f9f]"
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NewsCategories;
