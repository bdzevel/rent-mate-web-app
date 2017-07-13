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
        <input type="text" />
        <input type="password" />
      </div>
    );
  }
}

export default LoginForm;
