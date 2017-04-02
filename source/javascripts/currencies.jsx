class Currencies extends React.Component {
  constructor(props) {
    super(props);
    this.props = { wealth: window.wealth, influence: window.influence, power: window.power}
  }

  tick() {
    window.wealth += 1
    this.setState((prevState) => ({
      wealth: prevState.wealth + 1
    }));
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