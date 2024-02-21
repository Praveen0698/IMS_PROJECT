import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";

import NavBar from "../NavBar";
import SideBar from "../SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();

  const getItemData = async () => {
    await axios
      .get(`http://localhost:3700/inventory/items-list/${id}`)
      .then((result) => setItemData(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItemData();
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

            <div className="contain">
              <div className="row-div">
                <div className=" mt-4 card-items">
                  <div className="card-heading">
                    <h5>ITEM DETAILS</h5>
                  </div>
                  <div className="item-card-d">
                    <div className="item">
                      <span>Item Name</span>
                      <h4>Saucony Kinvara Men's Running Shoes</h4>
                    </div>
                    <div className="item">
                      <span>Item code</span>
                      <h4>E088</h4>
                    </div>
                  </div>

                  <div className="item-card-d">
                    <div className="item">
                      <span>Opening Stock</span>
                      <h4>209 PCS</h4>
                    </div>
                    <div className="item">
                      <span>Sizes</span>
                      <h4>UK4, UK5, UK6, UK7, UK8</h4>
                    </div>
                  </div>
                  <div className="item-card-d">
                    <div className="item">
                      <span>Item Description</span>
                      <h4>Blue Grey Minimialistic</h4>
                    </div>
                    <div className="item">
                      <span>Status</span>
                      <button className="button4">In Stock</button>
                    </div>
                  </div>
                </div>
                <div className=" mt-4 card-items">
                  <div className="card-heading">
                    <h5>INVENTORY STATUS</h5>
                  </div>
                  <div className="item-card-d">
                    <div className="item">
                      <span>Opening Stock</span>
                      <h4>1000 PCS</h4>
                    </div>
                    <div className="item">
                      <span>Opening Stock (Rate per Unit)</span>
                      <h4>₹ 100</h4>
                    </div>
                  </div>

                  <div className="item-card-d">
                    <div className="item">
                      <span>Available for Sale</span>
                      <h4>142</h4>
                    </div>
                    <div className="item">
                      <span>Stock on Hand</span>
                      <h4>174</h4>
                    </div>
                  </div>
                  <div className="item-card-d">
                    <div className="item">
                      <span>Committed Stock</span>
                      <h4>32</h4>
                    </div>
                    <div className="item">
                      <span>Reorder Point</span>
                      <h4>17</h4>
                    </div>
                  </div>
                </div>

                <div className=" mt-4 cards-items-2">
                  <div className="card-heading">
                    <h5>ITEM IMAGE</h5>
                  </div>
                  <div className="item-card-d">
                    <div className="item">{/* <img src={} /> */}</div>
                    <div className="item">{/* <img src={} /> */}</div>
                    <div className="item">{/* <img src={} /> */}</div>
                  </div>
                </div>
                <div className=" mt-4 cards-items-2">
                  <div className="card-heading">
                    <h5>PRICING DETAILS</h5>
                  </div>
                  <div className="item-card-d">
                    <div className="item">
                      <span>Sales Price</span>
                      <h4>₹ 700 </h4>
                    </div>
                    <div className="item">
                      <span>Purchase Price</span>
                      <h4>₹ 500</h4>
                    </div>
                  </div>

                  <div className="item-card-d">
                    <div className="item">
                      <span>HSN Code</span>
                      <h4>-</h4>
                    </div>
                    <div className="item">
                      <span>GST Tax Rate</span>
                      <h4>-</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsList;
