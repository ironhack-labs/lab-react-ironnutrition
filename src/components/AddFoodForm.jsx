import { useForm } from "react-hook-form";

function AddFoodForm({ className, onCreate }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleFoodSubmit = (food) => {
    onCreate(food);
    reset();
  };

  return (
    <>
      <div className="col-20">
        <form onSubmit={handleSubmit(handleFoodSubmit)}>

          {/* TITLE */}
          <div className="input-group mb-1">
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Write a food name..."
              {...register("name", {
                required: "Food name is required",
                minLength: {
                  value: 3,
                  message: "Food name needs at least 3 chars",
                },
              })}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* IMAGE */}
          <div className="input-group mb-1">
            <input
              type="text"
              className={`form-control ${errors.image ? "is-invalid" : ""}`}
              placeholder="Post a food Image..."
              {...register("image", {
                required: "Food image is required",
              })}
            />
            {errors.image && (
              <div className="invalid-feedback">{errors.image.message}</div>
            )}
          </div>

          {/* CALORIES */}
          <div className="input-group mb-1">
            <input
              type="number"
              className={`form-control ${errors.calories ? "is-invalid" : ""}`}
              placeholder="Enter the calories..."
              {...register("calories", {
                required: "Food calories is required",
                minLength: {
                  value: 1,
                  message: "Food calories needs at least 1 chars",
                },
              })}
            />
            {errors.calories && (
              <div className="invalid-feedback">{errors.calories.message}</div>
            )}
          </div>

          {/* SERVINGS */}
          <div className="input-group mb-1">
            <input
              type="number"
              className={`form-control ${errors.servings ? "is-invalid" : ""}`}
              placeholder="Write the number of servings..."
              {...register("servings", {
                required: "Food servings is required",
                minLength: {
                  value: 1,
                  message: "Food servings needs at least 1 chars",
                },
              })}
            />
            {errors.servings && (
              <div className="invalid-feedback">{errors.servings.message}</div>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-warning">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

AddFoodForm.defaultProps = {
  className: "",
  onCreate: () => {},
};

export default AddFoodForm;