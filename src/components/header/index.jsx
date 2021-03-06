import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    document.getElementById('globalWrapper').onclick = this.closeDropdown;
  }

  openDropdown(event) {
    event.stopPropagation();
    this.setState({ isDropdownOpen: true });
  }

  closeDropdown() {
    this.setState({ isDropdownOpen: false });
  }

  render() {
    const { path } = this.props;
    const { isDropdownOpen } = this.state;

    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className={ !isDropdownOpen ? 'navbar-toggle collapsed' : 'navbar-toggle' }
              data-toggle='collapse'
              data-target='#navbar'
              aria-expanded={ isDropdownOpen }
              aria-controls='navbar'
              onClick={ event => this.openDropdown(event) }
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link to='/grade-calculator' className='navbar-brand'>Bare Minimum</Link>
          </div>
          <div id='navbar' className={ isDropdownOpen ? 'collapse navbar-collapse in' : 'collapse navbar-collapse' }>
            <ul className='nav navbar-nav'>
              <li className={ path === '/' ? 'active' : '' }><Link to='/'>Home</Link></li>
              <li className={ path === 'grade-calculator' || path === '/grade-calculator' ? 'active' : '' }><Link to='grade-calculator'>Grade Calculator</Link></li>
              <li className={ path === 'gpa-calculator' || path === '/gpa-calculator' ? 'active' : '' }><Link to='gpa-calculator'>GPA Calculator</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  path: React.PropTypes.string,
};
