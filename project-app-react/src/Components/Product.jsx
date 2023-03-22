import { useEffect,useState } from "react";
function Product() {
  const [dataProduct,setDataProduct] = useState([]);
useEffect(()=>{
  fetch(`http://localhost:3000/product`)
  .then((res)=>res.json())
  .then((data) =>setDataProduct([...data]))
  .catch((err) =>console.log(err));
},[]
);
  return (
    <div>
      <div className="product_layout">
        <div className="product_title">
          <h3>LapTop Văn Phòng</h3>
        </div>
        <div className="grid-layout" >
          {dataProduct.map((e,i) =>(
        <div className="product" >
        <h4>{e.nameProduct}</h4>
        <img src={e.img} alt="" />
        <div className="view-produc">
        <p><i class="fa-solid fa-eye"></i> {e.view}</p> 
        <p><i class="fa-solid fa-star"></i> {e.Evaluate} </p>
        <p><i class="fa-solid fa-comment"></i> {e.Comment}</p>
        </div>
        <p className="price">{e.price}</p>
        <button > <i class="fa-sharp fa-solid fa-cart-plus"></i> Thêm giỏ hàng</button>
      </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
