import {useEffect, useState } from "react";
import { Button } from "./Button"
import axios from "axios";
import {useNavigate} from "react-router-dom"
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

export const Users = () => {
    const [users, setaUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect (()=> {
        axios.get(`${BACKEND_API_URL}/api/v1/user/bulk?filter=` + filter)
        .then (response => {
            setaUsers(response.data.user)
        })
    }, [filter])

    return <>
    <div className="font-light mt-2 text-md ml-1">
     
    </div>
    <div className="my-2 ml-1">
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} type="text" placeholder="search by username" className="w-3/5 px-2 py-1 border rounded-xl border-indigo-200"></input>
    </div>
    <div>
        {users.map(user => <User user={user} />)}
    </div>
</>
}

function User({user}) {
  const navigate = useNavigate();

  return <div className="flex border justify-stretch px-4 py-4">
      <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-4">
              <div className="flex flex-col justify-center h-full text-lg font-bold font-mono">
                  {user.firstName[0]}
              </div>
          </div>
          <div className="flex flex-col justify-center h-full font-sans font-semibold">
              <div>
                  {user.firstName} {user.lastName}
              </div>
          </div>
      </div>

      <div className="flex flex-col justify-center px-3 ">
          <Button onClick={(e) => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }} label={"Send"} />
      </div>
  </div>
}