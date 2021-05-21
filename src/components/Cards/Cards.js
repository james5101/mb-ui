import React, { useState, useEffect } from "react";
import { Form, Col, Button, Card, Row, Container, CardDeck } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Cards = (props) => {
    const history = useHistory();
    const [data, setData] = useState({})

    async function fetchData() {
        const res = await fetch(`http://localhost:9000/services`)
        const data = await res.json()
        setData(data)
        console.log(data)
    }

    useEffect(() => { fetchData() }, [])

    const dataFilds = [
        {
            "id": 1,
            "title": "Security",
            "thumbnailUrl": "http://localhost:9000/adt.jpg",
            "rate": 50,
            "rating": 5,
            "zip": 32259,
            "specialist": {
                "id": 1,
                "fullName": "Mark brone"
            }
        },
        {
            "id": 2,
            "title": "Electricity",
            "thumbnailUrl": "http://localhost:9000/electric.jpg",
            "rate": 50,
            "rating": 5,
            "zip": 32259,
            "specialist": {
                "id": 1,
                "fullName": "Mark brone"
            }
        },
        {
            "id": 3,
            "title": "Solar",
            "thumbnailUrl": "http://localhost:9000/solar.jpg",
            "rate": 50,
            "rating": 5,
            "zip": 32259,
            "specialist":
            {
                "id": 1,
                "fullName": "Mark brone"
            }
        },
        {
            "id": 4,
            "title": "Phone",
            "thumbnailUrl": "http://localhost:9000/phone.jpg",
            "rate": 50,
            "rating": 5,
            "zip": 32259,
            "specialist": {
                "id": 1,
                "fullName": "Mark brone"
            }
        }
    ];

    return (
        <>
            <div className="data-container">
                {/* {reactElementsArray} */}
                <Container fluid className="App py-2 overflow-hidden">
                    <CardDeck>
                        <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
                            {dataFilds.map((d, key) => {

                                return (

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={d.thumbnailUrl} />
                                        <Card.Body>
                                            <Card.Title>{d.Title}</Card.Title>
                                            <Card.Text>
                                                Monthly rates starting at at {d.rate} per month
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => history.push('/cards')}>Add to cart</Button>
                                        </Card.Body>
                                    </Card>


                                );
                            })}
                        </Row>
                    </CardDeck>
                </Container>

            </div>
        </>
    );
};

export default Cards;