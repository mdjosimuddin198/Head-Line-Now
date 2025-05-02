import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Header from "./Header";
import Login from "./Login";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { BiLeftArrow, BiLeftArrowAlt } from "react-icons/bi";

const NewCardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [newsInfo, setNewsInfo] = useState({});
  console.log(id);
  //   console.log(data);

  useEffect(() => {
    const newsDetails = data.find((singlenews) => singlenews.id == id);
    setNewsInfo(newsDetails);
  }, [data, id]);

  return (
    <>
      <header className="w-11/12 mx-auto ">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12  gap-9 mt-5">
        <section className="col-span-9 bg-base-200 border py-4 px-3 rounded-xl">
          <img
            className="rounded-2xl"
            src={newsInfo.thumbnail_url}
            alt={newsInfo.title}
          />
          <h2 className="text-2xl mt-5  font-bold ">{newsInfo.title}</h2>
          <p className="text-accent">{newsInfo.details}</p>
          <Link
            to={`/categories/${newsInfo.category_id}`}
            className="btn btn-outline bg-secondary text-white"
          >
            <BiLeftArrowAlt size={24}></BiLeftArrowAlt> All news in this
            category
          </Link>
        </section>
        <section className="right col-span-3">
          <h2 className="text-primary font-bold text-2xl">Login With</h2>
          <aside>
            <Login></Login>
            <FindUs></FindUs>
            <QZone></QZone>
          </aside>
        </section>
      </main>
    </>
  );
};

export default NewCardDetails;
