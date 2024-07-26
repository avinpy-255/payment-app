import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return <div className="bg-violet-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-indigo-200 w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <SubHeading label={"signin to access your account"} />
            <InputBox placeholder="xyz@gmail.com" label={"Email"} />
            <InputBox placeholder="minimum 8 char." label={"Password"} />
                <div className="pt-4">
                    <Button label={"Sign in"}/>
                </div>
                <BottomWarning label={"don't have account"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}