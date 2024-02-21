import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import { HiOutlineFilter } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import noDataImg from "../../assets/nodata.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccessoriesItem = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getAccessoriesData, setGetAccessoriesData] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [currentBuyerPage, setcurrentBuyerPage] = useState(1);
  const itemsPerBuyerPage = 5;

  const indexOfLastBuyerItem = currentBuyerPage * itemsPerBuyerPage;
  const indexOfFirstBuyerItem = indexOfLastBuyerItem - itemsPerBuyerPage;
  const currentBuyerItems = getAccessoriesData.slice(
    indexOfFirstBuyerItem,
    indexOfLastBuyerItem
  );

  const totalBuyerPages = Math.ceil(
    getAccessoriesData.length / itemsPerBuyerPage
  );

  const nextBuyerPage = () => {
    setcurrentBuyerPage(currentBuyerPage + 1);
  };

  const prevBuyerPage = () => {
    setcurrentBuyerPage(currentBuyerPage - 1);
  };

  const getAccessoriesItem = async () => {
    const result = await axios.get("http://localhost:3600/inventory");
    const AccessoriesData = result.data.filter(
      (item) => item.category === "accessories"
    );
    setGetAccessoriesData(AccessoriesData);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3600/inventory/delete/${id}`)
      .then(() => {
        alert("Deleted Successfully");
        getAccessoriesItem();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAccessoriesItem();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Bars
            height="80"
            width="80"
            color="#40a1ed"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="layout-1">
          <SideBar />
          {/* start: body area */}
          <div className="wrapper">
            {/* start: page header */}
            <NavBar />
            {/* start: page toolbar */}

            <div className="main-div-2">
              <div className="table" id="main-table">
                <div className="input-group-1">
                  <p>Accessories List</p>
                  <div className="input-group ">
                    <input
                      type="search"
                      className="rounded search-bar"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="search-addon"
                    />
                    <button
                      type="button"
                      className="btn search-btn"
                      style={{
                        backgroundColor: "rgba(0, 172, 154, 1)",
                        color: "white",
                      }}
                    >
                      Search
                    </button>
                  </div>
                  <div className="filter-container">
                    <div className="filter">
                      <HiOutlineFilter size={30} color="rgba(0, 172, 154, 1)" />
                    </div>
                  </div>
                </div>
                {getAccessoriesData.length > 0 ? (
                  <table
                    className="table table-bordered "
                    style={{ height: "40vh" }}
                  >
                    <div id="table-responsive" className="table-responsive">
                      <table
                        id="table"
                        className="table table-hover table-striped text-nowrap table-vcenter mb-0"
                      >
                        <thead>
                          <tr>
                            <th>Sl No</th>
                            <th>ITEMS NAME</th>
                            <th>ITEM CODE</th>
                            <th>OPENING STOCK</th>
                            <th>STATUS</th>
                            <th>SELLING PRICE</th>
                            <th>PURCHASE PRICE</th>
                            <th>ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentBuyerItems.map((item, index) => (
                            <tr key={index} style={{ cursor: "pointer" }}>
                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                {index + indexOfFirstBuyerItem + 1}
                              </td>
                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                {item.itemName}
                              </td>

                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                {item.itemCode}
                              </td>
                              <td>{item.openingStock} PCS</td>
                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                <button
                                  className={
                                    item.reorderPoint > 15
                                      ? "button-status-green"
                                      : "button-status-red"
                                  }
                                  style={{
                                    width: "80px",
                                  }}
                                >
                                  {item.reorderPoint > 15
                                    ? "In Stock"
                                    : "Low Stock"}
                                </button>
                              </td>
                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                ₹ {item.salesPrice}
                              </td>
                              <td
                                onClick={() =>
                                  navigation(
                                    `/inventory/items-list/${item._id}`
                                  )
                                }
                              >
                                ₹ {item.purchasePrice}
                              </td>
                              <div className="action-btn">
                                <td>
                                  <FiEdit style={{ color: "#6F6F6F" }} />
                                </td>
                                <td onClick={() => handleDelete(item._id)}>
                                  <AiOutlineDelete style={{ color: "red" }} />
                                </td>
                              </div>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </table>
                ) : (
                  <div style={{ width: "100%", textAlign: "center" }}>
                    <img src={noDataImg} alt="no-data" />
                  </div>
                )}
              </div>
              <div>
                <button
                  className="buyer-page-btn"
                  onClick={prevBuyerPage}
                  disabled={currentBuyerPage === 1}
                >
                  Previous
                </button>
                <button
                  className="buyer-page-btn"
                  onClick={nextBuyerPage}
                  disabled={
                    currentBuyerPage === totalBuyerPages ||
                    totalBuyerPages === 0
                  }
                >
                  Next
                </button>
              </div>
              <div>
                Page {currentBuyerPage} of {totalBuyerPages}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessoriesItem;
