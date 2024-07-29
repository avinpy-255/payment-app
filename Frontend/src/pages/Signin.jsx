import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; // Import useState for managing form data
import axios from 'axios'
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

export const Signin = () => {
    const [userName, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate = useNavigate(); 

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            `${BACKEND_API_URL}/api/v1/user/signin`,
            { userName, password },
            
          );
    
          console.log('Login successful:', response.data); 
          localStorage.setItem('token', response.data.token); 
          navigate("/Dashboard");
        } catch (error) {
          console.error('Login error:', error); 
      
        }
      };

      return (
        <div className="bg-violet-500 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <form className="rounded-lg bg-indigo-200 w-80 text-center p-2 h-max px-4" onSubmit={handleSignIn}>
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Sign in to access your account"} />
                    <InputBox
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        placeholder="alexcole@gmail.com"
                        label={"Email"}
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="12345678"
                        label={"Password"}
                    />
                    <Button type="submit" label={"Sign In"} />
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </form>
            </div>
        </div>
    );
};