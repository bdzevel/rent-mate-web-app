import React from 'react';

class LoginForm extends React.Component {
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
        <hr />
        <input type="text" />
        <hr />
        <input type="password" />
        <hr />
      </div>
    );
  }
}

export default LoginForm;