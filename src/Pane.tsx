import * as React from "react";
import * as PropTypes from "prop-types";

export interface Props  {
  vertical: boolean,
  primary: boolean,
  size: number,
  percentage: boolean,
  children: PropTypes.ReactNodeLike[] | PropTypes.ReactNodeLike
};
export default class Pane extends React.Component<Props, {}> {

static defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: []
};
  render() {
    const props = this.props;
    const size = props.size || 0;
    const unit = props.percentage ? "%" : "px";
    let classes = "layout-pane";
    const style: React.CSSProperties = {};
    if (!props.primary) {
      if (props.vertical) {
        style.height = `${size}${unit}`;
      } else {
        style.width = `${size}${unit}`;
      }
    } else {
      classes += " layout-pane-primary";
    }
    return (
      <div className={classes} style={style}>
        {props.children}
      </div>
    );
  }
}