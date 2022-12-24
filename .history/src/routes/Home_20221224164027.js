import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home() {
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
      <ul></ul>
    </>
  );
}

function getCurrentState(state, ownProps) {
	console.log(statem ownProps)
}

export default connect(getCurrentState)(Home);
