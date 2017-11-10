import React from 'react'
import { Link } from 'react-router-dom'
import { split, contains } from 'ramda'

const Form = ({ id, name, value, onChange, onSubmit, cancelUrl }) => {
  let nameField
  const splitURL = split('/', cancelUrl)
  if (contains('colors', splitURL)) {
    nameField = (
      <div>
        <label className="dib">name</label>
        <input
          type="text"
          value={name}
          onChange={e => onChange('name', e.target.value)}
        />
      </div>
    )
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit({ id, name, value })
      }}
    >
      <div>
        <label className="dib">id</label>
        <div>{id}</div>
      </div>
      {nameField}
      <div>
        <label className="dib">value</label>
        <input
          type="text"
          value={value}
          onChange={e => onChange('value', e.target.value)}
        />
      </div>
      <div>
        <button>Submit</button>
        <Link to={cancelUrl}>Cancel</Link>
      </div>
    </form>
  )
}

export default Form
