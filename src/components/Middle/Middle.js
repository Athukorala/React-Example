import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import classes from './Middle.css';
import  NativeSelect from './Selecter';
import Person from "../Persons/Person/Person";
import Persons from "../Persons/Persons";

function Middle(props) {

    return (
        <div>

            <br/><br/>
            <div id="cardLayout" className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-20 col-form-label">  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select category</label>
                <div className="col-sm-10">

                    <NativeSelect
                        category={props.category}
                        clicked={props.clicked}
                        change={props.change}
                    />

                </div>
            </div>

            <center>

            </center>

        </div>
    );
}


export default Middle;