import { useState } from "react"
import MenuData from "../data/MenuData"
import Card from './shared/Card'

function ShowMenu() {

const today = new Date();
const [weekday, setWeekday] = useState(today.getDay())
const dish = MenuData

const Info =  ({dish}) => {
  return (
    <Card>
    <p> {dish.weekdayName} </p>
    <p> {dish.title}</p>
    </Card>
  )
}

const DishList = ({dish}) => {
  return (<div>
    {dish.map((dish) => (
            <Info key={dish.id} dish={dish}/>
        ))}
    </div>
    )
}

const DayItem = ({dish}) => {
  return (
        <button className='btn-day btn-secondary' onClick={() => setWeekday(dish.id)}>{dish.id === weekday ? dish.dayShort : dish.day}</button>
  )
}

const DayList = ({dish, id}) => {
  return (<div className="rating">
    {dish.map((dish) => (
        <DayItem key={dish.id} dish={dish}/>
        ))}
    </div>
    )
}

return (  
  <div className="container">
    <div className="rating">
    <DayList dish={dish.filter((e) => e.id !== 0  && e.id !== 6)}/>
    </div>
    <div
    key={dish.id}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
    <DishList dish={dish.filter((e) => e.id === weekday)}  />
    </div>
  </div> 
  )
}

export default ShowMenu