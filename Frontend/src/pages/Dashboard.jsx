import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

export const Dashboard = () => {
  //TODO: showing user icon
  const [money, setMoney] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get(`${BACKEND_API_URL}/api/v1/account/balance`, {
      headers: { 
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      setMoney(response.data.balance);
      setUser(response.data.user);
    })
    .catch(error => {
      console.error("Error fetching balance:", error);
    });
  }, []);

  return (
    <div className="bg-indigo-50">
      <Appbar value={user} />
      <div>
        <Balance value={money} />
        <Users />
      </div>
    </div>
  );
};