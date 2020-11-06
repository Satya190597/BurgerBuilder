import React,{Component} from "react";
import Aux from "../../HOC/Auxiliary";
import styles from "./layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
      <Aux>
        <div>
          <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler}/>
          <SideDrawer show={this.state.showSideDrawer} modelClosed={this.sideDrawerCloseHandler}/>
          <main className={styles.content}>{this.props.children}</main>
        </div>
      </Aux>
    );
  }
};

export default Layout;
