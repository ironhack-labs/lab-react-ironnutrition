export default function TodaysFoods (props) {

    const {foodState} = props
    let finalCal = 0;

    return <div>
        <ul>
            {foodState.map((el) => {
                if(el.quantity > 0){
                    let totalCal = el.quantity * el.calories;
                    finalCal += totalCal;
                    return <li>{el.quantity} {el.name} = {totalCal}</li>
                }
            })}
        </ul>
        <p>Total: {finalCal} cal</p>
    </div>
}