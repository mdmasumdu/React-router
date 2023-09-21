import { useLoaderData } from "react-router-dom";


const Productdeails = () => {

    const productdetils = useLoaderData()
const {images,description,price,title} =productdetils
    return (
        <div>
               <div className="card shadow-xl flex flex-col">
  <figure className="px-10 pt-10 h-25">
    <img src={images[0]} alt="Shoes" className="rounded-xl p-5" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title flex-grow">{title}</h2>
    <p className="flex-grow">{description}</p>
    <p>$ {price}</p>
    <button className="btn btn-primary bg-blue-400">BUY NOW</button>
   
  </div>
</div>
            
        </div>
    );
};

export default Productdeails;