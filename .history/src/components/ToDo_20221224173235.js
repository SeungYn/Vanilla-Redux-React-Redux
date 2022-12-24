import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

function ToDo({ text }) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)) };
}

export default connect(null, mapDispatchToProps)(ToDo);
