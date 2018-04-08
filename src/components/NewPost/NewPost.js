import React,{Component} from 'react';
import classes from './NewPost.css';
import axios from 'axios';

class NewPost extends Component{

    state={
        title:'',
        content:'',
        author:''
    };

    postDataHandler = () =>{

        const data={
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }



        // axios.post('https://jsonplaceholder.typicode.com/posts',data) -----> baseURL
        axios.post('/posts',data)
            .then(response =>{
                console.log(response);
            })
    }



    render(){
        return(
            <div className={classes.div}>
                <h4 style={{color:"brown",textAlign:"center"}}>Add a post</h4>
                Title : <input className="form-control"  placeholder="Enter post title" value={this.state.title} onChange={(event) => this.setState({title:event.target.value})}/>
                <br/><br/>
                Content : <input className="form-control" placeholder="Enter post content" value={this.state.content} onChange={(event) => this.setState({content:event.target.value})} />
                <br/><br/>
                Author : <input className="form-control" placeholder="Enter post author" value={this.state.author} onChange={(event) => this.setState({author:event.target.value})} />
                <br/><br/>
                    <button style={{textAlign:"center"}} onClick={this.postDataHandler} className="btn btn-success">Add Post</button>

            </div>
        )
    }
}
export default NewPost;