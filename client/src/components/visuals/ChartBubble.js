import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import { generateBubbleData, bubbleOptions } from './chartBubbleConfig';

class ChartBubble extends Component {
  state = { data: generateBubbleData, timeInterval: null };

  componentDidMount() {
    this.shuffleBubble();
  }

  componentWillUnmount() {
    clearInterval(this.state.timeInterval);
  }

  shuffleBubble() {
    let timeInterval = setInterval(() => {
      this.setState({ data: generateBubbleData });
    }, 5e3);

    this.setState({ timeInterval });
  }

  render() {
    return (
      <Bubble
        id="bubble-chart"
        data={this.state.data}
        options={bubbleOptions}
      />
    );
  }
}

export default ChartBubble;
