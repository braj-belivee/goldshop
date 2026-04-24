import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Profile from './Components/Home/Profile/Profile';
import AddGST from './Components/Home/AddGST/AddGST';
import Commission from './Components/Home/Commission/Commission';
import GoldRated from './Components/Home/GoldRated/GoldRated';
import Connections from './Components/Connections/Connections';
import AddConsumer from './Components/Connections/AddConsumer/AddConsumer';
import AddSupplier from './Components/Connections/AddSupplier/AddSupplier';
import Inventory from './Components/Inventory/Inventory';
import ViewProducts from './Components/Inventory/ViewProducts/ViewProducts';
import AddStocks from './Components/Inventory/AddStocks/AddStocks';
import SellStocks from './Components/Inventory/SellStocks/SellStocks';
import Accounts from './Components/Accounts/Accounts';
import CustomerList from './Components/Accounts/CustomerList/CustomerList';
import SupplierList from './Components/Accounts/SupplierList/SupplierList';
import Reports from './Components/Reports/Reports';
import Register from './Components/Register/Register';
import InvoicePage from "./Components/Reports/InvoicePage/InvoicePage";
import Login from './Components/Login/Login';
import DefaultContent from './Components/DefaultContent/DefaultContent';


const App = () => {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard and Modules with Layout */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<DefaultContent />} />

        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add-gst" element={<AddGST />} />
        <Route path="commission" element={<Commission />} />
        <Route path="gold-rated" element={<GoldRated />} />
        
        <Route path="connections" element={<Connections />} />
        <Route path="connections/add-consumer" element={<AddConsumer />} />
        <Route path="connections/add-supplier" element={<AddSupplier />} />

        <Route path="inventory" element={<Inventory />} />
        <Route path="inventory/view-products" element={<ViewProducts />} />
        <Route path="inventory/add-stocks" element={<AddStocks />} />
        <Route path="inventory/sell-stocks" element={<SellStocks />} />

        <Route path="accounts" element={<Accounts />} />
        <Route path="accounts/customer-list" element={<CustomerList />} />
        <Route path="accounts/supplier-list" element={<SupplierList />} />

        <Route path="reports" element={<Reports />} />
        <Route path="invoicePage/:id/:supplierName" element={<InvoicePage />} /> {/* Add this route */}
      </Route>
    </Routes>
  );
};

export default App;