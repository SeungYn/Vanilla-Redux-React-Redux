import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const { id } = useParams();
  console.log(id);
  console.log(toDos);
  const find = toDos.find((toDo) => toDo.id === id);
  console.log(find);
  return (
    <>
      <h1>Detail</h1>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
