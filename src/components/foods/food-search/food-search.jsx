import { useForm } from "react-hook-form";

function FoodSearch ({ onSearch = () => {} }) {

    const {
        register, 
        handleSubmit
    } = useForm({ mode: 'submit' });

    const handleSubmitSearch = (data) => {
        onSearch(data);
    }

    return (
        <>
            <div className="row justify-content-center py-3">
                <div className="col-12">
                    <form onSubmit={handleSubmit(handleSubmitSearch)}>
                        <label className="form-label">Buscador</label>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="" 
                                {...register('searchFood')}
                            />
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
                        </div>
                    </form>                    
                </div>
            </div>
        </>
    );
}

export default FoodSearch;