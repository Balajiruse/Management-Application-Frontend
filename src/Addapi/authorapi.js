
const Api="https://655def329f1e1093c59a318d.mockapi.io/Author";

export async function Getallauthor(){
    const res=await fetch(Api,{
        method:"Get",
    });
    const data=await res.json();
    return data
}

export async function Deleteauthor(id){
    const res=await  fetch(`${Api}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
}

export async function Addauthor(newauthor){
    const res = await fetch(`${Api}`, {
        method: "POST",
        body: JSON.stringify(newauthor),
        headers: {
          "Content-type": "application/json",
        },
        });
 const data = await res.json();
 return data; 
}

export async function Updateauthor(id,edited){
    const res = await fetch(`${Api}/${id}`, {
        method: "PUT",
        body: JSON.stringify(edited),
        headers: {
          "Content-type": "application/json",
        },
      });
   const data = await res.json();
   return data;
    
}