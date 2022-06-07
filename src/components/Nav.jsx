import { Link } from "react-router-dom";
import { FaQuestion, FaCommentDots, FaHome } from 'react-icons/fa'

function Nav() {
    return (
        <div className="about-link">
            <Link to='/' ><FaHome size={30} /></Link>
            <Link to='/about'><FaQuestion size={30} /></Link>
            <Link to='./contact'><FaCommentDots size={30} /></Link>
        </div>
    )
}

export default Nav
