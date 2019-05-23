import React, { Component } from 'react';
import styles from './index.module.scss';
import ConstructCSS from '../../helpers/ConstructCSS';

class Slider extends Component {
  render() {
    return (
      <div className={ConstructCSS(styles.sliderContainer)}>
        <div className={ConstructCSS(styles.slider)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Slider;
