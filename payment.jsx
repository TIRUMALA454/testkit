import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Payment extends React.Component {
    state = {
        payments: [],

    };
    componentDidMount() {
        axios
         .get("http://localhost:8088/onlinesportshopee/payments/getallpayment")
         .then(res=>{console.log(res);
            this.setState({payments:res.data});
         })
         .catch((err)=>console.log(err));
       
    }
                   
    handleDelete = (paymentId) => {
        axios
            .delete(`http://localhost:8088/onlinesportshopee/payments/removePayment/payment/${paymentId}`)
            .then(res => {
                console.log(res);
                const payments = this.state.payments.filter((p) => p.id != paymentId);
                this.setState({ payments: payments});
                alert(`${res.data.payment}deleted successfully!`);
            })
            .catch((err) => console.log(err));
    }

    render() {
        console.log(this.state.payments);

        return (<div className="" style={{  
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div><h1>payment Details</h1></div>
            <table className="table table-dark table-hover  ">
                <thead>
                    <tr>
                        <td>type</td>
                        <td>status</td>
                       <td>bankName</td> 
                    <td>cardName</td>
                    <td> cardNumber</td>
                    <td>expirydate</td>
                        <td>Action</td>
                        

                    </tr>
                </thead>
                <tbody>

                    {this.state.payments.map((p) => (
                        <tr key ={p.id}>
                            <td>{p.id}</td>
                            <td>{p.type}</td>
                            <td>{p.status}</td>
                            <td>{p.bankName}</td> 
                         <td>{p.cardName}</td>
                        <td>  {p.cardNumber}</td>
                          <td>{p.expiryDate}</td> 
                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(p.id)}>Delete</button>
                              <Link to={`/updatepayment/${p.id}`} className="btn btn-success">  Update</Link></td>
                        </tr>
                    ))

                    }


                </tbody>
            </table>

        </div>
        );
    }
}

export default Payment;