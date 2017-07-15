import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'hello',
      password: 'world',
    };
  }

  render() {
    return (
      <div>
        <h3>Hello, World</h3>
      </div>
    );
  }
}

export default NavBar;
