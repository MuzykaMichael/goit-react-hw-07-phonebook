import { useState } from "react";
import { Forma, Label, Input, BtnSubmit } from "./Form.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { selectContacts } from "redux/selectors";

export const Form =()=>{
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    const formChangeName = evt => {
        const {value} = evt.target;
        setName(value)
    };
    const formChangeNumber = evt => {
        const {value} = evt.target;
        setNumber(value);
    }
    const onSubmit = newContact =>{
        const sameContact = contacts.items.find(
            ({name,number})=>name.toLowerCase()===newContact.name.toLowerCase() || number===newContact.number
          );
          if (sameContact) {
            alert(`${newContact.name} or ${newContact.number} is already exists.`)
            return
          }
          dispatch(addContact(newContact))
    }
    const formSubmit = evt =>{
        evt.preventDefault();
        const contact = {name,number};
        onSubmit(contact);
        clear();
    }

    const clear = () => {
        setName("");
        setNumber("");
    };

        return(
            <Forma onSubmit={formSubmit}>
                <Label>Name
                    <Input
                    type="text"
                    name="name"
                    id="input-name"
                    value={name}
                    required
                    onChange={formChangeName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    />
                </Label>
                <Label>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    id="input-phone"
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    required
                    onChange={formChangeNumber}
                    value={number}
                    />
                </Label>
                <BtnSubmit
                type="submit"
                >Add Contact</BtnSubmit>
            </Forma>
        )
}

