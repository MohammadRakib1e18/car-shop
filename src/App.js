import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import OurCars from "./Pages/OurCars/OurCars/OurCars";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";

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
                    <PrivateRoute exact path="/dashboard">
                        <Dashboard />
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
