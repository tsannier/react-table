import React from 'react';
import { union } from 'lodash';

export default class ReactTable extends React.Component {

  static propTypes = {
    ascSort: React.PropTypes.func,
    descSort: React.PropTypes.func,
    data: React.PropTypes.arrayOf(React.PropTypes.object),
    paginationPosition: React.PropTypes.oneOf(['top', 'bottom']),
    shownRows: React.PropTypes.number,

  };

  static defaultProps = {
    ascSort: function(a, b) { return a - b; },
    descSort: function(a, b) { return b - a; },
    paginationPosition: 'bottom',
  };

  constructor(props) {
    super(props);
    this.state = {d: props.data};
  }

  componentWillMount() {
    this.setState({ columns: getColumns(this.props.data) });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data)
      this.setState({ columns: getColumns(nextProps.data) });
  }

  getColumns(data) {
    const columns = [];
    for (let row in data)
      columns = union(columns, Object.keys(row));
    return columns;
  }

  render() {
    const headers = this.state.columns.map((c, i) => (
      <div key={i} className="rt-cell rt-header">{c}</div>
    ));

    const rows = this.state.

    return (
      <div>
        {headers}
      </div>
    );
  }

}
