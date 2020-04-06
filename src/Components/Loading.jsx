import React from 'react';

function Loading(props) {
  switch (props.loading) {
    case true:
      return <h1>Loading...</h1>
      
    case false:
      return props.render();
      
    default:
      return <h1>Loading...</h1>
  }
}

export default Loading;