import {Component, React} from 'react';
import './App.css';
import FoodList from './components/FoodList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ''
		};
	}

	handleInputChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<h1 className="title">IronNutrition</h1>
					<div>
						<input type="text"
							   className="input search-bar"
							   name="search"
							   placeholder="Search"
							   value={this.state.search}
							   onChange={event => this.handleInputChange(event)}/>
					</div>
					<FoodList searchTerm={this.state.search}/>
				</div>
			</div>
		);
	}
}

export default App;
