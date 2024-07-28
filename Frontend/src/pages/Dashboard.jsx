import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div  className="bg-indigo-50">
    <Appbar />
        <div>
          <Balance value={"1000"} />
          <Users/>
        </div>
    </div>
}