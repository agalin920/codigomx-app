import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';

//CSS in JS
const listGroupStyles = {
    marginTop: "5vh"
}

class ResponseList extends Component{

    render(){
        if(this.props.responsesAreFetching){
            return <Spinner color="danger"/>
        }

        else if(this.props.responses.length === 0){
            return <h4 style={{textAlign:"center"}}>No responses</h4>;
        }
        
        else{
            return(
                <div>
                    <ListGroup style={listGroupStyles}>
                        {this.props.responses.reverse().map((response, i) => {
                            let d = new Date(response.created_at);
                            return <ListGroupItem><div>{response.response_content} <span style={{float:"right"}}>{d.toGMTString()}</span></div></ListGroupItem>;
                        })}
                    </ListGroup>
                </div>
            );
        }
        
        
    }
}

const mapStateToProps = (state) => {
	return({
        responsesAreFetching:state.responseReducer.isFetching
	});
  }

export default connect(mapStateToProps)(ResponseList);