import React from "react";
import dashboard from "../../src/assets/icon/dashboard 1.png";
import inventory from "../assets/icon/inventory (2) 1.png";
import cart from "../assets/icon/cart.png";
import discount from "../assets/icon/discount (1).png";
import parcel from "../assets/icon/parcel.png";
import credit from "../assets/icon/credit-card.png";
import report from "../assets/icon/report (3) 1.png";
import setting from "../assets/icon/setting (1).png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const SideBar = () => {
  const navigation = useNavigate();
  return (
    <div>
      <div className="sidebar p-2 py-md-3 @@cardClass">
        <div className="container-fluid">
          {/* sidebar: title*/}
          <div className="title-text d-flex align-items-center mb-4 mt-1">
            <h4 className="sidebar-title mb-0 flex-grow-1">
              <span className="sm-txt">O</span>
              <span>RIVE Admin</span>
            </h4>
            <div className="dropdown morphing scale-left">
              <a
                className="dropdown-toggle more-icon"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-ellipsis-h" />
              </a>
              <ul
                className="dropdown-menu shadow border-0 p-2 mt-2"
                data-bs-popper="none"
              >
                <li className="fw-bold px-2">Quick Actions</li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="landing/index.html"
                    aria-current="page"
                  >
                    Landing page
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="inventory/index.html">
                    Inventory
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ecommerce/index.html">
                    eCommerce
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="hrms/index.html">
                    HRMS
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="account-invoices.html">
                    Invoices List
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="account-create-invoices.html"
                  >
                    Create Invoices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* sidebar: menu list */}
          <div className="main-menu flex-grow-1">
            <ul className="menu-list">
              <li className="collapsed" style={{ cursor: "pointer" }}>
                <a
                  className="m-link active"
                  data-bs-toggle="collapse"
                  data-bs-target="#my_dashboard"
                  onClick={() => navigation("/dashboard")}
                >
                  <img src={dashboard} />
                  <span className="ms-2">My Dashboard</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed" style={{ cursor: "pointer" }}>
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_dashboard"
                >
                  <img src={inventory} />
                  <span className="ms-2">Inventory</span>
                  <span className="ms-auto text-end">
                    <IoIosArrowDown />
                  </span>
                </a>
                {/* Menu: Sub menu ul */}
                <ul className="sub-menu collapse show" id="my_dashboard">
                  <li>
                    <a
                      className="ms-link"
                      onClick={() => navigation("/inventory/categories")}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a className="ms-link">Warehouse</a>
                  </li>
                </ul>
              </li>

              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Applications"
                  href="#"
                >
                  <img src={cart} />
                  <span className="ms-2">Purchase</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu_pages"
                  href="#"
                >
                  <img src={discount} />
                  <span className="ms-2">Sales</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed" style={{ cursor: "pointer" }}>
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Account"
                  onClick={() => navigation("/buyers-suppliers")}
                >
                  <img src={parcel} />
                  <span className="ms-2">Buyers & Suppliers</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-Authentication"
                  href="#"
                >
                  <img src={credit} />
                  <span className="ms-2">Payments</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-level0"
                  href="#"
                >
                  <img src={report} />
                  <span className="ms-2">Reports</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>

              <li className="collapsed">
                <a
                  className="m-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#menu-level0"
                  href="#"
                >
                  <img src={setting} />
                  <span className="ms-2">Account Solutions</span>
                </a>
                {/* Menu: Sub menu ul */}
              </li>
            </ul>
          </div>
          {/* sidebar: footer link */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
