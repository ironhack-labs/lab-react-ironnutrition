import { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { Typography, Col, Row, Divider, Button } from 'antd';
const { Title } = Typography;
import AddFoodForm from './components/AddFoodForm';
import OnSearch from './components/OnSearch';

function App() {
	// eslint-disable-next-line no-unused-vars
	const [foodsList, setFoodsList] = useState( foodsJSON );
	const [foodsListReset, setFoodsListReset] = useState( foodsJSON );
	const [isVisible, setVisibility] = useState( true );

	const addFood = ( newFood ) => {
		setFoodsList( [...foodsList, newFood] );
		setFoodsListReset( [...foodsList, newFood] );
	};

	const showSearchResult = ( query ) => {
		if ( query ) {
			const searchResult = foodsListReset.filter( ( food ) => food.name.toLowerCase().includes( query.toLowerCase() ) );
			setFoodsList( searchResult );
		} else {
			setFoodsList( foodsListReset );
		}
	};

	const deleteFood = ( deleteThisFoodName ) => {
		setFoodsList( foodsList.filter( ( food ) => food.name !== deleteThisFoodName ) );
	};

	const toggleVisibility = () => setVisibility( !isVisible );

	return (
		<div className="App">
			<Title level={1}>IronFood</Title>

			<Button onClick={toggleVisibility}>{isVisible ? 'Hide Form' : 'Add New Food' }</Button>
			<Row>
				<Col span={8} offset={8}>
					{isVisible && <AddFoodForm addFood={addFood}/>}

					<OnSearch showSearchResult={showSearchResult} />
				</Col>
			</Row>

			<Divider>Food List</Divider>

			<Row style={{ width: '100%', justifyContent: 'center' }}>
				{ foodsList.length > 0 ? foodsList.map( ( food, i ) => {
					return (
						<FoodBox
							food={ {
								name: food.name,
								calories: food.calories,
								image: food.image,
								servings: food.servings,
							}}
							key={`${food.name}+${i}`}
							deleteFood={deleteFood}
						/>
					);
				} ) : <Title level={3}>Oops! There is no more content to show.</Title>}
			</Row>
		</div>
	);
}

export default App;
