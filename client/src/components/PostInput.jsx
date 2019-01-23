import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

//Actions 
import { postPost } from '../actions/postActions';

//CSS in JS
const inputStyles = {
    width: '100%',
    height: '15vh',
    marginTop: '2vh'
}

const buttonStyles = {
    marginLeft: 'auto',
    marginRight: 0,
    display: 'block'
}


class PostInput extends Component{
    constructor(props){
        super(props);

        this.state={
            newPost:""
        }
    }

    handleChange = (e) =>{
        console.log(e.target.value);
        this.setState({newPost: e.target.value});
    }

    handleSubmit = () =>{
        this.props.postPost(this.state.newPost);
        this.setState({newPost: ""});

    }
    
    render(){ 
        return(
            <div>
                <textarea style={inputStyles} onChange={this.handleChange} type="textarea" name="text" placeholder="Submit a new blog post..." value={this.state.newPost}/>
                <Button style={buttonStyles} onClick={this.handleSubmit} color="danger">Submit</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return({
	});
  }

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
        postPost
	  },dispatch
	);
  }


export default connect(mapStateToProps, mapDispatchToProps)(PostInput);