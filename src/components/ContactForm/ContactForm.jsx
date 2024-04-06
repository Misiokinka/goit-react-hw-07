
import css from "./ContactForm.module.css"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { apiAddContact } from "../../redux/contactsOps";


const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Username is Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Phone number is Required"),

});

const INITIAL_FORM_DATA = {
    name: "",
    number: ""
}

const ContactForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (data, formActions) => {
        dispatch(apiAddContact({ ...data, id: nanoid() }))
        formActions.resetForm()
    }

    return (

        <Formik
            validationSchema={ContactSchema}
            initialValues={INITIAL_FORM_DATA}
            onSubmit={handleSubmit}>
            <Form className={css.formContact}>

                <label className={css.labelContac}>
                    <span className={css.formContactText}>Name</span>
                    <Field className={css.formInputContact} type="text" name="name" />
                  
                </label>

                <label className={css.labelContac}>
                    <span className={css.formContactText}>Number</span>
                    <Field className={css.formInputContact} type="number" name="number" />
                
                </label>

                <button className={css.submitBtn} type="submit" title="Add contact" aria-label="Add contact">Add contact</button>

            </Form>
        </Formik>



    )
}

export default ContactForm