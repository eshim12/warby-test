import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

class Products extends Component {
  
  componentDidMount() {
    this.props.fetchUsers()
  }
  
  render(){
    
    return (
      <div>Products list</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
}

export default connect(mapStateToProps, actions) (Products)
