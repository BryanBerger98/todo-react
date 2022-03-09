import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import EditProfile from "../components/EditProfile";

function Account() {

    const { currentUser } = useContext(AuthContext);

    return(
        <div className="container py-5">
            <h1 className="display-5 text-primary mb-5">Account</h1>
            <EditProfile currentUser={currentUser} />
        </div>
    )

}

export default Account;