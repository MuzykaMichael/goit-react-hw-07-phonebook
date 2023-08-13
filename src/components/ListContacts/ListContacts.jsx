import { ContactsList } from "./ListContacts.styled";
import { Contact } from "components/Contact/Contact";
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ListContacts = () =>{
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts)
    const contactsDeleteHandler = idToDelete => {
        dispatch(deleteContact(idToDelete))
      }
        return(
            <ContactsList>
                {contacts.map(({name,number,id}) =>{
                    return(
                        <Contact
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={contactsDeleteHandler}
                        />
                    );
                })}
            </ContactsList>
        )
}


