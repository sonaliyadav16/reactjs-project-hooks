import React,{useState} from "react";


const App = () => {
    const purple = "#8e44ad";
    const [bg,setBg] = useState(purple);
    const [name,setName] = useState("click me")

    const bgChange = () => {
    // console.log("clicked");
     let newBg = "#34495e";
     setBg(newBg);
     setName("Ouch!!😖")
    };
    const bgBack = () => {
        setBg(purple);
        setName("Ayyo!!😡")
    }
    return(
        <>
        <div className="container-fluid" style={ { backgroundColor:bg}}>
            <button style={{fontSize:"100px"}}onMouseEnter={bgChange} onMouseLeave={bgBack}>
                 {name}
            </button>
        </div>

        </>
    );
}


export default App;