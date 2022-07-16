import Product  from "./Product";

function ProductsList (props) {

    const {products,onDeleteClick} = props;

    return (
        <>
            <div>{(products.length <= 0) ? 'Add your first product here': ''}</div>
            <ul className='store-front'>

                {products.map(product => <li key={product.id}><Product details={product} />
                <button className="btn-outline btn-delete" onClick={() => onDeleteClick(product.id)}>Delete</button> 
                </li>)}
            </ul>
        </> 
    )
}

export default ProductsList;