import React from "react";
import ReactDOM from "react-dom";

let Container = require('./app/container').default

var render = function() {
  ReactDOM.render(<Container />, document.querySelector(".app"));
};

window.onload = render;

if (module.hot) {
  module.hot.accept("./app/container", function() {
    Container = require('./app/container').default
    render()
  });
}
