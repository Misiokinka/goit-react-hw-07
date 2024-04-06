
import css from "./SearchBar.module.css";
import { changeFilter } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";


const SearchBar = () => {

    const dispatch = useDispatch();
    const handleChange = e => {
        const searchItem = e.target.value;
        dispatch(changeFilter(searchItem));
    };

    return (
        <div>
            <p className={css.searchText}>Find contacts by name</p>
            <input
                className={css.inputSearch}
                type="text"
                name="searchItem"
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
