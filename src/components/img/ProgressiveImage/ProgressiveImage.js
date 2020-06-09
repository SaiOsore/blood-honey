import React, { Component } from "react";
import { ProgressiveImageContainer, ProgressiveImageStyled, ProgressiveImageOverlay } from './ProgressiveImageStyled';

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});

class ProgressiveImage extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      highResImageLoaded: false,
    };
  }

  render() {

    const { overlaySrc, src, alt } = this.props;
    const { highResImageLoaded } = this.state;
    let filteredProps = omit(this.props, "overlaySrc");

    return (
      <ProgressiveImageContainer>
        <ProgressiveImageStyled
          {...filteredProps}
          onLoad={() => {
            this.setState({ highResImageLoaded: true });
          }}
          ref={img => {
            this.highResImage = img;
          }}
          src={src}
          alt={alt}
        />
        <ProgressiveImageOverlay
          {...filteredProps}
          {...highResImageLoaded && { style: { opacity: "0" } }}
          src={overlaySrc}
          alt={alt}
        />
      </ProgressiveImageContainer>
    );
  }
}

export default ProgressiveImage;