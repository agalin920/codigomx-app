import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';

//Components
import Post from './Post';

//Actions
import { getPosts } from '../actions/postActions';

//CSS in JS
const listGroupStyles = {
    marginTop: "2vh"
}

class PostList extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedPost: undefined
        }
    }

    componentDidMount(){
       this.props.getPosts();
    }

    render(){
        if(this.props.postsAreFetching){
            return <Spinner color="danger"/>
        }
        else{
            return(
                <div>
                    <ListGroup style={listGroupStyles}>
                        <h3>Recent Blog Posts: </h3>
                        {this.props.posts.reverse().map((post, i) => {
                            return <ListGroupItem key={i}><Post key={i} postId={post._id} content={post.post_content} date={post.created_at} /></ListGroupItem>;
                        })}
                    </ListGroup>
                </div>
            );
        }
        
        
    }
}

const mapStateToProps = (state) => {
	return({
        posts:state.postReducer.posts,
        postsAreFetching:state.postReducer.isFetching,
	});
  }

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
        getPosts
	  },dispatch
	);
  }


export default connect(mapStateToProps, mapDispatchToProps)(PostList);