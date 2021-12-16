import React, { Component } from "react";
import axios from "axios";
import AddCard from "./addcard";
import UpdateCard from "./updatecard";
import card from "./card";

class UpdatePayment extends React.Component {
    state = {
        payments: {
            type: "",
            status: "",
            bankName: "",
            cardName: "",
            cardNumber: " ",
            expiryDate: " ",
            
        },
    };
    componentDidMount() {
        axios
            .get(
                `http://localhost:8088/onlinesportshopee/payments/getallpayment/`,
            )
            .then((res) => {
                console.log(res.data);
                this.setState({payments: res.data });
            })
            .catch((err) => console.log(err));
    }
    handleChange = (event) => {
        // copy state student object to local variable student
        const  payments= { ...this.state.payments };

        // update local student object with values entered by user
        payments[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({payments:payments });
    };
    handleSubmit=(event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        axios
            .put(
                `http://localhost:8088/onlinesportshopee/payments/updatePayment/{paymentId}${this.props.match.params.paymentId}`,
                this.state. payments
            )
            .then((res) => {
                console.log(res.data);
                alert(
                    "Updated payments " + this.state.payments.paymentType + " successfully!"
                );
                this.props.history.push("/payments");
            })
            .catch((err) => console.log(err));


    };
    render() {
        // Object Destructuring
        const {type,status,bankName,cardName,cardNumber,expiryDate,} = this.state. payments;

        return (<div>
            <form
                onSubmit={this.handleSubmit}
                className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
            >
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                        type
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="type"
                        aria-describedby="emailHelp"
                        value={type}
                        name="type"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                    status
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="status"
                        aria-describedby="emailHelp"
                        value={status}
                        name="status"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="bankName" className="form-label">
                    bankName
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="bankName"
                    aria-describedby="emailHelp"
                    value={bankName}
                    name="bankName"
                    onChange={this.handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cardName" className="form-label">
                   cardName
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="cardName"
                    aria-describedby="emailHelp"
                    value={cardName}
                    name="cardName"
                    onChange={this.handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                      cardNumber
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    name="cardNumber"
                    onChange={this.handleChange}
                />
            </div>
           
            <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label" >
                    expiryDate
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="expiryDate"
                    aria-describedby="emailHelp"
                    value={expiryDate}
                    name="expiryDate"
                    onChange={this.handleChange}
                />
            </div>

            
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        );
    }

}


export default UpdatePayment;