import React from 'react';
import { connect } from 'react-redux';

function ToDo({ text }) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(dispatch, ownProps);
}

export default connect(null, mapDispatchToProps)(ToDo);
