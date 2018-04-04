import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NativeSelect extends React.Component {


    render() {

        let category=this.props.category.map(( e )=>

            <option>
                {e.name}
            </option>
        )

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <select className="form-control" onChange={this.props.change} >



                        {category}
                    </select>
                </FormControl>
            </div>
        );
    }
}

NativeSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelect);