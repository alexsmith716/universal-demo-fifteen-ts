import React, { Fragment, Component } from 'react';


class Clock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    // register function to be invoked repeatedly after elapse of 1 sec
    this.timerID = setInterval( () => this.callbackFunction(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  callbackFunction = () => this.setState({ date: new Date(), });

  render() {

    const t = this.state.date.toLocaleTimeString();

    return (

      <Fragment>
        {t}
      </Fragment>
    );
  }
}

export default Clock;
