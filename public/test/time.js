// eslint-disable-next-line no-undef
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h2>Time : {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  tick() {
    this.setState((state, props) => ({date: new Date()}));
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(
  <div>
    <Clock/>
  </div>,
  document.getElementById('time')
);
