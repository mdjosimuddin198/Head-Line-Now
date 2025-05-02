import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import NewsCategories from "../components/NewsCategories";
import Login from "../components/Login";
import FindUs from "../components/FindUs";
import QZone from "../components/QZone";

const HomeLayout = () => {
  return (
    <>
      <header className="w-11/12 mx-auto">
        <Header></Header>
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-3 mt-5">
        <section className="left col-span-3 sticky top-0 h-fit">
          <h3 className="text-primary font-bold text-2xl">All Categories</h3>
          <div>
            <NewsCategories></NewsCategories>
          </div>
        </section>
        <section className="mid col-span-6">
          <h2 className="text-primary font-bold text-2xl">Dragon News Home</h2>
          <Outlet></Outlet>
        </section>
        <section className="right col-span-3">
          <h2 className="text-primary font-bold text-2xl">Login With</h2>
          <aside className="sticky top-0 h-fit">
            <Login></Login>
            <FindUs></FindUs>
            <QZone></QZone>
          </aside>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
};

export default HomeLayout;
