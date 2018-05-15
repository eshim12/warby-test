import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='navBar'>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} to='/' name='you' active={activeItem === 'you'} onClick={this.handleItemClick}/>
          <Menu.Item as={NavLink} to='/camera' name='try it on' active={activeItem === 'camera'} onClick={this.handleItemClick}/>
          <Menu.Item as={NavLink} to='/products' name='glasses' active={activeItem === 'glasses'} onClick={this.handleItemClick}/>

          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar
