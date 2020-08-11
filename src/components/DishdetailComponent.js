import React, {Component} from 'react';
import {  Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
  
        this.state = {
        }
    }

    render(){
        const dish = (this.props.dishh);
        console.log(this.props.dishh);
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
}

export default DishDetail;