import { Suspense, useState, useEffect } from "react"; 
import { useTranslation } from 'react-i18next';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Axios from "axios";

const AboutUs = React.lazy(() => import("./pages/aboutUs.jsx"));
const Communities = React.lazy(() => import("./pages/communities.jsx"));
const FrontPage = React.lazy(() => import("./pages/frontPage.jsx"));
const LoginRegistration = React.lazy(() => import("./pages/loginRegistration.jsx"));
const Profile = React.lazy(() => import("./pages/profile.jsx"));
const Services = React.lazy(() => import("./pages/services.jsx"));
const Subscriptions = React.lazy(() => import("./pages/subscriptions.jsx"));
const Support = React.lazy(() => import("./pages/support.jsx"));
const ProductPage = React.lazy(() => import("./pages/productPage.jsx"));
const Favourites = React.lazy(() => import("./pages/favourites.jsx"));
const Cart = React.lazy(() => import("./pages/cart.jsx"));

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div style ={{padding:"20px"}}>{t("app.loading")}</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/" element={<FrontPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/support" element={<Support />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product-page/:promotionName" element={<ProductPage />}/>
            </Route>
            <Route path="/communities" element={<Communities />} />
            <Route path="/login" element={<LoginRegistration />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
