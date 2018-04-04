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

    img:{
        width:80,
        height:70
    },


};

function Service(props) {
    const { classes } = props;
        return (
            <div className="col-sm-3">
                <Card className={classes.card}>

                    {/*set the person details*/}

                    <CardContent>
                        <br/><br/>
                        <img className={classes.img} src={props.img}/>
                        <h5>{props.name}</h5>


                    </CardContent>

                </Card>
            </div>
        );
    }
Service.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Service);