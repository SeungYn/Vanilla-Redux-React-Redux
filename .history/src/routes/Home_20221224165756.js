import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>btn</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps)(Home);
