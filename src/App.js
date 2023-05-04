import { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import { Typography, Col, Row, Divider, Button } from 'antd';
const { Title } = Typography;
import AddFoodForm from './components/AddFoodForm';
import OnSearch from './components/OnSearch';

function App() {
	const [renderedFoodsList, updateRenderedFoodsList] = useState( foodsJSON ); // list to show/render
	const [defaultFoodsList, resetFoodsList] = useState( foodsJSON ); // backup/fallback/reset list
	const [formIsVisible, setFormVisibility] = useState( true );

	const addFood = ( newFood ) => {
		updateRenderedFoodsList( [...renderedFoodsList, newFood] );
		resetFoodsList( [...defaultFoodsList, newFood] );
	};

	const showSearchResult = ( query ) => {
		if ( query ) {
			const searchResult = defaultFoodsList.filter( ( food ) => food.name.toLowerCase().includes( query.toLowerCase() ) );
			updateRenderedFoodsList( searchResult );
		} else {
			updateRenderedFoodsList( defaultFoodsList );
		}
	};

	const deleteFood = ( deleteThisFoodName ) => {
		updateRenderedFoodsList( renderedFoodsList.filter( ( food ) => food.name !== deleteThisFoodName ) );
		resetFoodsList( renderedFoodsList.filter( ( food ) => food.name !== deleteThisFoodName ) );
	};

	const toggleVisibility = () => setFormVisibility( !formIsVisible );

	return (
		<div className="App">
			<Title level={1}>IronFood</Title>

			<Button onClick={toggleVisibility}>{formIsVisible ? 'Hide Form' : 'Add New Food' }</Button>
			<Row>
				<Col span={8} offset={8}>
					{formIsVisible && <AddFoodForm addFood={addFood}/>}

					<OnSearch showSearchResult={showSearchResult} />
				</Col>
			</Row>

			<Divider>Food List</Divider>

			<Row style={{ width: '100%', justifyContent: 'center' }}>
				{ renderedFoodsList.length > 0 ? renderedFoodsList.map( ( food, i ) => {
					return (
						<FoodBox
							food={ {
								name: food.name,
								calories: food.calories,
								image: food.image,
								servings: food.servings,
							}}
							key={`${food.name}+${i}`} // COMMENT: could also genereate a random ID with uuid package
							deleteFood={deleteFood}
						/>
					);
				} ) : <Title level={3}>Oops! There is no more content to show.</Title>}
			</Row>
		</div>
	);
}

export default App;
