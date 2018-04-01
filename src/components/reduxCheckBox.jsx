import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

// const submit = (dispatch) => {
//   return new Promise((resolve, reject) => {
//     dispatch({
//       type: 'SELECTED_CURRENCY',
//       // appKey,
//       // resolve,
//       // reject
//     })
//   }).catch((error) => {
//     throw new SubmissionError(error);
//   })
// }

const handleChange = () => {
  console.log('kukuuuuu!');
}

const ReduxCheckBox = (props) => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit(submit)}>

      <Field
        name='sel'
        component={ input }
        type='checkbox'
      />

    </form>
  )
}

export default reduxForm({
  form: 'ReduxCheckBox'
})(ReduxCheckBox)
