import axios from "axios";
import React from 'react';
class AddCard extends React.Component {
    state = {
        card: {
            bankName:"",
            cardName:"",
            cardNumber:"",
            expiryDate:"", 
        },
    errors:{},
    errMsg:"",
}; 
    handleChange = (event) => {
        //logic to update state object
        // console.log(student);
        // console.log(event.target.name); // name of field - fullName
        // console.log(event.target.value); // value entered in the field -a
        // student[fullName] = a;
        // student.fullName = a;

        // copy state student object to local variable student
        const card = { ...this.state.card };

        // update local student object with values entered by user
      card[event.target.name] = event.target.value;

        // update state object using setState method
      this.setState({  card:card });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        axios
            .post("http://localhost:8088/cards", this.state.card)
            .then((res) => {
                console.log(res.data);
                alert(
                    "Added card " + this.state.card + " successfully!"
                );
                this.props.history.push("/card");
            })
            .catch((err) => console.log(err));
    };

    render() {
        // Object Destructuring
        const {bankName,cardName,cardNumber,expiryDate } = this.state.card;
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

export default AddCard;