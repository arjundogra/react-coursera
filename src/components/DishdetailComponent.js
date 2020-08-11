import React, {Component} from 'react';
import {  Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
  
        this.state = {
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dish){
        if(dish != null){
            let comments = dish.comments;
            console.log(comments[0].comment)
            return(
                <ul className="list-unstyled">
                <li>{comments[0].comment}</li>
                <li className="list-inline-item">--{comments[0].author}</li>
                <li className="list-inline-item">{comments[0].date}</li>
                <li>{comments[1].comment}</li>
                <li className="list-inline-item">--{comments[1].author}</li>
                <li className="list-inline-item">{comments[1].date}</li>
                <li>{comments[2].comment}</li>
                <li className="list-inline-item">--{comments[2].author}</li>
                <li className="list-inline-item">{comments[2].date}</li>
                <li>{comments[3].comment}</li>
                <li className="list-inline-item">--{comments[3].author}</li>
                <li className="list-inline-item">{comments[3].date}</li>
                <li>{comments[4].comment}</li>
                <li className="list-inline-item">--{comments[4].author}</li>
                <li className="list-inline-item">{comments[4].date}</li>
                </ul>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        console.log(this.props.dishh);
            return(
                <div className="row">
                    <div className="col-md-5 col-12 m-1">
                        {this.renderDish(this.props.dishh)}
                    </div>
                    <div className="col-md-5 col-12 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dishh)}
                    </div>
                </div>
            );
    }
}

export default DishDetail;