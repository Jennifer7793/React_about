import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Jen\' react',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// css in jS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor:'black'
// }

export default Header
