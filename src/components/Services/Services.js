import React from "react";
import { FaBolt } from "react-icons/fa";
import { Form, Col, Button, Card, Row, Container, CardDeck } from "react-bootstrap";



const Services = () => {
    return (
        <div>
           <div className="data-container">
                {/* {reactElementsArray} */}
                <Container fluid className="App py-2 overflow-hidden">
                    <CardDeck>
                        <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
                            

        
                                    <Card >
                                        <FaBolt style={{position:'absolute'}}/>
                                        <Card.Body>
                                            <Card.Title>Find Services</Card.Title>
                                            <Card.Text>
                                                First, Enter your address to find deals on local service compaines in your area. 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card >
                                        <FaBolt />
                                        <Card.Body>
                                            <Card.Title>Select Pacakges</Card.Title>
                                            <Card.Text>
                                                Next, Add the services you would like to your cart and checkout. 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card >
                                        <FaBolt />
                                        <Card.Body>
                                            <Card.Title>Sit back and relax</Card.Title>
                                            <Card.Text>
                                               Within a few minutes, one of our experienced reps will give you a call to complete your order.  
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            
                        </Row>
                    </CardDeck>
                </Container>

            </div>
        </div>
        
    )
}

export default Services;