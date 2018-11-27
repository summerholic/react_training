import React, { Component } from 'react';
import NewForm from './component/NewForm';
import { Container, Grid, Segment } from 'semantic-ui-react';
import UserList from './component/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      selectedIdx : '',
      selectedUser : ''
    }
  }

  onAddUser(newUser) {
    // let isUpdate = false;
    // isUpdate = this.state.users.map((user, i) => {
    //   if( user.name === newUser.name ) { 
    //     this.state.users[i] = newUser
    //     return true;
    //   }
    //   return false;
    // });

    if( this.state.selectedUser !== '' ) {
      alert(this.state.selectedIdx);
      this.state.users[this.state.selectedIdx] = newUser;
      this.setState({
        users : this.state.users
      })
    } else {
      this.setState({
        users : [...this.state.users, newUser]
      })
    }
  }

  onUserSelect(selectedIdx) {
    this.setState({
      selectedUser : this.state.users[selectedIdx]
    })
  } 

  render() {
    return (
      <div className="App">
        <Container style={{marginTop : 50}}>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                <NewForm 
                onAddUser= {this.onAddUser.bind(this)}
                selectedUser={this.state.selectedUser}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <UserList users={this.state.users} 
                onUserSelect={this.onUserSelect.bind(this)}
                />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>  
      </div>
    );
  }
}

export default App;
