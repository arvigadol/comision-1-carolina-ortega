import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

const HomePage = () => {
  const { auth } = useContext(AuthContext);
    return (    
    <div>HomePage {auth.user.email}</div>
  )
}
export default HomePage;