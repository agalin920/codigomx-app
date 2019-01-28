import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge, Collapse } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Components
import ResponseList from './ResponseList';

//Actions
import { getResponses, postResponse} from '../actions/responseActions';

//CSS in JS
const buttonStyles = {
    marginLeft: 'auto',
    marginRight: 0,
    display: 'block',
    marginTop: '2vh'
}

const inputStyles = {
    width: '100%',
    height: '15vh',
}

class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          collapse: false,
          newResponse: '',
          responses: []
        };
      }

      componentWillReceiveProps(nextProps){
        if(nextProps.responses.length === 0) return;
        if(nextProps.responses[0].post_id === this.props.postId){
            this.setState({responses:nextProps.responses})
        }
      }

    toggleCollapse = () => {
        if(!this.state.collapse) this.props.getResponses(this.props.postId);
        this.setState({ collapse: !this.state.collapse });
      }

    toggleModal = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    handleChange = (e) =>{
        this.setState({newResponse: e.target.value});
    }

    handleSubmit = () =>{
        this.props.postResponse(this.props.postId, this.state.newResponse);
        this.setState({newResponse: "", modal: false});
    }

    render(){
        let d = new Date(this.props.date);
        return (
            <div>
                <div onClick={this.toggleCollapse}>{this.props.content} <span style={{float:"right"}}>{d.toGMTString()}</span></div>
                <Collapse isOpen={this.state.collapse}>
                    Number of responses: <Badge color="secondary">{this.state.responses.length}</Badge>
                    <ResponseList responses={this.state.responses}/>
                    <Button style={buttonStyles} onClick={this.toggleModal} color="danger">Add a Response</Button>
                </Collapse>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.handleSubmit}>Responding to: {this.props.content}</ModalHeader>
                    <ModalBody>
                    <textarea style={inputStyles} onChange={this.handleChange} type="textarea" name="text" placeholder="Write your response..." value={this.state.newResponse}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleSubmit}>Submit</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
            );
    }
}

const mapStateToProps = (state) => {
	return({
        responses:state.responseReducer.responses
	});
  }

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
        postResponse,
        getResponses
	  },dispatch
	);
  }


export default connect(mapStateToProps, mapDispatchToProps)(Post);
