
import React from "react";
import { css } from 'emotion';

const borderStyle = css`
  border: 4px solid #ddd;
`

export default class Container extends React.Component {
  render() {
    return <div className={borderStyle}>Example 12</div>;
  }
}
