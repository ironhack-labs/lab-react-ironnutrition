import { useForm } from "react-hook-form";

const AddFoodForm = ({ onCreate }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    },
  });

  const onSubmit = async (food) => {
    onCreate(food);
    reset();
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <form className="col-12 col-md-5" onSubmit={handleSubmit(onSubmit)}>
        {/* NAME */}
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-fw fa-bookmark"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Food Name"
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 30, message: "Maximos is 30 characters" },
              minLength: { value: 5, message: "Minimum is 5 characters" },
            })}
          />
        </div>

        {/* IMAGE */}
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-fw fa-picture-o"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="URL image"
            {...register("image", {
              required: "Url Img is required",
              minLength: { value: 10, message: "Minimum is 10 characters" },
            })}
          />
        </div>

        {/* CALORIES */}
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-fw fa-asterisk"></i>
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Number of Calories"
            {...register("calories", {
              required: "Calories is required",
              min: { value: 1, message: "Calories must be greater than 0" },
              max: {
                value: 9999,
                message: "Calories must be less than 10,000",
              }, // Ajusta este valor según tus necesidades
            })}
          />
        </div>

        {/* SERVINGS */}
        <div className="input-group mb-1">
          <span className="input-group-text">
            <i className="fa fa-fw fa-users"></i>
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Number Serving"
            {...register("servings", {
              required: "Serving is required",
              min: { value: 1, message: "Serving must be greater than 0" },
              max: { value: 9999, message: "Serving must be less than 10,000" }, // Ajusta este valor según tus necesidades
            })}
          />
        </div>
        {errors.name && (
          <div className="text-danger">{errors.name.message}</div>
        )}
        {errors.image && (
          <div className="text-danger">{errors.image.message}</div>
        )}
        {errors.calories && (
          <div className="text-danger">{errors.calories.message}</div>
        )}
        {errors.servings && (
          <div className="text-danger">{errors.servings.message}</div>
        )}
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Create
        </button>
      </form>
    </div>
  );
};
AddFoodForm.defaultProps = {
  onCreate: () => {},
};
export default AddFoodForm;
