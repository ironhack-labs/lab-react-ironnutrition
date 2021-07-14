
const Form = ({ handleInputChange, submitForm }) => {

    return (


        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Search" name='name' onChange={handleInputChange} />
                <input type="text" placeholder="Search" name='calories' onChange={handleInputChange} />
                <input type="text" placeholder="Search" name='image' onChange={handleInputChange} />
                <input type="submit" defaultValue="Search" />
            </form>
        </div>

    )
}

export default Form;