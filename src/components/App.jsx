import { Form } from "./Form/Form";
import { ListContacts } from "./ListContacts/ListContacts";
import { Filtration } from "./Filtration/Filtration";
import {Container,
  FirstTitle,
  SecondTitle,
  Breaker,
  Message,} from './App.styled';
import { useSelector } from "react-redux";
import { getContacts, selectVisibleContacts } from "redux/selectors";

export const App =()=> {
  const contacts = useSelector(getContacts)
  const filteredContacts = useSelector(selectVisibleContacts)
    return(
      <Container>
        <FirstTitle>Phonebook</FirstTitle>
        <Form />
        <SecondTitle>Contacts</SecondTitle>
        <Breaker>
          {contacts.contacts.length > 0 ? (
            <>
              <Filtration/>
              {filteredContacts.length > 0?(
                <ListContacts/>
            
          ):(
            <Message>
              Sorry, we didn't find any contacts matching your query
            </Message>
          )}
          </>
          ):(
            <Message>You don't have any contacts yet</Message>
          )}
        </Breaker>
      </Container>
    );
};