import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <button className='close'>
        <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
      </button>
      <div className='card-text'>{item.text}</div>
      <div className='card-name'>{item.name}</div>
    </Card>
  )
}

export default FeedbackItem
