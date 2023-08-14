import React from "react";
import { Routes, Route } from "react-router-dom";
import {ProductDetailsPage} from "../pages/ProductDetailsPage";
import {ProductListContainer} from "./product/List/ProductListContainer/ProductListContainer";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/crud" element={<ProductListContainer/>} />
            <Route path="/product/:productId" element={<ProductDetailsPage/>} />
        </Routes>
    );
}

export default AppRoutes;
