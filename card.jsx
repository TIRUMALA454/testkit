import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

class Card extends React.Component {
    state = {
        cards: [],

    };
    componentDidMount() {
        axios
         .get("http://localhost:8088/cards")
         .then(res=>{console.log(res);
            this.setState({cards:res.data});
         })
         .catch((err)=>console.log(err));
       
    }
        handleDelete = (cardId) => {
        axios
            .delete(`http://localhost:8088/cards/${cardId}`)
            .then(res => {
                console.log(res);
                const cards = this.state.cards.filter((p) => p.id != cardId);
                this.setState({ cards: cards});
                alert(`${res.data.card} deleted successfully!`);
            })
            .catch((err) => console.log(err));
    }

    render() {
        console.log(this.state.cards);

        return (<div className="" style={{  
            backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div><h1>card Details</h1></div>
            <table className="table table-dark table-hover  ">
                <thead>
                    <tr>
                      
                    <td>bankName</td> 
                    <td>cardName</td>
                    <td>cardNumber</td>
                    <td>expiryDate</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    {this.state.cards.map((p) => (
                        <tr key ={p.id}>  
                            <td>{p.bankName}</td> 
                           <td>{p.cardName}</td>
                        <td>{p.cardNumber}</td>
                          <td>{p.expiryDate}</td> 
                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(p.id)}>Delete</button>
                              <Link to={`/updatecard/${p.id}`} className="btn btn-success">  Update</Link></td>
                        </tr>
                    ))
                       }
                </tbody>
            </table>

        </div>
        );
    }
}

export default Card;