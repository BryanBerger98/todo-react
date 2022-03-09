import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

function EditProfileUsername() {

    const { updateCurrentUserName } = useContext(AuthContext);

    const [usernameForm, setUsernameForm] = useState({
        username: ''
    });

    const [usernameFormModal, setUsernameFormModal]= useState(null);

    useEffect(() => {
        setUsernameFormModal(new bootstrapBundle.Modal(document.getElementById('editProfileUsernameModal')));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCurrentUserName(usernameForm.username)
        .then((user) => {
            usernameFormModal.hide();
        }).catch(console.error);
    }

    const handleChange = (event) => {
        const newUsernameForm = {...usernameForm};
        newUsernameForm[event.target.name] = event.target.value;
        setUsernameForm(newUsernameForm);
    }

    const openUsernameFormModal = () => {
        usernameFormModal.show();
    }

    return (
        <>
            <button className="btn btn-link" type="button" onClick={openUsernameFormModal}>Edit</button>
            <div className="modal fade" id="editProfileUsernameModal" tabIndex="-1" aria-labelledby="editProfileUsernameModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={handleSubmit} onChange={handleChange}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="editProfileUsernameTitle">Username</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="editUsernameInput">Username</label>
                            <input type="text" id="editUsernameInput" name="username" className="form-control" />
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditProfileUsername;