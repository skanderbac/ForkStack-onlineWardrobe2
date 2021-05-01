import React, { Suspense, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Router, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ReactNotification from 'react-notifications-component'
import ResetPassword from "./Components/ResetPassword";

import Home from "./Pages/Home";
import Header from './Components/Header';
import Wardrobe from './Pages/wadrobe';
import SingleCategories from './Components/SingleCategories';
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Informations from "./Pages/Informations";
import Register from "./Pages/Register";
import { fetchProducts } from "./Redux/slices/ProductSlice";
import { Preferences } from "./Pages/Preferences";
import MyWardrobe from "./Components/MyWardrobe";
import { UserContext } from "./contexts/UserContext";
import Shop from "./Pages/Shop";
import Choises from "./Pages/choices";
import Type from "./Components/Type";
import UserRecommandations from "./Pages/UserRecommandations";
import ShopSex from "./Components/ShopSex";
import ForgotPassword from "./Components/ForgotPassword";
import 'react-notifications-component/dist/theme.css';
import Style from "./Components/Style";

function App() {
    const dispatch = useDispatch();
    const [connectedUser, setConnectedUser] = useState("sousou");
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const user = sessionStorage.getItem('user');
    return (
        <>
            <ReactNotification />

            <UserContext.Provider value={[connectedUser, setConnectedUser]}>
                <Header></Header>
                <div>
                    <BrowserRouter>
                        <Suspense fallback={<p>...Loading page please wait</p>}>
                            {user ? (
                                <Switch>
                                    <Route
                                        path="/recommandations"
                                        render={(props) => <UserRecommandations {...props} />}></Route>
                                    <Route
                                        path="/shop"
                                        render={(props) => <Shop {...props} />}></Route>
                                    <Route
                                        path="/home"
                                        render={(props) => <Home {...props} />}></Route>
                                    <Route
                                        path="/type/:type"
                                        render={(props) => <Type {...props} />}></Route>
                                    <Route
                                        path="/sex/:sex"
                                        render={(props) => <ShopSex {...props} />}></Route>
                                    <Route
                                        path="/shop/:Categories"
                                        render={(props) => <SingleCategories {...props} />}
                                    ></Route>
                                    <Route
                                        path="/wardrobe"
                                        render={(props) => <Wardrobe {...props} />}></Route>
                                    <Route
                                        path="/informations"
                                        render={(props) => <Informations {...props} />}
                                    ></Route>
                                    <Route
                                        path="/preferences"
                                        render={(props) => <Preferences {...props} />}
                                    ></Route>
                                    <Route
                                        path="/mywardrobe"
                                        render={(props) => <MyWardrobe {...props} />}
                                    ></Route>
<Route
                                        path="/style/:style"
                                        render={(props) => <Style {...props} />}></Route>

                                </Switch>

                            ) : (


                                <Switch>


                                    {/*Before Login*/}

                                    <Route
                                        path="/home"
                                        render={(props) => <Home {...props} />}></Route>
                                    <Route
                                        path="/type/:type"
                                        render={(props) => <Type {...props} />}></Route>
<Route
                                        path="/style/:style"
                                        render={(props) => <Style {...props} />}></Route>
 <Route
                                        path="/sex/:sex"
                                        render={(props) => <ShopSex {...props} />}></Route>
                                    <Route
                                        path="/shop"
                                        render={(props) => <Shop {...props} />}></Route>
                                    <Route
                                        path="/login"
                                        render={(props) => <Login {...props} />}
                                    ></Route>
                                    <Route
                                        path="/choices"
                                        render={(props) => <Choises {...props} />}></Route>
                                    <Route
                                        path="/register"
                                        render={(props) => <Register {...props} />}></Route>
                                    <Route
                                        path="/forgotPassword"
                                        render={(props) => <ForgotPassword {...props} />}></Route>
                                    <Route
                                        path="/mywardrobe"
                                        render={(props) => <MyWardrobe {...props} />}
                                    ></Route>
                                    <Route path="/resetPassword/:id"
                                        render={(props) => <ResetPassword {...props} />}></Route>
                                    <Route
                                        exact
                                        render={() => <Home></Home>}
                                    ></Route>

                                </Switch>
                            )}                        </Suspense>
                    </BrowserRouter>
                </div>
                <Footer></Footer>
            </UserContext.Provider>


        </>

    );
}



export default App;
