import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

const MIN_LENGTH = 3;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick(event) {
    const { history } = this.props;
    const { name } = this.state;
    event.preventDefault();
    this.setState({
      loading: true,
    });
    await createUser({ name });
    history.push('/search');
    this.setState({
      loading: false,
    });
  }

  renderForm() {
    const { name } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <form>
        <label htmlFor="login-name-input">
          Insira seu nome:
          <input
            name="name"
            data-testid="login-name-input"
            type="text"
            minLength="3"
            onChange={ handleChange }
            value={ name }
          />
        </label>
        <button
          name="login-submit-button"
          data-testid="login-submit-button"
          type="submit"
          onClick={ handleClick }
          disabled={ name.length < MIN_LENGTH }
        >
          Entrar
        </button>
      </form>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : this.renderForm() }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
