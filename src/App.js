import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackFrom'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <FeedbackForm handleAdd={addFeedback} />
    </>
  )
}

export default App
