const Api="https://654ca99777200d6ba8592d4e.mockapi.io/users";

export async function GetallUsers(){
    const res=await fetch(Api,{
        method:"Get",
    });
    const data=await res.json();
    return data
}

export async function DeleteUsers(id){
    const res=await  fetch(`${Api}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
}

export async function Adduser(newuser){
    const res = await fetch(`${Api}`, {
        method: "POST",
        body: JSON.stringify(newuser),
        headers: {
          "Content-type": "application/json",
        },
        });
 const data = await res.json();
 return data; 
}

export async function UpdateUsers(id,edited){
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
