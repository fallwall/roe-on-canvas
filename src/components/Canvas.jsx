import React, { Component } from 'react';
import * as d3 from "d3";
import Roe from '../roe.png';

class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    const pattern = ctx.createPattern(img, "repeat");

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      ctx.font = "40px Courier";
      ctx.fillText("some words", 210, 75);
    }




  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img ref="image" src={Roe} className="hidden" />
      </div>
    )
  }
}
export default Canvas;