import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios";



export const Signup = () => {
    const [firstName, setFirstName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [userName, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate = useNavigate()


    return <div className="bg-violet-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div  className="rounded-lg bg-indigo-200 w-80 text-center p-2 h-max px-4">
                <Heading label={"Sing Up"} />
                <SubHeading label={"create account"}/>
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder="Alex" label={"First Name"}/>
                <InputBox onChange={e => {
                    setLastName(e.target.value);
                }} placeholder="Cole" label={"Last Name"}/>
                <InputBox onChange={e => {
                    setUserName(e.target.value);
                }} placeholder="alexcole@gmail.com" label={"Email"}/>
                <InputBox onChange={e => {
                    setPassword(e.target.value);
                }} placeholder="12345678" label={"Password"}/>
                <div className="pt-4">
                 <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              userName,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")}} label={"Sign up"}/>
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>
}