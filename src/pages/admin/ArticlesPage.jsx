import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import ArticleList from "../../components/admin/Articles";

const ArticlesPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="w-full lg:mx-2 lg:ps-[270px]">
        <ArticleList />
      </div>
    </>
  );
};

export default ArticlesPage;
