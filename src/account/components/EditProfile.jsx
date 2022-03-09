import EditProfileEmail from "./EditProfileEmail";
import EditProfileUsername from "./EditProfileUsername";

function EditProfile(props) {

    return(
        <div className="bg-white p-5 shadow rounded-3">
            <h2 className="display-6 mb-5">Profile</h2>
            <div className="d-flex">
                <p className="my-auto">Username</p>
                <p className="my-auto ms-auto">
                    { props.currentUser && props.currentUser.displayName ?
                        <span>{props.currentUser.displayName}</span>
                        : <span className="fst-italic">No name</span>
                    }
                </p>
                <EditProfileUsername className='ms-2' />
            </div>
            <hr className="my-2 bg-dark" />
            <div className="d-flex">
                <p className="my-auto">Email</p>
                <p className="my-auto ms-auto">
                    { props.currentUser ? <span>{ props.currentUser.email }</span> : null}
                </p>
                <EditProfileEmail className='ms-2' />
            </div>
        </div>
    )

}

export default EditProfile;