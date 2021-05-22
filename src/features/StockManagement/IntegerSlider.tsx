import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class IntegerSlider extends React.Component {
  state = {
    inputValue: 100,
  };

  onChange = (value: any) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={16}>
          <Slider
            min={0}
            max={200}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={2}>
          <InputNumber
            min={0}
            max={200}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default IntegerSlider;