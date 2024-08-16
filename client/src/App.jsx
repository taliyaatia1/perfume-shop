import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Checkout from "./pages/Checkout";

import { useSelector } from "react-redux";
import './index.css';
import PlaceOrder from "./pages/PlaceOrder";
import ThankYou from "./pages/ThankYou";



function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route
            exact
            path="/login"
            element={userInfo ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={userInfo ? <Navigate to="/" /> : <Register />}


            
          />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/placeorder" element={<PlaceOrder />} /> 
          <Route exact path="/thankyou" element={<ThankYou />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
