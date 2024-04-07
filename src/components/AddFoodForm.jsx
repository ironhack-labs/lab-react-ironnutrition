import { useForm } from "react-hook-form";
import './AddFoodForm.css';

function AddFoodForm({ onCreate }) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm({mode: 'all'});

    const handleFoodSubmit = (food) => {
        onCreate(food);
        reset();
    }

    return (
        <div>
            <p className="d-flex justify-content-start my-4">
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Create a food card!
                </a>
            </p>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <form className="input form" onSubmit={handleSubmit(handleFoodSubmit)}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-cutlery fa-fw" aria-hidden="true"/></span>
                            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Plate's name" {...register('name', {required: 'Name is required'})}/>
                            {errors.name && (<small className="invalid-feedback">{errors.name.message}</small>)}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-picture-o fa-fw" aria-hidden="true"/></span>
                            <input type="text" className={`form-control ${errors.image ? 'is-invalid' : ''}`} placeholder="Image" {...register('image', {required: 'Image is required'})}/>
                            {errors.image && (<small className="invalid-feedback">{errors.image.message}</small>)}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-fire fa-fw" aria-hidden="true"/></span>
                            <input type="number" className={`form-control ${errors.calories ? 'is-invalid' : ''}`} placeholder="Calories" {...register('calories', {required: 'Calories is required'})}/>
                            {errors.calories && (<small className="invalid-feedback">{errors.calories.message}</small>)}
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-sort-numeric-asc fa-fw" aria-hidden="true"/></span>
                            <input type="number" className={`form-control ${errors.servings ? 'is-invalid' : ''}`} placeholder="Servings" {...register('servings', {required: 'Servings is required'})}/>
                            {errors.servings && (<small className="invalid-feedback">{errors.servings.message}</small>)}
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
        
        
    )
}

export default AddFoodForm;