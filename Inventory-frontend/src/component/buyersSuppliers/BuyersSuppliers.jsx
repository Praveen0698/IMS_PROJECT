import React, { useEffect, useState } from "react";
// import "../../components/Style.css";
import customer from "../../assets/customer.png";
import courier from "../../assets/courier.png";
import expense from "../../assets/expense.png";
import revenue from "../../assets/revenue.png";
import { HiOutlineFilter } from "react-icons/hi";
import { Bars } from "react-loader-spinner";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import noDataImg from "../../assets/nodata.png";

const BuyersSuppliers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [card, setCard] = useState(0);
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("none");
  const [display3, setDisplay3] = useState("none");
  const [display4, setDisplay4] = useState("none");

  useEffect(() => {
    if (card === 4) {
      setDisplay4("block");
      setDisplay3("none");
      setDisplay2("none");
      setDisplay1("none");
    } else if (card === 3) {
      setDisplay4("none");
      setDisplay3("block");
      setDisplay2("none");
      setDisplay1("none");
    } else if (card === 2) {
      setDisplay4("none");
      setDisplay3("none");
      setDisplay2("block");
      setDisplay1("none");
    } else {
      setDisplay4("none");
      setDisplay3("none");
      setDisplay2("none");
      setDisplay1("block");
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    category: "",
    payAmount: 0,
    gstin: " ",
    panNumber: "",
    billingAddress: "",
    shippingAddress: "",
    creditPeriod: 0,
    collectAmount: 0,
  });

  const Type = [
    {
      value: "Choose",
      label: "Select Category Type",
    },
    {
      value: "Buyers",
      label: "Buyers",
    },
    {
      value: "Suppliers",
      label: "Suppliers",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await axios
      .post("http://localhost:3600/buyers-suppliers", formData)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  const [getBuyerData, setGetBuyerData] = useState([]);
  const [getSupplierData, setGetSupplierData] = useState([]);
  const [getPayAmt, setGetPayAmt] = useState([]);
  const [getCollectAmt, setGetCollectAmt] = useState([]);
  const getBuyersSuppliers = async () => {
    const result = await axios.get("http://localhost:3600/buyers-suppliers");
    const buyerData = result.data.filter((item) => item.category === "Buyers");
    setGetBuyerData(buyerData);
    const supplierData = result.data.filter(
      (item) => item.category === "Suppliers"
    );
    setGetSupplierData(supplierData);
    const payData = result.data.filter((item) => item.payAmount > 0);
    setGetPayAmt(payData);
    const collectData = result.data.filter((item) => item.collectAmount > 0);
    setGetCollectAmt(collectData);
  };

  useEffect(() => {
    getBuyersSuppliers();
  }, []);

  const payValues = getPayAmt.map((obj) => obj.payAmount);
  const collectValues = getCollectAmt.map((obj) => obj.collectAmount);

  const sumOfPay = payValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumOfCollect = collectValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const cancelButton = () => {
    handleClose();
    setFormData({
      name: "",
      mobileNumber: "",
      email: "",
      category: "",
      payAmount: 0,
      gstin: " ",
      panNumber: "",
      billingAddress: "",
      shippingAddress: "",
      creditPeriod: 0,
      collectAmount: 0,
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  //to collect page pagination

  const [currentCollectPage, setCurrentCollectPage] = useState(1);
  const itemsPerCollectPage = 5;

  const indexOfLastCollectItem = currentCollectPage * itemsPerCollectPage;
  const indexOfFirstCollectItem = indexOfLastCollectItem - itemsPerCollectPage;
  const currentCollectItems = getCollectAmt.slice(
    indexOfFirstCollectItem,
    indexOfLastCollectItem
  );

  const totalCollectPages = Math.ceil(
    getCollectAmt.length / itemsPerCollectPage
  );

  const nextCollectPage = () => {
    setCurrentCollectPage(currentCollectPage + 1);
  };

  const prevCollectPage = () => {
    setCurrentCollectPage(currentCollectPage - 1);
  };

  //to pay page pagination

  const [currentPayPage, setcurrentPayPage] = useState(1);
  const itemsPerPayPage = 5;

  const indexOfLastPayItem = currentPayPage * itemsPerPayPage;
  const indexOfFirstPayItem = indexOfLastPayItem - itemsPerPayPage;
  const currentItems = getPayAmt.slice(indexOfFirstPayItem, indexOfLastPayItem);

  const totalPayPages = Math.ceil(getPayAmt.length / itemsPerPayPage);

  const nextPayPage = () => {
    setcurrentPayPage(currentPayPage + 1);
  };

  const prevPayPage = () => {
    setcurrentPayPage(currentPayPage - 1);
  };

  //supply list pagination

  const [currentSupplyPage, setcurrentSupplyPage] = useState(1);
  const itemsPerSupplyPage = 5;

  const indexOfLastSupplyItem = currentSupplyPage * itemsPerSupplyPage;
  const indexOfFirstSupplyItem = indexOfLastSupplyItem - itemsPerSupplyPage;
  const currentSupplyItems = getSupplierData.slice(
    indexOfFirstSupplyItem,
    indexOfLastSupplyItem
  );

  const totalSupplyPages = Math.ceil(
    getSupplierData.length / itemsPerSupplyPage
  );

  const nextSupplyPage = () => {
    setcurrentSupplyPage(currentSupplyPage + 1);
  };

  const prevSupplyPage = () => {
    setcurrentSupplyPage(currentSupplyPage - 1);
  };

  // buyer list pagination

  const [currentBuyerPage, setcurrentBuyerPage] = useState(1);
  const itemsPerBuyerPage = 5;

  const indexOfLastBuyerItem = currentBuyerPage * itemsPerBuyerPage;
  const indexOfFirstBuyerItem = indexOfLastBuyerItem - itemsPerBuyerPage;
  const currentBuyerItems = getBuyerData.slice(
    indexOfFirstBuyerItem,
    indexOfLastBuyerItem
  );

  const totalBuyerPages = Math.ceil(getBuyerData.length / itemsPerBuyerPage);

  const nextBuyerPage = () => {
    setcurrentBuyerPage(currentBuyerPage + 1);
  };

  const prevBuyerPage = () => {
    setcurrentBuyerPage(currentBuyerPage - 1);
  };

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

            <div className="wrapper buyer-wrapper">
              <div className="container">
                <div style={{ width: "100%" }}>
                  <div className="main-div ">
                    <div className="cards-div">
                      <div className="col-sm-3" onClick={() => setCard(1)}>
                        <div className="cards">
                          <div className="card-body">
                            <div className="cards-b">
                              <h5 className="cards-title">BUYERS</h5>
                              <div className="image">
                                <img src={customer} />
                              </div>
                            </div>
                            <div className="cards-c">
                              <h4>{getBuyerData ? getBuyerData.length : 0}</h4>
                            </div>
                            <span className="text">Analytics of the week</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3 box " onClick={() => setCard(2)}>
                        <div className="cards" id="yellow">
                          <div className="card-body">
                            <div className="cards-b">
                              <h5 className="cards-title">SUPPLIERS</h5>
                              <div className="image">
                                <img src={courier} />
                              </div>
                            </div>
                            <div className="cards-c">
                              <h4>
                                {getSupplierData ? getSupplierData.length : 0}
                              </h4>
                            </div>
                            <span className="text">Analytics of the week</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3" onClick={() => setCard(3)}>
                        <div className="cards" id="red">
                          <div className="card-body">
                            <div className="cards-b">
                              <h5 className="cards-title">TO PAY</h5>
                              <div className="image">
                                <img src={expense} />
                              </div>
                            </div>
                            <div className="cards-c">
                              <h4>₹{sumOfPay}</h4>
                            </div>
                            <span className="text">Analytics of the week</span>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-3" onClick={() => setCard(4)}>
                        <div className="cards">
                          <div className="card-body">
                            <div className="cards-b">
                              <h5 className="cards-title">TO COLLECT</h5>
                              <div className="image ">
                                <img src={revenue} />
                              </div>
                            </div>
                            <div className="cards-c">
                              <h4>₹{sumOfCollect}</h4>
                            </div>
                            <span className="text">Analytics of the week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="main-div-2 card-1"
                    style={{ display: `${display1}` }}
                  >
                    <div className="table" id="main-table">
                      <div className="input-group-1">
                        <p>Buyer List</p>
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
                            <HiOutlineFilter
                              size={30}
                              color="rgba(0, 172, 154, 1)"
                            />
                          </div>
                          <button
                            onClick={handleOpen}
                            type="button"
                            className="btn search-btn"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                      {getBuyerData.length > 0 ? (
                        <table
                          className="table table-bordered"
                          style={{ height: "40vh" }}
                        >
                          <div
                            id="table-responsive"
                            className="table-responsive"
                          >
                            <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                              <thead>
                                <tr>
                                  <th>SL No</th>
                                  <th>Vendor Name</th>
                                  <th>Mobile Number</th>
                                  <th>Gstin</th>
                                  <th>Amount to Pay</th>
                                  <th>Amount to Collect</th>
                                </tr>
                              </thead>
                              <tbody>
                                {currentBuyerItems.map((item, index) => (
                                  <tr key={index}>
                                    <td>{index + indexOfFirstBuyerItem + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobileNumber}</td>
                                    <td>{item.gstin}</td>
                                    <td>{item.payAmount}</td>
                                    <td>{item.collectAmount}</td>
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
                        disabled={currentBuyerPage === totalBuyerPages}
                      >
                        Next
                      </button>
                    </div>
                    <div>
                      Page {currentBuyerPage} of {totalBuyerPages}
                    </div>
                  </div>
                </div>

                <div
                  className="main-div-2 card-2"
                  style={{ display: `${display2}` }}
                >
                  <div className="table" id="main-table">
                    <div className="input-group-1">
                      <p>Supplier List</p>
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
                          <HiOutlineFilter
                            size={30}
                            color="rgba(0, 172, 154, 1)"
                          />
                        </div>
                        <button
                          onClick={handleOpen}
                          type="button"
                          className="btn search-btn"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    {getSupplierData.length > 0 ? (
                      <table
                        className="table table-bordered"
                        style={{ height: "40vh" }}
                      >
                        <div id="table-responsive" className="table-responsive">
                          <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                            <thead>
                              <tr>
                                <th>Sl No</th>
                                <th>Vendor Name</th>
                                <th>Mobile Number</th>
                                <th>Gstin</th>
                                <th>Amount to Pay</th>
                                <th>Amount to Collect</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentSupplyItems.map((item, index) => (
                                <tr key={index}>
                                  <td>{index + indexOfFirstSupplyItem + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.mobileNumber}</td>
                                  <td>{item.gstin}</td>
                                  <td>{item.payAmount}</td>
                                  <td>{item.collectAmount}</td>
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
                      onClick={prevSupplyPage}
                      disabled={currentSupplyPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      className="buyer-page-btn"
                      onClick={nextSupplyPage}
                      disabled={currentSupplyPage === totalSupplyPages}
                    >
                      Next
                    </button>
                  </div>
                  <div>
                    Page {currentSupplyPage} of {totalSupplyPages}
                  </div>
                </div>

                <div
                  className="main-div-2 card-3"
                  style={{ display: `${display3}` }}
                >
                  <div className="table" id="main-table">
                    <div className="input-group-1">
                      <p>To Pay</p>
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
                          <HiOutlineFilter
                            size={30}
                            color="rgba(0, 172, 154, 1)"
                          />
                        </div>
                        <button
                          onClick={handleOpen}
                          type="button"
                          className="btn search-btn"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    {getPayAmt.length > 0 ? (
                      <table
                        className="table table-bordered"
                        style={{ height: "40vh" }}
                      >
                        <div id="table-responsive" className="table-responsive">
                          <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                            <thead>
                              <tr>
                                <th>Sl No</th>
                                <th>Vendor Name</th>
                                <th>Mobile Number</th>
                                <th>Gstin</th>
                                <th>Amount to Pay</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentItems.map((item, index) => (
                                <tr key={index}>
                                  <td>{index + indexOfFirstPayItem + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.mobileNumber}</td>
                                  <td>{item.gstin}</td>
                                  <td>{item.payAmount}</td>
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
                      onClick={prevPayPage}
                      disabled={currentPayPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      className="buyer-page-btn"
                      onClick={nextPayPage}
                      disabled={currentPayPage === totalPayPages}
                    >
                      Next
                    </button>
                  </div>
                  <div>
                    Page {currentPayPage} of {totalPayPages}
                  </div>
                </div>

                <div
                  className="main-div-2 card-4"
                  style={{ display: `${display4}` }}
                >
                  <div className="table" id="main-table">
                    <div className="input-group-1">
                      <p>To Collect</p>
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
                          <HiOutlineFilter
                            size={30}
                            color="rgba(0, 172, 154, 1)"
                          />
                        </div>
                        <button
                          onClick={handleOpen}
                          type="button"
                          className="btn search-btn"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    {getCollectAmt.length > 0 ? (
                      <table
                        className="table table-bordered"
                        style={{ height: "40vh" }}
                      >
                        <div id="table-responsive" className="table-responsive">
                          <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                            <thead>
                              <tr>
                                <th>Sl No</th>
                                <th>Vendor Name</th>
                                <th>Mobile Number</th>
                                <th>Gstin</th>
                                <th>Amount to Collect</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentCollectItems.map((item, index) => (
                                <tr key={index}>
                                  <td>{index + indexOfFirstCollectItem + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.mobileNumber}</td>
                                  <td>{item.gstin}</td>
                                  <td>{item.collectAmount}</td>
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
                      onClick={prevCollectPage}
                      disabled={currentCollectPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      className="buyer-page-btn"
                      onClick={nextCollectPage}
                      disabled={currentCollectPage === totalCollectPages}
                    >
                      Next
                    </button>
                  </div>
                  <div>
                    Page {currentCollectPage} of {totalCollectPages}
                  </div>
                </div>
              </div>
            </div>
            <Modal
              className="buyer-form-modal"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div
                className="buyer-form-container"
                style={{ position: "relative" }}
              >
                <h3>Add Buyers/Suppliers</h3>
                <RxCrossCircled
                  className="buyer-form-cross"
                  onClick={handleClose}
                />
                <form onSubmit={handleSubmit}>
                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Name</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Mobile Number</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="mobileNumber"
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                    <div className="buyer-input-label">
                      <label>Email</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Category</label>
                      <TextField
                        id="category"
                        margin="dense"
                        className="buyer-input"
                        select
                        fullWidth
                        defaultValue="Select Company Type"
                        value={formData.category}
                        onChange={(e) => handleInputChange(e)}
                        name="category"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {Type.map((option) => (
                          <option
                            key={option.value}
                            disabled={
                              option.label === "Select Company Type"
                                ? true
                                : false
                            }
                            value={option.label}
                          >
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </div>

                    <div className="buyer-input-label">
                      <label>Amount to Pay</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="payAmount"
                        id="payAmount"
                        value={formData.payAmount}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>GSTIN</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="gstin"
                        id="gstin"
                        value={formData.gstin}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Pan Number</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="panNumber"
                        id="panNumber"
                        value={formData.panNumber}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Billing Address</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="billingAddress"
                        id="billingAddress"
                        value={formData.billingAddress}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                    <div className="buyer-input-label">
                      <label>Shipping Address</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="shippingAddress"
                        id="shippingAddress"
                        value={formData.shippingAddress}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Credit Period (in Months)</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="creditPeriod"
                        id="creditPeriod"
                        value={formData.creditPeriod}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Amount to Collect</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="collectAmount"
                        id="collectAmount"
                        value={formData.collectAmount}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-submit"
                      className="submit"
                      type="submit"
                      variant="outlined"
                      onClick={handleSave}
                      //   disabled={buttonCheck?false:true}
                    >
                      Submit
                    </Button>
                    <Button
                      id="input-btn-cancel"
                      className="cancel"
                      onClick={cancelButton}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyersSuppliers;
