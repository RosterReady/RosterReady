
import React from 'react'
import { Button, Divider, Form, Grid } from 'semantic-ui-react'

const massive = ['massive']
const big = ['big']
      
class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamLeader: '',
      sport: '',
      TeamName: '',
      phone:'',
      email: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();
  }

  render() {
    const value = this.state.value  
      return()
  }
}

export default TeamForm