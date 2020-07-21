import React, {useState} from 'react'
import FoodBox from './FoodBox'
import TodaysList from './TodaysList'


function FoodBoxes(props) {
    const {foods} = props;
    const initialState = {
        items:foods,
        list:[]
    }
    const [todaysList, setList] = useState(initialState)
    const handleChange = (event) => {
        var index = todaysList.items.findIndex(item =>item.name.includes(event.target.name))
        const newArray=[...todaysList.items] 
        newArray[index] = {...newArray[index], quantity:event.target.value}
        setList(todaysList => ({
            ...todaysList,
            items: newArray
        }))
    }
    const printInfo = (event) => {
        event.preventDefault()
        var index = todaysList.items.findIndex(item =>item.name.includes(event.target.name))
        const items=[...todaysList.items]
        const newList =[...todaysList.list]
        var indexList =newList.findIndex(item =>item.name.includes(event.target.name))
        if(indexList!==-1){
            newList[indexList] = {...newList[indexList], quantity:todaysList.items[index].quantity}
        }else{
            newList.push(items[index])
            newList[newList.length-1]['key']=newList.length-1
        }
        const updatedList = newList.filter(item => parseInt(item['quantity']) !==0)
        setList(todaysList => ({
            ...todaysList,
            list: updatedList
        }))
    }

    const foodsArray =  foods.map(item => <FoodBox key={props.foods.indexOf(item)} name={item.name} calories={item.calories} quantity={item.quantity} image={item.image} onChange={handleChange} onSubmit={printInfo}/>)
    if(todaysList.list.length!==0){
    return (
        <div className='columns'>
        <div className='column is-half'>
            {foodsArray}
        </div>
        <div className='column is-half'>
            <TodaysList list={todaysList.list}/>
        </div>
        </div>
    )}else{
        return(
        <div>
            {foodsArray}
        </div> )
    }
}
export default FoodBoxes


