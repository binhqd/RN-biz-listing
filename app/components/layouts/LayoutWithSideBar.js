import React from 'react';
import { SideMenu, Icon } from 'react-native-elements';
import { MenuComponent } from '../SideMenu';

class LayoutWithSideBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.menu = <MenuComponent navigation={this.props.navigation}/>;

    this.state = {
      isOpen: false
    }
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      handleMenuToggle: this.toggleSideMenu.bind(this)
    });
  }

  componentWillUnmount() {
    this.setState({
      isOpen: false
    })
  }

  onSideMenuChange(isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    })
  }

  toggleSideMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    return (
      <SideMenu isOpen={ this.state.isOpen }
        onChange={ this.onSideMenuChange.bind(this) }
        menu={ this.menu }>
        {this.props.children}
      </SideMenu>
    );
  }
}

export default LayoutWithSideBar;
