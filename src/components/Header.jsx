import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
      <div className='container mt-3'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Kind Feedback',
}

Header.propTypes = {
  text: PropTypes.string,
}
export default Header
