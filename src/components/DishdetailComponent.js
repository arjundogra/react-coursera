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
                <div className="col-md-5 col-12 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <p>{comments[0].comment}</p>
                        <p className="list-inline-item">--{comments[0].author}</p>
                        <p className="list-inline-item">{comments[0].date}</p>
                        <p>{comments[1].comment}</p>
                        <p className="list-inline-item">--{comments[1].author}</p>
                        <p className="list-inline-item">{comments[1].date}</p>
                        <p>{comments[2].comment}</p>
                        <p className="list-inline-item">--{comments[2].author}</p>
                        <p className="list-inline-item">{comments[2].date}</p>
                        <p>{comments[3].comment}</p>
                        <p className="list-inline-item">--{comments[3].author}</p>
                        <p className="list-inline-item">{comments[3].date}</p>
                        <p>{comments[4].comment}</p>
                        <p className="list-inline-item">--{comments[4].author}</p>
                        <p className="list-inline-item">{comments[4].date}</p>
                    </ul>
                </div>
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
                    {this.renderComments(this.props.dishh)}
                </div>
            );
    }
}

export default DishDetail;