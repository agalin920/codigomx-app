import React, { Component } from 'react';
import { Container } from 'reactstrap';

//Components
import PostInput from './components/PostInput';
import PostList from './containers/PostList';

class App extends Component {
  render() {
    return (
      <Container>
          <div style={{textAlign:"center", marginTop:"4vh"}}>
            <h1>Codigo<span style={{color:"red"}}>MX</span> Blog</h1>
          </div>
          <PostInput/>
          <PostList/>
        
      </Container>
        
    );
  }
}

export default App;
