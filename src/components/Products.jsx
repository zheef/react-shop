import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import StoreContext from '../context/store';
import {Card, Col, Row} from "react-bootstrap";
import {toProductRoute} from "../routes";

function Products() {
    let {products} = useContext(StoreContext);
    let {list} = products;
    let productRows = list.map(product => (
        <Col md={4} key={product.id}>
            <Card>
                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price * product.count}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={toProductRoute(product.id)} className="btn btn-success">Посмотреть</Link>
                </Card.Footer>
            </Card>
        </Col>
    ));

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {productRows}
            </Row>
        </>
    );
}

export default observer(Products);