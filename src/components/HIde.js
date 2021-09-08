import React from 'react';

export default function Hide(props) {
  return <div>{props.hide || props.children}</div>;
}
