import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Image, Dropdown} from 'semantic-ui-react'
import GlassDetail from './GlassDetail'
import {NavLink} from 'react-router-dom'

class Products extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      category: 'all'
    }
  }
  
  componentDidMount() {
    this.props.fetchGlasses()
  }
  
  handleCategory = (e) => {
    console.log(e.target.id);
    this.setState({
      category: e.target.id
    })
  }
  
  getCat = (glasses) => {
    const cat = [...new Set(glasses.map(glass => glass.category))]
    return cat
  }
  
  render(){
    const {glasses} = this.props 
    const {category} = this.state
    console.log("in render glasses", glasses);
    return (
      <div>
        {glasses ? 
          <div>
            <h2>Glasses</h2>
            <div className='dropdown'>
              <Dropdown text={category.toUpperCase()}>
                <Dropdown.Menu>
                  {this.getCat(glasses).map(category => <Dropdown.Item id={category} key={category} onClick={this.handleCategory}>{category}</Dropdown.Item>)}
                  <Dropdown.Item id='all' onClick={this.handleCategory}>all</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              {category !== 'all' ? 
                glasses.filter(glass => glass.category === category).map(glass => <GlassDetail glass={glass}/>)
              :
                glasses.map(glass => <GlassDetail glass={glass}/>)
              }
            </div>
          </div>
          :
          <p>loading!</p>}
      </div>
    )
  }
}

const mapStateToProps = ({authz, users, glasses}) => ({
  users: users,
  glasses: glasses
})

export default connect(mapStateToProps, actions) (Products)
