import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="wrapper">
        <Ava />
        <Inputs />
        <Yop1 />
      </div>
    </div>
  );
}

function Ava() {
  return (
    <div className="image1">
      <div className="image"></div>
    </div>
  );
}

function Yop() {
  return (
    <div>
      <p className="log">Log in</p>
    </div>
  );
}

function Inputs() {
  return (
    <div className="Apps">
      <div>
        <label for="Name">Name: </label>
        <br />
        <input type="text" className="input1" placeholder="Username or email" />
        <br />
        <label for="password">Password: </label>
        <br />
        <input
          type="password"
          className="input1"
          placeholder="Username or email"
        />
        <br />
        <button className="login">Login</button>
      </div>
    </div>
  );
}

function Yop1() {
  return (
    <div>
      <p className="forget">
        <a href="#">Forget Password?</a>
      </p>
    </div>
  );
}
