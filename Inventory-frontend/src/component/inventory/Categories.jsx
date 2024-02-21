import React, { useState, useEffect } from "react";
import shoes from "../../assets/shoes.png";
import clothes from "../../assets/clothes.png";
import jewellery from "../../assets/bag.png";
import { Bars } from "react-loader-spinner";
import SideBar from "../SideBar";
import NavBar from "../NavBar";
import Modal from "@mui/material/Modal";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { RxCrossCircled } from "react-icons/rx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const navigation = useNavigate();

  const handleOpen = () => setOpen(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    itemDescription: "",
    sizes: "",
    salesPrice: 0,
    purchasePrice: 0,
    measuringUnit: "US",
    openingStock: 0,
    openingStockRate: 0,
    gstTax: 0,
    reorderPoint: 0,
    category: "shoes",
  });

  const barcodeValue = Object.entries(formData)
    .map(([key, value]) => `${key}:${value}`)
    .join(",");
  const handleClose = () => {
    setFormData({
      itemName: "",
      itemCode: "",
      itemDescription: "",
      sizes: "",
      salesPrice: 0,
      purchasePrice: 0,
      measuringUnit: "US",
      openingStock: 0,
      openingStockRate: 0,
      gstTax: 0,
      reorderPoint: 0,
      category: "shoes",
    });
    setOpen(false);
  };

  const Type = [
    {
      value: "US",
      label: "US",
    },
    {
      value: "UK",
      label: "UK",
    },
  ];
  const categoryItem = [
    {
      value: "shoes",
      label: "Shoes",
    },
    {
      value: "accessories",
      label: "Accessories",
    },
    {
      value: "clothing",
      label: "Clothing",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileInputChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:3700/inventory",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);

  console.log(formData);
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
            <div className="main-div">
              <div className="item-list-div">
                <div className="card-heading-item">
                  <h5>ALL ITEMS</h5>
                  <div
                    className="btn-div"
                    style={{ marginTop: "-3.5rem", marginRight: "10px" }}
                  >
                    <button id="btn-item" onClick={handleOpen}>
                      {" "}
                      Add to List
                    </button>
                    {/* <div style={{ width: "200px", textAlign: "center" }}>
                      <QRCode value={barcodeValue} />
                    </div> */}
                  </div>
                </div>
                <div className="card-deck" style={{ gap: "30px" }}>
                  <div className="card" id="item">
                    <h5 id="item-h">SHOES</h5>

                    <div className="card-body">
                      <div className="img-div">
                        <img src={shoes} className="card-img" id="image" />
                      </div>
                    </div>
                    <div className="btn-div">
                      <button
                        id="btn-item"
                        onClick={() => navigation("/inventory/shoes")}
                      >
                        {" "}
                        Go To List
                      </button>
                    </div>
                  </div>
                  <div className="card" id="item">
                    <h5 id="item-h">SHIRTS</h5>

                    <div className="card-body">
                      <div className="img-div">
                        <img src={clothes} className="card-img" id="image" />
                      </div>
                    </div>
                    <div className="btn-div">
                      <button
                        id="btn-item"
                        onClick={() => navigation("/inventory/clothing")}
                      >
                        {" "}
                        Go To List
                      </button>
                    </div>
                  </div>
                  <div className="card" id="item">
                    <h5 id="item-h">ACCESSORIES</h5>

                    <div className="card-body">
                      <div className="img-div">
                        <img src={jewellery} className="card-img" id="image" />
                      </div>
                    </div>
                    <div className="btn-div">
                      <button
                        id="btn-item"
                        onClick={() => navigation("/inventory/accessories")}
                      >
                        {" "}
                        Go To List
                      </button>
                    </div>
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
              <div className="buyer-form-container">
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3>Add New Items</h3>
                    <TextField
                      style={{
                        marginRight: "50px",
                        width: "150px",
                      }}
                      id="measuringUnit"
                      margin="dense"
                      className="buyer-input"
                      label="Categories"
                      type="text"
                      select
                      halfWidth
                      defaultValue="Select Company Type"
                      value={formData.category}
                      onChange={(e) => handleInputChange(e)}
                      name="category"
                      SelectProps={{
                        native: true,
                      }}
                      InputLabelProps={{ shrink: true }}
                    >
                      {categoryItem.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <RxCrossCircled
                    className="buyer-form-cross"
                    onClick={handleClose}
                  />

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Item Name</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="itemName"
                        id="itemName"
                        value={formData.itemName}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Item Code</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="itemCode"
                        id="itemCode"
                        value={formData.itemCode}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Item Description</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="itemDescription"
                        id="itemDescription"
                        value={formData.itemDescription}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    {/*  */}

                    <div className="buyer-input-label">
                      <label>Sizes</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="sizes"
                        id="sizes"
                        value={formData.sizes}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Sales Price</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="salesPrice"
                        id="salesPrice"
                        value={formData.salesPrice}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Purchase Price</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="purchasePrice"
                        id="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Measuring Unit</label>
                      <TextField
                        id="measuringUnit"
                        margin="dense"
                        className="buyer-input"
                        type="text"
                        select
                        fullWidth
                        defaultValue="Select Company Type"
                        value={formData.measuringUnit}
                        onChange={(e) => handleInputChange(e)}
                        name="measuringUnit"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        {Type.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </div>
                    <div
                      className="buyer-input-label"
                      style={{ position: "relative" }}
                    >
                      <label>Opening Stock</label>

                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="openingStock"
                        id="openingStock"
                        value={formData.openingStock}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                      <button
                        style={{
                          position: "absolute",
                          right: "5px",
                          top: "45%",

                          background: "#00ac9a",
                          color: "white",
                          height: "25px",
                          width: "60px",
                          border: "none",
                          fontSize: "10px",
                          borderRadius: "5px",
                        }}
                        onClick={() => setModalOpen(true)}
                      >
                        BATCH
                      </button>
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Opening Stock( Rate Per Unit)</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="openingStockRate"
                        id="openingStockRate"
                        value={formData.openingStockRate}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>GST (optional)</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="gstTax"
                        id="gstTax"
                        value={formData.gstTax}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Reorder Point</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="reorderPoint"
                        id="reorderPoint"
                        value={formData.reorderPoint}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="image-input-fields">
                    <label>Upload Image</label>
                    <div className="drop-area">
                      <input
                        type="file"
                        // ref={fileInputRef}
                        // style={{ display: "none" }}
                        onChange={(e) => handleFileInputChange(e)}
                      />
                    </div>
                  </div>

                  <div className="data-input-fields"></div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-submit"
                      className="submit"
                      type="submit"
                      variant="outlined"
                      //  onClick={handleSave}
                      //   disabled={buttonCheck?false:true}
                    >
                      Submit
                    </Button>
                    <Button
                      id="input-btn-cancel"
                      className="cancel"
                      onClick={handleClose}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </Modal>
            {modalOpen ? (
              <div className="modal-ka-baap">
                <div className="add-item-modal-in" style={{ width: "45%" }}>
                  <div className="add-item-modal-top d-flex align-items-center justify-content-between">
                    <div className="fw-bold fs-5">ADD STOCK BATCHES</div>
                    <IoMdCloseCircleOutline
                      className="fs-5 close-modal-in"
                      style={{ cursor: "pointer" }}
                      onClick={() => setModalOpen(false)}
                    />
                  </div>
                  <hr />
                  <div className="add-item-modal-mid">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>BATCH NUMBER</th>
                          <th>SIZE</th>
                          <th>STOCK QTY</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {stockBatchItems.map((item) => (
                          <tr>
                            <td>{item.batchNumber}</td>
                            <td>{item.size}</td>
                            <td>{item.stockQty}</td>
                            <td className="text-center">
                              <AiOutlineDelete
                                className="fw-bold"
                                style={{ color: "red" }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button
                      className="d-flex align-items-center table-below-add-btn"
                      style={{ gap: "5px" }}
                    >
                      <IoAddCircleOutline />
                      <div>Add</div>
                    </button>
                  </div>
                  <div className="add-item-modal-bottom">
                    <div className="two-buttons-in">
                      <div className="mt-1" style={{ fontWeight: "700" }}>
                        TOTAL: 48768
                      </div>
                      <button className="next-button-in">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
