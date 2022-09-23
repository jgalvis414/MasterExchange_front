import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Navbar5 from "./NavBarChakra";
import NavBarLogged from "./NavBarLogged";


const NavBarControl = () => {
    const { authenticated, login } = useContext(AuthContext);

    if (!authenticated) {
        return <Navbar5 />
    } else {return <NavBarLogged />}


}
export default NavBarControl;