import bootstrapBundle from "bootstrap/dist/js/bootstrap.bundle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

function EditProfileEmail() {

    const { updateCurrentUserEmail } = useContext(AuthContext);

    const [emailForm, setEmailForm] = useState({
        email: '',
        password: ''
    });

    const [emailFormModal, setEmailFormModal]= useState(null);

    useEffect(() => {
        setEmailFormModal(new bootstrapBundle.Modal(document.getElementById('editProfileEmailModal')));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCurrentUserEmail(emailForm.email, emailForm.password)
        .then((user) => {
            emailFormModal.hide();
        }).catch(console.error);
    }

    const handleChange = (event) => {
        const newEmailForm = {...emailForm};
        newEmailForm[event.target.name] = event.target.value;
        setEmailForm(newEmailForm);
    }

    const onEmailFormModal = () => {
        emailFormModal.show();
    }

    return(
        <>
        <button className="btn btn-link" type="button" onClick={onEmailFormModal}>Edit</button>
        <div className="modal fade" id="editProfileEmailModal" tabIndex="-1" aria-labelledby="editProfileEmailModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content" onSubmit={handleSubmit} onChange={handleChange}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="editProfileUsernameTitle">Email address</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group mb-3">
                            <label htmlFor="editEmailInput">New email address</label>
                            <input type="email" id="editEmailInput" name="email" className="form-control" placeholder="example@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="editEmailPasswordInput">Password</label>
                            <input type="password" id="editEmailPasswordInput" name="password" className="form-control" placeholder="Your password" required />
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
    );

}

export default EditProfileEmail;