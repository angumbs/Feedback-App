import PropTypes from 'prop-types'
import MenuItem from "./MenuItem"
import Card from './shared/Card'

function MenuList({dish}) {    
    return <div className="feedback-list">
        {dish.map((dish) => (
            <MenuItem key={dish.id} dish={dish}/>
        ))}
    </div>
}

MenuList.propTypes = {
    dish: PropTypes.array.isRequired,
}

export default MenuList
