import React, {useState} from "react";


const Form = (props) => {

    const {boxList, setBoxList} = props;
    const [color, setColor] = useState();
    const [size, setSize] = useState(50);

    const colorHandler = (e) =>{
        e.preventDefault(e);

        setBoxList([...boxList, {
            color: color,
            size: size + "px"
        } 
        ]);
        setColor("");
        setSize(50);
    }

    return (
        <form onSubmit={colorHandler}>
            <div>
                <label>Color</label>
                <input type="text" name="color" value={color} onChange = {(e) => setColor(e.target.value)}></input>
            </div>
            <div>
                <label>Width and Height</label>
                <input type="text" name="size" value={size} onChange = {(e) => setSize(e.target.value)}></input>
            </div>
            <button>Add</button>
        </form>
    )


}

export default Form;