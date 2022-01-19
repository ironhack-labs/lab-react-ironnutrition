import React, { useState } from "react";

const FoodForm = ( {foods, setFoods} ) => {
    const [buttonForm, setForm] = useState(false);

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");

    const handleCancelForm = () => {
        setName("");
        setCalories("");
        setImage("");
        setForm(false);
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert(`Submitting food: ${name}`);

        const newFoods = [{ name, calories, image, quantity: 0 }, ...foods];

        setFoods(newFoods);
        setName("");
        setCalories("");
        setImage("");
        setForm(false);
    };

    const forms = [
        {
            label: "Name",
            type: "text",
            placeholder: "name",
            name: "name",
            value: name,
            onChange: e => setName(e.target.value)
        },
        {
            label: "Number of Calories",
            type: "number",
            placeholder: "0",
            name: "calories",
            value: calories,
            onChange: e => setCalories(e.target.value)
        },
        {
            label: "Link of image",
            type: "url",
            placeholder: "https://example.com",
            name: "link",
            value: image,
            onChange: e => setImage(e.target.value)
        }
    ];

    return (
        <>
            <div className="field">
                <p className="control">
                    <button className="button is-info" onClick={() => setForm(true)}>Add Food</button>
                </p>
            </div>
            {buttonForm && (
                <form className="field" onSubmit={e => handleSubmit(e)}>
                    {forms.map(form => (
                        <div key={form.label}>
                            <label className="label">{form.label}</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type={form.type}
                                    placeholder={form.placeholder}
                                    name={form.name}
                                    value={form.value}
                                    onChange={form.onChange}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="field is-grouped">
                        <p className="control">
                            <button className="button is-primary" type="submit">Submit</button>
                        </p>
                        <p className="control">
                            <button className="button is-light" type="button" onClick={handleCancelForm}>Cancel</button>
                        </p>
                    </div>
                </form>
            )}
        </>
    );
};

export default FoodForm;