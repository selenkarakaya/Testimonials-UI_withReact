import { useState } from 'react'
import Button from './shared/Button'

function FeedbackFrom({ handleAdd }) {
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text.trim().length < 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10 && name !== '') {
      const newFeedback = {
        text,
        name,
      }
      handleAdd(newFeedback)
      setText('')
      setName('')
    }
  }
  return (
    <>
      <div className='row mt-2 d-flex justify-content-center'>
        <button
          className='btn'
          data-bs-toggle='collapse'
          data-bs-target='#collapse-form'
          aria-expanded='false'
          aria-controls='collapse-form'
        >
          Add Feedback
        </button>
      </div>
      <form className='collapse' id='collapse-form' onSubmit={handleSubmit}>
        <h4 className='text-center'>Leave a Recommendation</h4>

        <div className='input-group'>
          <input
            type='text'
            id='nameComment'
            placeholder='Name'
            className='mb-2'
            onChange={handleNameChange}
            value={name}
          />
          <br />
          {message && <div className='message'>{message}</div>}
          <textarea
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
            className='mb-2'
            cols='60'
            rows='10'
          ></textarea>
          <Button type='submit' isDisabled={btnDisabled} className='btn'>
            Send
          </Button>
        </div>
      </form>
    </>
  )
}

export default FeedbackFrom
