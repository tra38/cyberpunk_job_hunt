class Currencies extends React.Component {
  constructor(props) {
    super(props);
    this.props = { wealth: window.wealth, influence: window.influence, power: window.power}
  }

  tick() {
    window.wealth += 1;
    this.forceUpdate();
    // this.setState((prevState) => ({
    //   wealth: prevState.wealth + 1
    // }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>💰: {window.wealth} | 🤔: {window.influence} | 🤓: {window.power}</div>
    );
  }
}
ReactDOM.render(<Currencies />, document.getElementById('currencies'));

// Ideas:
// * Window.Paper, which is a resource that will allow you to generate Blog Posts, which can create either Influence or Power. It does not translate directly to Money. (This is better than the "contributing to Open Source" or "Asking for Help on HFSE", since it's a bit of a stretch to apply them to corporations.) [Unnecessary since now Your Brand allows direct conversions.]
// *Tooltips for the resources so users know exactly what each emoji stands for.

// * Establish 'toasts' every time you do an action to indicate exactly what you're doing!