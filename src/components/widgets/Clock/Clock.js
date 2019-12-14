import React, { Component } from 'react';


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
      <div className="row justify-content-center">
        <div className="col-md-auto">

          <div className="d-flex bg-color-ivory container-padding-border-radius-2">

            <div className="width-400 text-center">

              <div className="row">

                <div className="col">
                  {t}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Clock;
