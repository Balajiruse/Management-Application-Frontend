
import { API } from "./api";

//function to register user
export async function registerUser(object){
    try{
        const res=await fetch(`${API}/register`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error registering user",error);
    }
}

//function to login user
export async function loginUser(object){
    try{
        const res=await fetch(`${API}/login`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error login user",error);
    }
}

//function to forgot password 
export async function forgotPassword(object){
    try{
        const res=await fetch(`${API}/forgot`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error forgot password",error);
    }
}
//function to reset password
export async function resetPassword(details,id){
    try{
        const res=await fetch(`${API}/reset/${id}`,{
            method:"POST",  
            body:JSON.stringify(details), 
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error reset password",error);
    }
}
//function to activate account
export async function activateAccount(id){
    try{
        const res=await fetch(`${API}/activation/${id}`,{
            method:"GET",  
            headers:{
                "Content-type":"application/json",
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error activating account",error);
    }
}
//function to get all data
export async function getAllData(id){
    try{
        const res=await fetch(`${API}/allProduct`,{
            method:"POST",  
            body:JSON.stringify(id), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error getting all data",error);
    }
}
//function to add product
export async function addProduct(object){
    try{
        const res=await fetch(`${API}/addProduct`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error adding product",error);
    }
}
//function to delete Product
export async function deleteProduct(object){
    try{
        const res=await fetch(`${API}/deleteProduct`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error deleting product",error);
    }
}
//function to edit product
export async function editProduct(object){
    try{
        const res=await fetch(`${API}/editProduct`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error deleting product",error);
    }
}
//function to decrease quantity after billing for specific products
export async function billProduct(object){
    try{
        const res=await fetch(`${API}/billProduct`,{
            method:"POST",  
            body:JSON.stringify(object), 
            headers:{
                "Content-type":"application/json",
                "x-auth-token":localStorage.getItem("token")
            },
        })
        const data=await res.json();
        return data;
    }catch(error){
           console.log("error deleting product",error);
    }
}
