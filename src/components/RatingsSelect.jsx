import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

function RatingsSelect({ select }) {

    const [selected, setSelected] = useState(5)
    const {feedbackEdit} = useContext(FeedbackContext)
    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])


    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }

    return (

        <ul className="rating">
            <li>
                <input
                    id="num1"
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    checked={selected === 1} />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    id="num2"
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                    checked={selected === 2} />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    id="num3"
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                    checked={selected === 3} />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    id="num4"
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                    checked={selected === 4} />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    id="num5"
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleChange}
                    checked={selected === 5} />
                <label htmlFor="num5">5</label>
            </li>
        </ul>
    )
}

export default RatingsSelect
