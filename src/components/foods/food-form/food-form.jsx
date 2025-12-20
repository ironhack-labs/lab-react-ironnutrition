import { useForm } from "react-hook-form";

const validations = {
    name: {
        required: 'Campo requerido'
    },
    calories: {
        required: 'Campo requerido',
        min: { value: 1, message: 'Debe ser mayor que 0' },
    },
    servings: {
        required: 'Campo requerido',
        min: { value: 1, message: 'Debe ser mayor que 0' },
    }
};

function FoodForm ({ onSubmitForm = () => {} }) {

    const {
        register, 
        handleSubmit, 
        formState: { errors, isValid }, 
        reset 
    } = useForm({ mode: 'all' });

    const handleSubmitForm = async (data) => {
        reset();
        onSubmitForm(data);
    };

    return (
        <div className="row justify-content-center py-4">
            <div className="col-6">
                <div className="card bg-light">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    {...register('name', validations.name)}
                                />
                                {errors.name && (<div className="invalid-feedback">{errors.name.message}</div>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    {...register('image')}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Calories</label>
                                <input 
                                    type="number" 
                                    className={`form-control ${errors.calories ? 'is-invalid' : ''}`}
                                    {...register('calories', validations.calories)}
                                />
                                {errors.calories && (<div className="invalid-feedback">{errors.calories.message}</div>)}
                            </div>                            

                            <div className="mb-3">
                                <label className="form-label">Servings</label>
                                <input 
                                    type="number" 
                                    className={`form-control ${errors.servings ? 'is-invalid' : ''}`}
                                    {...register('servings', validations.servings)}
                                />
                                {errors.servings && (<div className="invalid-feedback">{errors.servings.message}</div>)}
                            </div>
                            
                            <button type="submit" className="btn btn-primary" disabled={!isValid} >Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodForm;