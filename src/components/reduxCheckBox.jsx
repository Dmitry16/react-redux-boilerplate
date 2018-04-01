import React from 'react'

const handleChange = () => {
  console.log('kukuuuuu!');
}

export const ReduxCheckbox = props => {
  return (
      <input
        {...props.input}
        type="checkbox"
        checked={props.input.value}
      />
  );
}
