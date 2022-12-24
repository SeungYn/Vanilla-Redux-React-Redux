import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const { id } = useParams();

  const find = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{find?.text}</h1>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
