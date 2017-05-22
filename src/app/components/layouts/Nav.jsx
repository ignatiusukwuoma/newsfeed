import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SearchSources from '../SearchSources.jsx';

injectTapEventPlugin();
/**
 * Displays the navigation bar
 * @class Nav
 * @extends {React.Component}
 */
export default class Nav extends React.Component {

  /**
   * Creates an instance of Nav.
   * Sets the state of Nav
   * @memberOf Nav
   */
  constructor() {
    super();
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  /**
   * Function to collapse and expand the menu
   * @memberOf Nav
   * @returns {function} to reset that state of collaosed
   */
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  /**
   * Renders the logged in user name and photo
   * @returns {navigation} the nav bar and other elements within it
   * @memberOf Nav
   */
  render() {
    const { name, photo } = this.props.user;
    const { collapsed } = this.state;
    const navClass = collapsed ? 'collapse' : '';

    return (
      <div class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button" class="navbar-toggle"
              onClick={this.toggleCollapse}
              data-target=".navbar-inverse-collapse"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <button
              class="navbar-toggle btn btn-sm btn-raised btn-primary"
              type="button" onTouchTap={this.props.sourcesToggle}
            >
              Sources
            </button>
            <a class="navbar-brand" href="/">Hottest News</a>
          </div>
          <div class={`navbar-collapse navbar-inverse-collapse ${navClass}`}>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a
                  href="bootstrap-elements.html" data-target="#"
                  class="dropdown-toggle" data-toggle="dropdown"
                >
                  <span>Welcome, {name}
                    <img class="user-image" src={photo} alt=""/>
                  </span>
                  <b class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li><Link onClick={this.props.signOut}>Logout</Link></li>
                </ul>
              </li>
            </ul>
            <SearchSources
              sources={this.props.sources} headlines={this.props.headlines}
            />
          </div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  email: PropTypes.string,
  headlines: PropTypes.func,
  user: PropTypes.object,
  signOut: PropTypes.func,
  sources: PropTypes.array,
  sourcesToggle: PropTypes.func,
};
