import React, { useEffect, useState } from "react";
import stock from "../../assets/now-in-stock.png";
import expense from "../../assets/expense.png";
import revenue from "../../assets/revenue.png";
import customer from "../../assets/customer.png";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import "../../Styles.css";
import { Bars } from "react-loader-spinner";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
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
        <div className="layout-1" s>
          <SideBar />
          {/* start: body area */}
          <div className="wrapper">
            {/* start: page header */}
            <NavBar />
            {/* start: page toolbar */}
            <>
              <div className="page-toolbar px-xl-4 px-sm-2 px-0 py-3">
                <div className="container-fluid">
                  {/* .row end */}
                  <div className="row align-items-center">
                    <div className="col">
                      <h1 className="fs-5 color-900 mt-1 mb-0">
                        Welcome back, Insta-e-Mart!
                      </h1>
                      <small className="text-muted">
                        You have 12 new messages and 7 new notifications.
                      </small>
                    </div>
                  </div>
                  {/* .row end */}
                </div>
              </div>
              {/* start: page body */}
              <div className="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
                <div className="container-fluid">
                  <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3 mb-3 row-deck">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Current Stock
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">567</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Unit
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Stock Value
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">38,765</span>
                            <span
                              className="text-success ms-1 "
                              style={{ fontSize: "12px" }}
                            >
                              rs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Stock In
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">55</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Unit
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Stock Out
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">32</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Unit
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Product Sold
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">452</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              M
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            to be packed
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">22</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Qty
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            to be shipped
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">11</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Pkgs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            to be delivered
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">9</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Pkgs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            to be invoiced
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">5</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              Qty
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <div className="text-muted text-uppercase small">
                            Labour Cost
                          </div>
                          <div className="mt-1">
                            <span className="fw-bold h4 mb-0">3,908</span>
                            <span
                              className="text-success ms-1"
                              style={{ fontSize: "12px" }}
                            >
                              rs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .row end */}
                  <div className="row g-3 row-deck">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">Stock Quality</h6>
                        </div>
                        <div className="card-body">
                          <div
                            id="apex-StockQuality"
                            className="ac-line-transparent"
                          />
                        </div>
                      </div>
                      {/* .card end */}
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">Average Cost</h6>
                        </div>
                        <div className="card-body">
                          <div
                            id="apex-AverageCost"
                            className="ac-line-transparent"
                          />
                        </div>
                      </div>
                      {/* .card end */}
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">Quality Purchase</h6>
                        </div>
                        <div className="card-body">
                          <div
                            id="apex-QualityPurchase"
                            className="ac-line-transparent"
                          />
                        </div>
                      </div>
                      {/* .card end */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">
                            Top Selling Plans
                            <small className="d-block text-muted">
                              last update week ago
                            </small>
                          </h6>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div id="apex-TopSellingPlans" />
                        </div>
                      </div>
                      {/* .card end */}
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">Sales Statistics</h6>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <div className="card-body">
                                <div className="fw-bold h6 mb-0">11.54k</div>
                                <div className="text-muted small text-uppercase">
                                  Revenue
                                </div>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="card-body">
                                <div className="fw-bold h6 mb-0">5.87k</div>
                                <div className="text-muted small text-uppercase">
                                  Cost
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="apex-SalesStatistics"
                            className="ac-line-transparent"
                          />
                        </div>
                      </div>
                      {/* .card end */}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">New Agents</h6>
                        </div>
                        <div className="card-body">
                          <div className="d-flex align-items-center mb-3">
                            <img
                              className="avatar rounded-circle"
                              src="../assets/img/xs/avatar2.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3">
                              <div className="h6 mb-0">Pritam Behera</div>
                              <small>Exp. 5 Year</small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              className="avatar rounded-circle"
                              src="../assets/img/xs/avatar3.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3">
                              <div className="h6 mb-0">Maryam Sahu</div>
                              <small>Exp. 2.5 Year</small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              className="avatar rounded-circle"
                              src="../assets/img/xs/avatar4.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3">
                              <div className="h6 mb-0">Hrusikesh Jena</div>
                              <small>Exp. 8.2 Year</small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <img
                              className="avatar rounded-circle"
                              src="../assets/img/xs/avatar5.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3">
                              <div className="h6 mb-0">Subham Parida</div>
                              <small>Exp. 3 Year</small>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <img
                              className="avatar rounded-circle"
                              src="../assets/img/xs/avatar6.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-3">
                              <div className="h6 mb-0">Praveen Kumar</div>
                              <small>Exp. 7 Year</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h6 className="card-title m-0">Sales Order</h6>
                        </div>
                        <table
                          id="myDataTable_no_filter"
                          className="table myDataTable card-table mb-0"
                        >
                          <thead>
                            <tr>
                              <th>Channel</th>
                              <th>Draft</th>
                              <th>Confirmed</th>
                              <th>Packed</th>
                              <th>Shipped</th>
                              <th>Invoiced</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Other</td>
                              <td>0</td>
                              <td>22</td>
                              <td>3</td>
                              <td>18</td>
                              <td>56</td>
                            </tr>
                            <tr>
                              <td>Etary</td>
                              <td>0</td>
                              <td>3</td>
                              <td>3</td>
                              <td>6</td>
                              <td>33</td>
                            </tr>
                            <tr>
                              <td>Shopify</td>
                              <td>0</td>
                              <td>2</td>
                              <td>12</td>
                              <td>18</td>
                              <td>65</td>
                            </tr>
                            <tr>
                              <td>Magento</td>
                              <td>0</td>
                              <td>16</td>
                              <td>8</td>
                              <td>11</td>
                              <td>13</td>
                            </tr>
                            <tr>
                              <td>Wordpress</td>
                              <td>0</td>
                              <td>18</td>
                              <td>16</td>
                              <td>76</td>
                              <td>22</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* .card end */}
                    </div>
                  </div>
                  {/* .row end */}
                </div>
              </div>
              {/* start: page footer */}
              <footer className="page-footer px-xl-4 px-sm-2 px-0 py-3">
                <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
                  <p className="col-md-4 mb-0 text-muted">
                    © 2023
                    <a
                      href="https://www.orivesolutions.com/"
                      target="_blank"
                      title="Orive Solutions"
                    >
                      Orive Solutions
                    </a>
                    , All Rights Reserved.
                  </p>
                </div>
              </footer>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
