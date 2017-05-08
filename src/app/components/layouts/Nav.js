import React from 'react';
import { IndexLink, Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import SearchSources from '../SearchSources';

export default class Nav extends React.Component {
  constructor() {
    injectTapEventPlugin();
    super();
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { name, photo, email } = this.props.user;
    const { location } = this.props;
    const { collapsed } = this.state;
    const homeClass = location.pathname === '/' ? 'active' : '';
    const navClass = collapsed ? 'collapse' : '';

    return (
      <div class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle"
            onClick={this.toggleCollapse}
            data-target=".navbar-inverse-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <button type="button" class="navbar-toggle"
            onTouchTap={this.props.sourcesToggle}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Hottest News</a>
          </div>
          {/*<RaisedButton
              label="Toggle"
              onTouchTap={this.props.sourcesToggle}
            />*/}
          <div class={`navbar-collapse navbar-inverse-collapse ${navClass}`}>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="bootstrap-elements.html" data-target="#"
                class="dropdown-toggle" data-toggle="dropdown">
                <span>Welcome, {name.match(/\w+(?=\s)/)[0]}
                  <img class="user-image" src={photo} />
                </span>
                  <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><Link onClick={this.props.signOut}>Logout</Link></li>
                </ul>
              </li>
            </ul>
            <SearchSources sources={this.props.sources}
            headlines={this.props.headlines} />
          </div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object,
  name: PropTypes.string,
  photo: PropTypes.string,
  email: PropTypes.string,
  headlines: PropTypes.func,
};
