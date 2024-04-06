import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contactsOps";


const Contact = ({ contact }) => {

    const dispatch = useDispatch()

    const handleDeleteContact = () => {

        dispatch(apiDeleteContact(contact.id))

    }

    return (
        <li className={css.contactsBlock}>
            <div className={css.contactsItems}>
                <span><FaUser size={11} />
                    <p className={css.contactItem}> {contact.name}</p>
                </span>
                <span><FaPhone size={11} />
                    <p className={css.contactItem}>{contact.number}</p>
                </span>
            </div>
            <button className={css.btnDeleteContact} onClick={handleDeleteContact}>Delete</button>

        </li>

    )
}

export default Contact;
