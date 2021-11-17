import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import OurCars from "./Pages/OurCars/OurCars/OurCars";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Review from "./Pages/Dashboard/GeneralUser/Review";
import MyOrders from "./Pages/Dashboard/GeneralUser/MyOrders";
import PayMent from "./Pages/Dashboard/GeneralUser/PayMent";
import MakeAdmin from "./Pages/Dashboard/AdminUser/MakeAdmin";
import ManageOrders from "./Pages/Dashboard/AdminUser/ManageOrders";
import ManageProduct from "./Pages/Dashboard/AdminUser/ManageProduct";
import AddProduct from "./Pages/Dashboard/AdminUser/AddProduct";

function App() {
    return (
        <div className="App">
          <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/products">
                        <OurCars></OurCars>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path='/dashboardHome/payment'>
                        <PayMent/>
                    </Route>
                    <Route exact path='/dashboardHome/review'>
                        <Review/>
                    </Route>
                    <Route exact path='/dashboardHome/myOrder'>
                        <MyOrders/>
                    </Route>
                    <Route exact path='/dashboardHome/makeAdmin'>
                        <MakeAdmin/>
                    </Route>
                    <Route exact path='/dashboardHome/manageProduct'>
                        <ManageProduct/>
                    </Route>
                    <Route exact path='/dashboardHome/manageOrders'>
                        <ManageOrders/>
                    </Route>
                    <Route exact path='/dashboardHome/addProduct'>
                        <AddProduct/>
                    </Route>
                    <PrivateRoute exact path="/dashboardHome">
                        <DashboardHome/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/purchase/:id">
                        <Purchase></Purchase>
                    </PrivateRoute>
                </Switch>
            </Router>
          </AuthProvider>
        </div>
    );
}

export default App;
