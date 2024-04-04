
import { useContext, useEffect } from "react";
import { AppCtx } from "../context/Appcontext";
import { billProduct } from "../Helpers/helper";
import easyinvoice from 'easyinvoice';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart(){

  //required states is imported using useContext
  const {cartObj,setCartObj,cartCount,setCartCount,totalPrice,setTotalPrice,loading,setLoading}=useContext(AppCtx);
  //useNavigate is used to navigate between pages
  const navigate=useNavigate();

  //function to remove product from cart
  async function removeFunction(name){
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then(async(result) => {
      if(result.isConfirmed) {
            const filterData=cartObj.filter((value,index)=>value.description!=name);
            await setCartObj(filterData);
            await setCartCount(cartCount-1);
            if(filterData.length!=0){
              const price=filterData.reduce((accumulator,value,index)=>{
                return accumulator+=(value.quantity*value.price)
            },0)
            await setTotalPrice(price);
            }else{
              setTotalPrice(0);
            }
        await Swal.fire({
          title: "Removed!",
          text: "Product has been removed from cart",
          icon: "success"
        });
      }
    });
  }

     
  //function to reduce quantity from the database
  async function billProductFunction(){
    setLoading("on");
    const object={
      id:localStorage.getItem("id"),
      billData:cartObj
    };
    await billProduct(object).then((response)=>console.log(response.message)).catch((response)=>console.log(response.message));

    var data = {
      apiKey: "free", // Please register to receive a production apiKey: https://app.budgetinvoice.com/register
      mode: "development", // Production or development, defaults to production
      products:cartObj
    };
  
    await easyinvoice.createInvoice(data,function(result){
      easyinvoice.download("Bill.pdf",result.pdf)
    })
    await setLoading("off");
    setTimeout(()=>{
      navigate("/dashboard");
      setCartObj([]);
      setCartCount(0);
    },2000)
  }

  //function to pay online using razorpay and to reduce quantity in the database
  function payOnlineFunction(){
    Swal.fire({
      title: "Pay via Razorpay",
      text: "Note : You are paying imaginary money as this is testing process. You Don't need to enter correct card details and You Don't need to enter correct otp",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Pay"
    }).then(async(result) => {
      if(result.isConfirmed) {
        var options = {
          key: "rzp_test_01MKaZwOfN8NBN",
          key_secret:"bhq3r1dmARTHUgp9O3ZXws5u",
          amount: totalPrice *100,
          currency:"INR",
          name:"IMBA",
          description:"For testing purpose",
          handler:async function(response){
            const object={
              id:localStorage.getItem("id"),
              billData:cartObj
            };
            await billProduct(object).then((response)=>console.log(response.message)).catch((response)=>console.log(response.message));
            await Swal.fire({
              title: "Payment Received",
              text: `Payment ID : ${response.razorpay_payment_id}`,
              icon: "success"
            });
            setTimeout(()=>{
              navigate("/dashboard");
              setCartObj([]);
              setCartCount(0);
            },500)
          },
          prefill: {
            name:"Fabian Raja Fernando",
            email:"fabiraja21052002@gmail.com",
            contact:"9790873004"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    });
}
//useEffect is used to make changes when the page is loaded
  useEffect(()=>{
        if(cartObj.length!=0){
          const price=cartObj.reduce((accumulator,value,index)=>{
            return accumulator+=(value.quantity*value.price)
           },0);
           setTotalPrice(price);
        }else{
          setTotalPrice(0)
        }
        setLoading("off")
  },[])
  
  
  return(
        <div className="cart-section text-center background-set">
  <h1 className="font-bold text-xl mt-10 mb-10">IN CART</h1>
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th></th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    {cartObj?cartObj?.map((value,index)=>(
      <tbody key={index}>
      <tr className="font-bold text-center">
        <th>{index+1}</th>
        <td className="uppercase">{value.description}</td>
        <td>{value.price}</td>
        <td>{value.quantity}</td>
        <td className="cursor-pointer uppercase" onClick={()=>removeFunction(value.description)}>Remove</td>
      </tr>
    </tbody>
    )):""}
  </table>
</div>
<h1 className="font-bold mt-5 uppercase">Total Price - {totalPrice}</h1>
{totalPrice!=0?(
  <div>
  <div className="tooltip tooltip tooltip-right" data-tip="Pay In Cash">
  <button className="btn btn-neutral mt-5 mb-1" onClick={()=>billProductFunction()}>{loading==="on"?<span className="loading loading-ball loading-xs"></span>:"Get Bill"}</button><br/>
  </div>
  <h3>or</h3> 
  <div className="tooltip tooltip tooltip-right" data-tip="Via Razorpay">
    <button className="btn btn-neutral mt-2 mb-3" onClick={()=>payOnlineFunction()}>Pay Online</button>
  </div>
  </div>
):""}

</div>
    )
}
