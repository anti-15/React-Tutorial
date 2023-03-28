import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);
    const style = {
        width: 120,
        height: 60,
        display: "block",
        margin: "auto",
        fontWidth: "bold",
        borderRadius: 9999,
        border: "none",
        background: isSelected ? "pink" : ""

    }
    const clickHandler = () => setIsSelected(prev => !prev);

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{textAlign: "center"}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
