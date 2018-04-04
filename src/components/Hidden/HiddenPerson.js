import React from 'react';
import classes from './HiddenPerson.css';

const HiddenPerson = (props ) => {
    return (
        <div className="container">
            <center>
            <div className={classes.div}>
                <br/>
                <h4 style={{color:'green'}}>- Edit Details -</h4>
                <br/>
                <img src={props.img}/>

                <h5> Name : {props.name}</h5>
                <h5> Address : {props.address}</h5>
                <br/>
            </div>
            </center>
        </div>
    )

}

export default HiddenPerson;