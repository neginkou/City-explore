import React, { useState } from 'react';
import { When } from 'react-if';
import Figure from 'react-bootstrap/Figure';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./Map.module.css";


function Map(props) {
    const VITE_API_KEY = import.meta.env.VITE_API_KEY;
    return (
        <When condition={props.latitude && props.longitude}>
            <Card className={styles.Card}style={{ width: "auto" }}></Card>
            <Figure className='map'>
                <Figure.Image
                    alt="location map"
                    src={`https://maps.locationiq.com/v3/staticmap?key=${VITE_API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`} width="500" />
            </Figure>
        </When>
    )
}

export default Map;