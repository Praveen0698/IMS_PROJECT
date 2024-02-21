import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "../authentication/Signin";
import PinLogin from "../authentication/PinLogin";
import Mpin from "../authentication/Mpin";
import Dashboard from "../dashboard/Dashboard";
import BuyersSuppliers from "../buyersSuppliers/BuyersSuppliers";
import ShoesItem from "../inventory/ShoesItem";
import ClothingItem from "../inventory/ClothingItem";
import AccessoriesItem from "../inventory/AccessoriesItem";
import Categories from "../inventory/Categories";
import ItemsList from "../inventory/ItemsList";

const MainRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/set-mpin" element={<Mpin />} />
      <Route path="/mpin" element={<PinLogin />} />
      <Route path="/buyers-suppliers" element={<BuyersSuppliers />} />
      <Route path="/inventory/categories" element={<Categories />} />
      <Route path="/inventory/items-list/:id" element={<ItemsList />} />
      <Route path="/inventory/shoes" element={<ShoesItem />} />
      <Route path="/inventory/clothing" element={<ClothingItem />} />
      <Route path="/inventory/accessories" element={<AccessoriesItem />} />
    </Routes>
  );
};

export default MainRouting;
