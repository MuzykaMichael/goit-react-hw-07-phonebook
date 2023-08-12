import propTypes from 'prop-types'
import {ContactLi,BtnDelete} from './Contact.styled'


export const Contact = ({name,number,id,onDeleteContact}) =>{
    const deleteContact = id => {
        onDeleteContact(id);
    };


    return(
        <ContactLi>
            <p>
                {name}:{number}
            </p>
            <BtnDelete
            type="button"
            onClick={()=>{
                deleteContact(id);
            }}
            >Delete</BtnDelete>
        </ContactLi>
    )



}


Contact.propTypes = {
    id: propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    number:propTypes.string.isRequired,
    onDeleteContact:propTypes.func.isRequired,
}