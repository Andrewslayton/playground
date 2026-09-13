"use client"
import { useState } from 'react';

 const users = [
  { id: 1, name: "andrew,", role: "engineer" },
  { id: 2, name: "Jesica,", role: "Designer" },
  { id: 3, name: "Sarah,", role: "Manager" },
  { id: 4, name: "Lily,", role: "engineer" },
];

export const UserList = () => {
   const  [search, setSearch] = useState("")

    const filteredList = 
        users.filter((user => user.name.toLowerCase().includes(search.toLowerCase())))

    return (
        <>
        <input
        onChange={(event) =>
            {
                setSearch(event?.target.value)
            }}
            
            />
        <div>

        {filteredList.map(user=> (

            <div key= {user.id}>
                {user.name} {user.role}
            </div>
            ))}
        </div>
                </>
        
    );
}