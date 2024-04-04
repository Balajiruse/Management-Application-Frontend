
import { useNavigate } from "react-router-dom";
import WorkSpace from "../Components/WorkSpace";
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";
import { deleteProduct, getAllData } from "../Helpers/helper";
import Swal from "sweetalert2";


export default function DashboardPage(){
  //useNavigate is used to navigate between pages
  const navigate=useNavigate();
  //required states is imported using useContext
  const {data,setData,setProductName,setProductPrice,setProductQuantity,cartObj,cartCount,setCartCount,setLoad,load}=useContext(AppCtx);
  
  //total products quantity is calculated and stored
  let quantity=0;
  if(data){
       quantity=data.reduce((accumulator,value,index)=>{
        return accumulator+=value.productQuantity
       },0)
  };
  //total products value is calculated and stored
  let value=0;
  if(data){
       value=data.reduce((accumulator,value,index)=>{
        return accumulator+=(value.productPrice*value.productQuantity)
       },0)
  }
  //function to delete product from the database and the response is handled
  async function deleteFunction(productName){
    await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if(result.isConfirmed) {
        const object={
          productName,
          id:localStorage.getItem("id")
        };
        await deleteProduct(object).then((response)=>{console.log(response.message)}).catch((response)=>console.log(response.message));
        await Swal.fire({
          title: "Deleted!",
          text: "Product has been deleted",
          icon: "success"
        });
      }
    });
    //to refetch data after deleting
    setLoad(1);
  }
  //function to edit product
  function editFunction(name,quantity,price){
    setProductName(name);
    setProductQuantity(quantity);
    setProductPrice(price);
    navigate("/editproduct");
  }
  //function to add product to cart
  async function addToCartFunction(name,quantity,price){
    //preventing from adding same product in cart multiple times
        const a=cartObj.find((value,index)=>{
          if(value.productName===name){
            return "yes"
          }
        });
        if(!a){

          await Swal.fire({
            title: `Available Quantity - ${quantity}`,
            input: "number",
            inputAttributes: {
              autocapitalize: "off",
              max:quantity,
              min:1
            },
            showCancelButton: true,
            confirmButtonText: "Add To Cart",
            showLoaderOnConfirm: true,
            preConfirm: async (customQuantity) => {
              let quantity=!customQuantity?1:customQuantity;
                const obj={
                  description:name,
                  quantity,
                  price,
                  taxRate:18
                };
               cartObj.push(obj);
            },
          }).then(async(result) => {
            if (result.isConfirmed) {
              setCartCount(cartCount+1);
              await Swal.fire("Product Added To Cart Successfully", "", "success");
            }
          });
        }
        
 }


  //useEffect is used to make changes when the page is opened
  useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/")
    };
    setProductName("");
    setProductQuantity("");
    setProductPrice("");
    //fetching data
    const object={
      id:localStorage.getItem("id")
    }
    //function to get all data from the database is called and response is handled
    getAllData(object).then(async(response)=>{
      if(response.message==="all product fetched Successfully"){
          const object=response.data;
          object.sort((a,b)=>{
              const nameA=a.productName.toLowerCase();
              const nameB=b.productName.toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
          })
          setData(object);
      }else{
          console.log(response.message);
      }
      }).catch((response)=>{console.log(response.message)}); 
      console.log("useEffect");  
  },[]);

  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/")
  };
  setProductName("");
  setProductQuantity("");
  setProductPrice("");

  if(load===1){
    //fetching data
  const object={
    id:localStorage.getItem("id")
  }
  //function to get all data from the database is called and response is handled
  getAllData(object).then(async(response)=>{
    if(response.message==="all product fetched Successfully"){
        const object=response.data;
        object.sort((a,b)=>{
            const nameA=a.productName.toLowerCase();
            const nameB=b.productName.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        setData(object);
    }else{
        console.log(response.message);
    }
    }).catch((response)=>{console.log(response.message)});

    console.log("extra useEffect");
    setLoad(2);
  }
},[load===1])

    return(
      
        <div className="dashboard-section text-center">
          
            <WorkSpace>

  <div className="stats stats-vertical shadow lg:stats-horizontal mt-4 mb-4">
  
  <div className="stat">
    <div className="stat-title">Total Products</div>
    <div className="stat-value ">{data?data.length:0}</div>
    <div className="stat-desc">(number of products)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Total Quantity</div>
    <div className="stat-value ">{quantity}</div>
    <div className="stat-desc">(number of quantity)</div>
  </div>
  
  <div className="stat">
  <div className="stat-title">Total Value</div>
    <div className="stat-value ">{value}</div>
    <div className="stat-desc">(value of stock)</div>
  </div>
  
</div>
                       
            <hr/>
            
            <div className="overflow-x-auto">
  <table className="table table-xs background-set text-center text-neutral">
    <thead>
      <tr>
        <th></th> 
        <th>Product Name</th> 
        <th>Quantity In Stock</th> 
        <th>Product Price</th> 
        <th>Action</th> 
        <th>Action</th>
        <th>Buy</th> 
      </tr>
    </thead> 
      {data && data?.map((value,index)=>(
         <tbody className="font-bold" key={index}>
        <tr>
        <th>{index+1}</th> 
        <td className="uppercase">{value.productName}</td> 
        <td>{value.productQuantity}</td> 
        <td>{value.productPrice}</td> 
        <td className="cursor-pointer" onClick={()=>editFunction(value.productName,value.productQuantity,value.productPrice)}>EDIT</td> 
        <td className="cursor-pointer" onClick={()=>deleteFunction(value.productName)}>DELETE</td> 
        <td className="cursor-pointer uppercase" onClick={()=>addToCartFunction(value.productName,value.productQuantity,value.productPrice)}>Add to Cart</td> 
      </tr>
      </tbody> 
      ))}
    
  </table>
  
</div>
          </WorkSpace>
</div>
    )
}
