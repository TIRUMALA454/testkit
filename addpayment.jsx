import axios from "axios";
import React from 'react';
import Joi from 'joi-browser';
import AddCard from "./addcard";
class AddPayments extends React.Component {
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
    //DEFINE SCHEMA TO VALIDATE INPUT FIELD VALUES
    //schema={
        //type:joi.string().min(3).max(20).required(),

       
       

  //  }
     // Step 3: Validate user input with schema
 
    handleChange = (event) => {
        //logic to update state object
        // console.log(student);
        // console.log(event.target.name); // name of field - fullName
        // console.log(event.target.value); // value entered in the field -a
        // student[fullName] = a;
        // student.fullName = a;

        // copy state student object to local variable student
        const payments = { ...this.state.payments};

        // update local student object with values entered by user
        payments[event.target.name] = event.target.value;

        // update state object using setState method
        this.setState({payments:payments});
    };

    updateInput = (event) => {
        console.log(this.state.payments);
        const payments = { ...this.state.payments };
        payments[event.target.name] = event.target.value;
        this.setState({
          payments:payments
        });
        console.log(payments);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        // Send post request to rest api
        axios
            .post("http://localhost:8088/onlinesportshopee/payments/addPayment", this.state.payments)
            .then((res) => {
                console.log(res.data);
                alert(
                    "Added payments " + this.state.payments+ " successfully!"
                );
                this.props.history.push("/payments");
            })
            .catch((err) => console.log(err));
    };

    render() {
        // Object Destructuring
        const {type, status,bankName,cardName,cardNumber,expiryDate,} = this.state.payments;

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

                {/* <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                        id
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="id"
                        aria-describedby="emailHelp"
                        value={id}
                        name="id"
                        onChange={this.handleChange}
                    />
                </div> */}
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

export default AddPayments;