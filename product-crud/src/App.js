import {useState} from 'react';
import ProductsList from './ProductList';
import AddProductForm from './AddProductForm';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if(!name) {
      setValidation('Please enter name!');
      return;
    }

    if(!description) {
      setValidation('Please enter description');
      return;
    }

    // set products data
    const newProduct = {
      id: products.length + 1,
      name : name,
      description : description
    }

    const productArray = [...products, newProduct];

    setProducts(productArray);   

    // reset form
    setName('');
    setDescription('');
    setValidation('');
  }

  function handleDeleteButton(id) {
    const updatedProducts =  products.filter(product => product.id != id);
    setProducts(updatedProducts);
  }

  return (
    <>
      <AddProductForm name={name} description={description} validation={validation} onNameChange={handleNameChange} onDescriptionChange={handleDescriptionChange} onFormSubmit={handleFormSubmit} />
      
      <ProductsList products={products} onDeleteClick={handleDeleteButton} />
    </>
 
  );
}

export default App;
