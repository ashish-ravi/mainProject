import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";



import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";



import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-twilight";




import fire from "../../fire";
import NavBar from "../../component/navbar";
import {useDispatch, useSelector} from "react-redux";
import { Button, Typography } from "@material-ui/core";



const CodeCollab = () => {
    const users = useSelector((state) => state.usrs);
    
    const userName = users.displayName;
    
    const counter = useSelector((state)=>state.counter)

    const [lang,setLang] = useState("javascript");

    const [thm, setTheme] = useState("monokai")

    const[code,setCode] = useState("");

    useEffect(() => {
        readFromDatabase();
    }, []);
    
    const readFromDatabase = () => {
        fire.database().ref("/code").on("value",(snapshot)=>{
            setCode(snapshot.val().value)
            console.log(snapshot.val());
        });
    };


    const onChange = (val) => {
        console.log(val);
        fire.database().ref("/code").set({
            value: val,
            lang: "javascript",
        });
    };

    const jsClick = () => {
        setLang("javascript")
    }
    const pyClick = () => {
        setLang("python")
    }
    const htClick = () => {
        setLang("html")
    }
    const javaClick = () => {
        setLang("java")
    }


    const mnkClick = () => {
        setTheme("monokai")
    }
    const gitClick = () => {
        setTheme("github")
    }
    const sdClick = () => {
        setTheme("solarized_dark")
    }
    const twClick = () => {
        setTheme("twilight")
    }



    return(
        <>
        <NavBar />
        <p>{counter}</p>
        <div style={styles.buttonStyle}>
            <Button variant="contained" color="primary" onClick={jsClick}>JavaScript</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary"  onClick={pyClick}>Python</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary"  onClick={htClick}>HTML</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={javaClick}>JAVA</Button> &nbsp;&nbsp;&nbsp;&nbsp;

            

        </div>
        <br />
        
        <div style={styles.buttonStyle}>
            <Button variant="contained" color="primary" onClick={mnkClick}>monokai</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={gitClick}>github</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={sdClick}>solarized_dark</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={twClick}>twilight</Button> &nbsp;&nbsp;&nbsp;&nbsp;

            

        </div>
       
        
        <div style={styles.root}>
            <h2>Code Collab</h2>
            <Typography>Current user: {userName}</Typography>
            <AceEditor
                mode={lang}
                theme={thm}
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                value={code}
                editorProps={{ $blockScrolling: true }}
            />
        </div>
       

        </>
    );
};

const styles = {
    root:{
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        flex:1,
        alignItems: "center",
    },
    buttonStyle:{
        display: "flex",
        flex: 3,
        flexDirection: "row",
        justifyContent: "center"
        
    }
}

export default CodeCollab;