import React,{Component} from 'react';
import classes from './FullPost.css';
import axios from 'axios';
class FullPost extends Component{

    state={
        loadedPost:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
                axios.get('/posts/'+ this.props.id)
                .then(response => {
                    this.setState({loadedPost:response.data});
                });
            }
        }
    }

    deletePost = () => {
        // axios.delete('https://jsonplaceholder.typicode.com/posts/'+ this.props.id)  ----> baseURL
        axios.delete('/posts/'+ this.props.id)
            .then(response => {
                console.log(response);
            });
    }


    render(){

        let post=<div className={classes.div}>
                    <p style={{color:"green"}}>Please Select your post</p>
                </div>;

        if(this.props.id) {

            post=<div className={classes.div}>
                <p style={{color:"red"}}>Loading</p>
            </div>;
        }

        if(this.state.loadedPost){
            post=(

                <div className={classes.div}>
                    <h4>Id : {this.state.loadedPost.id}</h4>
                    <p style={{color:'blue'}}>{this.state.loadedPost.title}</p>
                    <p style={{color:'brown'}}>{this.state.loadedPost.body}</p>
                    <div>
                        <button onClick={this.deletePost} className="btn btn-danger">Delete</button>
                        <br/><br/>

                    </div>

                </div>

               /* <div className={classes.div}>

                    <h1>Title</h1>
                    <p>Content</p>
                    <div>
                        <button className="btn btn-danger">Delete</button>
                        <br/><br/>
                    </div>

                </div>*/
            );
        }



        return post;

    }
}
export default FullPost;