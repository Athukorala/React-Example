import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};

function Person(props) {
    const { classes } = props;
    return (
        <div className="col-sm-3">
            <Card className={classes.card}>

                {/*set the person details*/}

                <CardContent>
                    <br/><br/>
                        <img src={props.img}/>
                        <h3>{props.name}</h3>
                        <h5>{props.address}</h5>
                    <br/><br/>
                </CardContent>
                <CardActions>
                    <button className="btn btn-outline-success" onClick={props.update}>
                        Edit
                    </button>
                    <button  className="btn btn-outline-danger" onClick={props.remove}>
                        Remove
                    </button>
                </CardActions>
            </Card>
        </div>
    );
}

Person.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(styles)(SimpleMediaCard);
export default withStyles(styles)(Person);