import React, { useState, useEffect } from "react";

function ColorPicker(){
    
    useEffect(() => {
    document.body.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    document.body.style.fontSize = "2em";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.marginTop = "20px";
  }, []);

    const [color, setColor]= useState("#ffffffff"); 

    const changeColor = (event) => {
        setColor(event.target.value);
  
        }
    const GetBrightness=(event) => {
        const hex = color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness;
    }
     function getTextColor(hexColor) {
    return GetBrightness(hexColor) < 128 ? "white" : "black";
  }
    return(
        <div className="Container-Color" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
            padding: "20px 60px",
            borderRadius: "10px"
            
        }}>
            <h1 style={{marginTop:10,
                        marginBottom:20,
                        }}>Color Picker</h1>
            <div className="color-picker" style={{ 
                backgroundColor: color,
                 padding:"50px 20px 50px 20px" ,
                  marginBottom:20,
                   marginTop:10,
                   borderRadius:15}}> 
                <p style={{
                    color: getTextColor(color),
                }}>Selected Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={changeColor} style={{
                width: "100px",
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                cursor: "pointer",
                marginTop:20
            }}/>
        </div>
    );
}
//More detail in ColorPickerReadme file
