import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeSliders from "../../components/sliders/HomeSliders";

const HomeSlidersWrapper = () => {
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <HomeSliders />
      </div>
    </>
  );
};

export default HomeSlidersWrapper;
