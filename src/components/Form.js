import React, {useState} from "react";


const Form = (props) => {

    const {boxList, setBoxList} = props;
    const [color, setColor] = useState();

    const colorHandler = (e) =>{
        e.preventDefault(e);

        setBoxList([...boxList, color])
    }

    return (
        <form onSubmit={colorHandler}>
            <label>Color</label>
            <input onChange = {(e) => setColor(e.target.value)}></input>
            <button onSubmit = {(e) => setBoxList(e.target.value)}>Add</button>
        </form>
    )


}

export default Form;