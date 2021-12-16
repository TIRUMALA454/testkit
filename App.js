import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Login from "./components/login";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Product from "./components/product";
import AddProduct from "./components/addproduct";
import UpdateProduct from "./components/updateproduct";
import Payment from "./components/payment";
import AddPayment from "./components/addpayment";
import UpdatePayment from "./components/updateproduct";
import AddCard from "./components/addcard";
import Card from "./components/card";
import UpdateCard from "./components/updatecard";
import ViewProducts from "./components/viewproducts";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
     
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/product" component={Product} />
         <Route path="/updateproduct/:productId" component={UpdateProduct} />
         <Route path="/viewproducts" component={ViewProducts} />

        <Route path="/addpayment" component={AddPayment} />
        <Route path="/payment" component={Payment} />
       <Route path="/updatepayment/:paymentId" component={UpdatePayment} />
       

        <Route path="/addcard" component={AddCard} />
        <Route path="/card" component={Card} />
        <Route path="/updatecard/:cardId" component={UpdateCard} />
      
        <Redirect exact path="/" to="/home" />
      
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;