import { useEffect, useState } from "react";
import * as StoreService from '../../../services/store-service';
import FoodForm from "../food-form/food-form";
import FoodSearch from "../food-search/food-search";

function FoodBox ({ showForm = true, showSearch = true }) {

    const [foods, setFoods] = useState([]);
    const [reload, setReload] = useState(true);
    
    useEffect(() => {
        async function getListFood() {
            const listFood = await StoreService.list();
            setFoods(listFood);
        }

        getListFood();
    }, [reload]);

    const handleReload = () => setReload((reload) => !reload);

    const handleFoodDelete = async (id) => {
        await StoreService.remove(id);
        handleReload();
    };

    const handleFoodCreate = async (food) => {
        await StoreService.create(food);
        handleReload();
    };

    const handleFoodSearch = async (nameFood) => {
        const search = await StoreService.searchFood(nameFood);
        setFoods(search);
    };

    if (!foods) {
        return null;
    } else {
        return (
            <div className="container my-4">
                
                {showForm && ( <FoodForm onSubmitForm={handleFoodCreate}/> )}

                {showSearch && ( <FoodSearch onSearch={handleFoodSearch}/> )}

                <div className="row g-4"> 
                {foods.length > 0
                    ? foods.map((food) => (
                    <div className="col-4" key={food.id}>
                            <div className="card h-100" key={food.id}>
                            <div className="ratio ratio-4x3">
                                <img src={food.image} className="object-fit-fill" alt={food.name} />
                            </div>
                            
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{food.name}</h5>
                                <p className="card-text">Servings <b>{food.servings}</b> </p>
                                <p className="card-text"><span className="fw-bold">Total Calories: {food.calories}</span> kcal</p>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary mt-auto" 
                                    onClick={() => handleFoodDelete(food.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>))

                    : (
                    <div className="col-12 align-items-center">
                        <div className="alert alert-primary d-flex align-items-center" role="alert">
                            <div className="bi flex-shrink-0 me-2">
                                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            </div>
                            <div>
                                Ooops!! Listado vacío!!
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default FoodBox;