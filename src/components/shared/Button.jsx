import propTypes from 'prop-types'

function Button({ children, version, type, isDisabled }) {
    return (
        <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: propTypes.node.isRequired,
    type: propTypes.string,
    version: propTypes.string,
    isDisabled: propTypes.bool
}

export default Button
