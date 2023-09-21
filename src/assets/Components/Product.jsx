/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Product = ({product}) => {


    const {title,description,images,price,id} =product

 const navigate =useNavigate()

 
    const showhandler =()=>{
      navigate(`/products/${id}`)

    }
    return (
        <div>
            <div className="card shadow-xl flex flex-col">
  <figure className="px-10 pt-10 h-25">
    <img src={images[0]} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title flex-grow">{title}</h2>
    <p className="flex-grow">{description}</p>
    <p>$ {price}</p>
    <button className="btn btn-primary bg-blue-600" onClick={showhandler}>SHow Details</button>
  </div>
</div>
        </div>
    );
};

export default Product;