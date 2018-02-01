import React from 'react';



class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateInfo(info) {
    return event => this.setState({
      [info]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
    this.props.history.push('/dashboard')
  }

  renderErrors() {
  return(
    <ul>
        <li key='session-error'>
          {this.props.errors[0]}
        </li>
    </ul>
  );
}

  render () {



    return (
        <div className='signup-form'>
          <form onSubmit= { this.handleSubmit}>Welcome to SplitQuick
            {this.renderErrors()}
            <br/>
            <label>Username
              <br/>
            <input type="text"
                   value={this.state.username}
                   onChange={this.updateInfo('username')}
                   className="login-input"
                    />
            </label>
            <br/>
            <label>Password
            <br/>
            <input type="password"
                   value={this.state.password}
                   onChange={this.updateInfo('password')}
                   className="login-input"
                    />
            </label>
            <br/>
            <input className='signup-button' type='submit' value="Sign Me Up!"/>
          </form>

        </div>
    )
  }
}


export default SignUpForm;
