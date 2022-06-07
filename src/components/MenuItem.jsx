import PropTypes from 'prop-types'
import Card from './shared/Card'

function MenuItem({dish}) {  

  return (
    <Card>
      <div className="num-display">{dish.id}</div>
      <div className="text-display">{dish.title}</div>
    </Card>
  )
}

MenuItem.propTypes = {
  dish: PropTypes.object.isRequired,
}

export default MenuItem