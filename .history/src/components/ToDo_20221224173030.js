import React from 'react';

function ToDo({ text }) {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {}

export default connect(null, mapDispatchToProps)(ToDo);
