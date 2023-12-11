import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import AllOrders from "../../components/orders/AllOrders";

const AllOrderList = () => {
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <AllOrders/>
      </div>
    </>
  );
};

export default AllOrderList;
