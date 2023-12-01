
const Api="https://654f830b358230d8f0cd6748.mockapi.io/books";

export async function Getallbooks(){
    const res=await fetch(Api,{
        method:"Get",
    });
    const data=await res.json();
    return data
}

export async function Deletebooks(id){
    const res=await  fetch(`${Api}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
}

export async function Addbook(newbook){
    const res = await fetch(`${Api}`, {
        method: "POST",
        body: JSON.stringify(newbook),
        headers: {
          "Content-type": "application/json",
        },
        });
 const data = await res.json();
 return data; 
}

export async function Updatebooks(id,edited){
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
