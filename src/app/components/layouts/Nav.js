import React from 'react';
import { IndexLink, Link } from 'react-router';
import SearchSources from '../SearchSources';

export default class Nav extends React.Component {
  constructor() {
    super();
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
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}
            data-target=".navbar-inverse-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Hottest News</a>
          </div>
          <div class={`navbar-collapse navbar-inverse-collapse ${navClass}`}>
            <ul class="nav navbar-nav navbar-right">
              <li class={homeClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class="dropdown">
                <a href="bootstrap-elements.html" data-target="#"
                class="dropdown-toggle" data-toggle="dropdown">
                <span> {name} <img class="user-image" src={photo} /> </span>
                  <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li><Link onClick={this.props.signOut}>Logout</Link></li>
                </ul>
              </li>
            </ul>
            <SearchSources sources={this.props.sources} headlines={this.props.headlines} />
          </div>
        </div>
      </div>
    );
  }
}
