import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer.component'
import PropTypes from 'prop-types'

export default class MenuBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    return (
      <div className='page'>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            as={Link}
            to='/home'
            active={this.state.activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='done'
            as={Link}
            to='/done'
            active={this.state.activeItem === 'done'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={this.state.activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='login'
              active={this.state.activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

MenuBar.propTypes = {
  children: PropTypes.array
}
