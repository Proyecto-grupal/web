import SearchBarView from "./SearchBarView";

// import { useState } from "react";
// import { useDispatch } from "react-redux";

export default function SearchBar() {

    // const [name, setName] = useState(""); 
    
    // const dispatch = useDispatch(action);

    // const handleChangeSearchBar = (e) => {
    //     e.preventDefault();
    //     console.log(name);
    //     setName(e.target.value);
    //   };
    
    //   const handleSubmitSearchBar = (e) => {
    //     e.preventDefault();
    //     dispatch(getRecipeByName(name));
    //     //Esto es para borrar el imput despues de la busqueda
    //     setName("");
    //   };

    return (
        <div>
            <SearchBarView />
        </div>
    )
}
