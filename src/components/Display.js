import React from "react";


const Display = (props) => {

    const {boxList} = props;


    return(
        <div>
            <h1>Color Queue</h1>
            {
                boxList.map((color, index) => {
                    return(
                        <div key={index} style={{
                            display: "inline-block",
                            margin: "10px",
                            height: "50px",
                            width: "50px",
                            backgroundColor: color
                        }}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display;