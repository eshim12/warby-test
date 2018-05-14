import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
  state = { activeItem: 'logout' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={NavLink} to='/' name='home' />
          <Menu.Item as={NavLink} to='/about' name='about' />
          <Menu.Item as={NavLink} to='/products' name='products' />
          <Menu.Item as={NavLink} to='/camera' name='camera' />

          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar
