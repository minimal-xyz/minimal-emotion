import React from "react";
import ReactDOM from "react-dom";

import/* webpackMode: "eager" */ Container from './app/container'

var render = function() {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = render;

if (module.hot) {
  module.hot.accept("./app/container", function() {
    render()
  });
}
