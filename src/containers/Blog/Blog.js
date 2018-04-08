import React, { Component } from 'react';
import axios from 'axios';
import Post from "../../components/Post/Post";
import NavBar from "../../components/Header/NavBar";
import FooterPage from "../../components/Footer/Footer";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {

    state = {
        posts : [],
        selectedId:'',
        error:false

    }

    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts')  ----> baseURL
        axios.get('/posts')
            .then(response => {

                const fourData=response.data.slice(0,4);
                const update=fourData.map(old =>{
                    return{
                        ...old,
                        name:'Athukorala'

                    }
                    // console.log(response.data);

                });
                this.setState({posts: update});
            })
            .catch(error => {
               this.setState({error:true})
            })
        ;
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedId:id});
    }



    render() {
        let create=<p style={{textAlign:'center'}}> ********* Something went wrong *********</p>

        if(!this.state.error){

            create = this.state.posts.map(posts => {
                return <Post title={posts.title}
                             body={posts.body}
                             name={posts.name}
                             key={posts.id}
                             clicked={() => this.postSelectedHandler(posts.id)}/>
            });
        }


        return (
            <div className="App">
                {/*this is a header*/}
                <NavBar />

                <div className="row">
                    {create}
                </div>

                {/*full post layer (hidden)*/}
                <FullPost id={this.state.selectedId}/>

                <hr/>


                {/*share new post*/}
                <NewPost/>

                {/*this is a footer*/}
                <FooterPage />
            </div>
        );
    }
}

export default Blog;
