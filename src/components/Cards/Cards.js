import React, { useState, useEffect } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";
import {useHistory} from "react-router-dom";

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

    return (
        <>
            <div className="data-container">
                {[data].map((d, key) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={d.thumbnailUrl}/>
                            <Card.Body>
                                <Card.Title>{d.Title}</Card.Title>
                                <Card.Text>
                                    {d.zip}
                                </Card.Text>
                                <Button variant="primary" onClick={() => history.push('/cards')}>Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    );
                })}
            </div>
        </>
    );
};

export default Cards;