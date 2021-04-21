import React, {Suspense, useState} from "react";
import './App.css';
import {BrowserRouter, Switch, Route, Router, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Header from './Components/Header';
import Wardrobe from './Pages/wadrobe';
import SingleCategories from './Components/SingleCategories';
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Informations from "./Pages/Informations";
import Register from "./Pages/Register";
import {Preferences} from "./Pages/Preferences";
import {UserContext} from "./contexts/UserContext";
import AddToWardrobe from "./Pages/AddToWardrobe";
import Shop from "./Pages/Shop";
import Outfits from "./Pages/Outfits";
import All from "./Pages/all";
import Choises from "./Pages/choices";
import Categories from "./Components/Categories";
import MyWardrobe from "./Components/MyWardrobe";
import {ClothesUser} from "./Pages/ClothesUser";
function App() {
    const [connectedUser, setConnectedUser] = useState("sousou");
    const user=sessionStorage.getItem('user');
    return (
        <>
            <UserContext.Provider value={[connectedUser, setConnectedUser] }>
                <Header></Header>
                <div>
                    <BrowserRouter>
                        <Suspense fallback={<p>...Loading page please wait</p>}>
                            {user ? (
                                <Switch>
                                    <Route
                                        path="/shop"
                                        render={(props) => <Shop {...props} />}></Route>
                                    <Route
                                        path="/home"
                                        render={(props) => <Home {...props} />}></Route>

                                    <Route
                                        path="/addWardrobe"
                                        render={(props) => <AddToWardrobe {...props} />}></Route>

                                    <Route
                                        path="/product/:Categories"
                                        render={(props) => <SingleCategories {...props} />}
                                    ></Route>
                                    <Route
                                        path="/wardrobe"
                                        render={(props) => <Wardrobe {...props} />}></Route>
                                    <Route
                                        path="/outfits"
                                        render={(props) => <Outfits {...props} />}></Route>
                                    <Route
                                        path="/all"
                                        render={(props) => <All {...props} />}
                                    ></Route>
                                    <Route
                                        path="/categories"
                                        render={(props) => <Categories {...props} />}
                                    ></Route>
                                    <Route
                                        path="/ClothesUser"
                                        render={(props) => <ClothesUser {...props} />}
                                    ></Route>

                                    <Route
                                        path="/choices"
                                        render={(props) => <Choises {...props} />}></Route>

                                    <Route
                                        path="/informations"
                                        render={(props) => <Informations {...props} />}
                                    ></Route>
                                    <Route
                                        path="/preferences"
                                        render={(props) => <Preferences {...props} />}
                                    ></Route>
                                    
                                </Switch>

                            ) : (


                                <Switch>


                                    {/*Before Login*/}

                                    <Route
                                        path="/home"
                                        render={(props) => <Home {...props} />}></Route>

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
                                        path="/mywardrobe"
                                        render={(props) => <MyWardrobe {...props} />}
                                    ></Route>
                                        
                                    <Route
                                        path="/register"
                                        render={(props) => <Register {...props} />}></Route>

                                    <Route
                                        path="/informations"
                                        render={(props) => <Informations {...props} />}
                                    ></Route>
                                    <Route
                                        path="/preferences"
                                        render={(props) => <Preferences {...props} />}
                                    ></Route>



                                    <Route
                                        exact
                                        render={() => <Home></Home>}
                                    ></Route>

                                </Switch>
                                )}
                                </Suspense>
                                </BrowserRouter>
                                </div>
                                <Footer></Footer>
                                </UserContext.Provider>


                                </>

                                );
                                }



                                export default App;
