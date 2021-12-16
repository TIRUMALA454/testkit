import React, { Component } from "react";
import axios from "axios";

class UpdateCard extends React.Component {
    state = {
        cards: {
            bankName: "",
            cardName: "",
            cardNumber: " ",
            expiryDate: " ",

        },
    };
    componentDidMount() {
        axios
            .get(
                `http://localhost:8088/cards/${this.props.match.params.cardId}`,
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ cards: res.data });
            })
            .catch((err) => console.log(err));
    }



    handleChange = (event) => {
       

        // copy state student object to local variable student
        const cards = { ...this.state.cards };

        // update local student object with values entered by user
        cards[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({ cards: cards });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        axios
            .put(
                `http://localhost:8088/cards/${this.props.match.params.cardId}`,
                this.state.cards
            )
            .then((res) => {
                console.log(res.data);
                alert(
                    "Updated cards " + this.state.cards.cardName + " successfully!"
                );
                this.props.history.push("/cards");
            })
            .catch((err) => console.log(err));


    };
render() {
    // Object Destructuring
    const {bankName,cardName,cardNumber,expiryDate } = this.state.cards;
    return (<div style={{
        backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>
        <form
            onSubmit={this.handleSubmit}
            className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >  
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

        }}

export default UpdateCard;