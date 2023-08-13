import { Input, Label } from "components/Form/Form.styled";
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filtration = () =>{
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const handleChange = evt =>{
        const {value} = evt.target;
        dispatch(addFilter(value));
    };
        return(
            <>
            <Label>Find Contacts By Name
                <Input
                type="text"
                id="input-search"
                onChange={handleChange}
                name="filtration"
                value={filter.filter}
                />
            </Label>
            </>
        )
}
