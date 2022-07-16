function AddProductForm(props) {

    const {name, description, validation, onNameChange, onDescriptionChange, onFormSubmit} = props;

    return (
        <>
            <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" className="textfield" palceholder="Enter the Name" type="text" value={name} onChange={onNameChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" className="textfield" palceholder="Enter the description" type="text" onChange={onDescriptionChange} value={description} />
            </div>
            <div className='form-footer'>
                <div className='validation-message'>{validation}</div>
                <input type="submit" className='btn btn-primary' value="Add Product" />
            </div>
            
            </form>
        </>
    )
}

export default AddProductForm;