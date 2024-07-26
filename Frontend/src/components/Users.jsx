import {useEffect, useState } from "react";
import { Button } from "./Button"
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const Users = () => {
    const [users, setaUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect (()=> {
        axios.get("http://localhost:8080/api/users/bulk?filter=" + filter)
        .then (response => {
            setaUsers(response.data.user)
        })
    }, [filter])

    return <>
        <div>
          User
        </div>
        <div>
          <input onChange={(e) => {
            setFilter(e.target.value)
          }}></input>
        </div>
        <div>
           {users.map(user => <Users user={user} />)}
        </div>
    </>
}