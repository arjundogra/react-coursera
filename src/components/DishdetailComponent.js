import React from 'react';
import {  Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';


function RenderDish({dish}) {
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

function RenderComments({comments}) {
    var commentList = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p className="list-inline-item">--{comment.author}</p>
                <p className="list-inline-item">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>
        );
    });
    return(
        <div className="col-md-5 col-12 m-1">
            <h4>Comments</h4>
            <ul className="">
                {commentList}
            </ul>
        </div>
    )
};


const  DishDetail = (props) => {
        console.log(props.dish);
        if (props.dish != null){    
            return(
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-12 m-1">
                                <RenderDish dish={props.dish} />
                            </div>
                                <RenderComments comments={props.dish.comments} />
                        </div>
                    </div>
                );
            }
        else{
            return(
                <div></div>
            )
        }            
}

export default DishDetail;