import React from 'react';
import classes from './Post.css';

const Post = (props) => {
    return(

        <div className="col-sm-3" onClick={props.clicked}>

            <div className ="jumbotron">

                <h4>{props.title}</h4>
                <p>{props.body}</p>
                <small className={classes.small}>{props.name}</small>

            </div>
        </div>
    )
}

export default Post;



// import React,{Component} from 'react';
//
// class Post extends Component{
//     render(){
//         return(
//            <div>
//
//            </div>
//         );
//     }
// }
// export default Post;