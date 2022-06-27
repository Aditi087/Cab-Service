import logo from "./logo.svg";
import "./App.css";
import Login from "./form/Login";
import Signup from "./form/Registration";
import { Home } from "./home/Home";
import { Profile } from "./account/Profile";
import { Booking } from "./booking/Booking";
import { Route, Routes } from "react-router-dom";
import { Info } from "./form/Info";
import Protect from "./protect";
import { Ride1 } from "./ride/Ride1";
import { Otp } from "./form/Otp";
import { Ride2 } from "./ride/Ride2";


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Protect>
              <Home />
            </Protect>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <Protect>
            <Profile />
            </Protect>
          }
        />
        <Route
          path="/bookings"
          element={
            <Protect>
            <Booking />
             </Protect>
          }
        />
        <Route path="/info" element={<Info />} />
        <Route path="/verification" element={<Otp />} />
        <Route path="/ridenow" element={<Ride1 />} />
        <Route path="/location" element={<Ride2/>} />
      </Routes>

      
    </div>
  );
}

export default App;
