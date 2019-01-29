class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count : props.count
    };
  };

  componentDidMount() {

    try{
      const json = localStorage.getItem('count');
      const count = parseInt(json, 10);

      if(!isNan(count)){
        this.setState(()=>({count}));
      }

    } catch(e) {
      console.log(e);
    }

  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){
      localStorage.setItem('count', this.state.count);
    }
  };

  handleAddOne() {
    this.setState((state) => {
      return {
        count : state.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState((state) => {
      return {
        count : state.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count : 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count : 0
};


ReactDOM.render(<Counter/>, document.getElementById('app'));
