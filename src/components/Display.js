import React from "react";


const Display = (props) => {

    const {boxList} = props;


    return(
        <div>
            <h1>Color Queue</h1>
            {
                boxList.map((box, index) => {
                    return(
                        <div key={index} style={{
                            display: "inline-block",
                            margin: "10px",
                            height: box.size,
                            width: box.size,
                            backgroundColor: box.color
                        }}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display;