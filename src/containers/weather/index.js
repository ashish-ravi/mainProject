import { Button, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React,{useState} from "react";
import NavBar from "../../component/navbar";

const Weather = (props) => {
    const [message,setMessage] = useState("");

    const [res, setRes] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showc, setC] = useState(false);
    const [showf, setF] = useState(false);


    const [showcel, setShowCel] = useState(false);
    const [showfar, setShowFar] = useState(false);

    


    const handleChange = (e) => {
        //  console.log(e.target.value);
         let val = e.target.value;
         setMessage(val);
         
    }

    // const rsult = (data) => {
    //     // console.log(data)
    //     var test = data;
    //     console.log(test.main.temp)
    //     setTemp(test.main.temp);
    //     console.log(temp);
    // }

    const handleSearch = async () => {
        const temp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${message}&appid=bfef5aa5d52966dc9f5e68e46784ffa0`)
            .then((response) => response.json())
            .then((data) => setRes(data.main));
        console.log(res);
        // console.log(res.main);
        // console.log(res1.humidity);
        // console.log(res.main.humidity);
        // setShowCel(false);
        // setShowFar(false);
        setC(true);
        
        
    }

    // const cel = () => {
    //     return(
    //         <div>
    //             <h2>{res.name} </h2>
    //         <Typography>Temperature: {res.main.temp} <span>&#176;</span>C </Typography>
    //         <Typography>Feels Like: {res.main.feels_like} <span>&#176;</span>C </Typography>
    //         <Typography>Humidity: {res.main.humidity}% </Typography>
    //         <Typography>Pressure: {res.main.pressure} </Typography>
    //         <Typography>MAX Temp: {res.main.temp_max} <span>&#176;</span>C </Typography>
    //         <Typography>MIN Temp: {res.main.temp_min} <span>&#176;</span>C </Typography>
    //         <Typography>Wind Speed: {res.wind.speed} km/h </Typography> 
    //         </div>
    //     )
    // }

    // const celciusDisp = () => {
    //     setShowFar(false)

    //     setShowCel(true)

                        
    
        
    // }

    // const farDisp = () => {
    //     setShowCel(false)
    //     setShowFar(true)
    //     // setShowCel(false)
        
                        
    
        
    // }

   

    const cRes = () => {
        setF(false)
        setC(true)
    }
    const fRes = () => {
        setC(false)
        setF(true)
    }
    const Result = () => {
        console.log(message);
        const cname = message;
        return(
            <div>
                
    
                <br />
                <h2>{cname}</h2>
                
                <Typography>Temperature: {res.temp} <span>&#176;</span>F </Typography>
                <Typography>Humidity: {res.humidity}% </Typography>
    
                <Typography>Feels Like: {res.feels_like} <span>&#176;</span>F </Typography>
                
                <Typography>Pressure: {res.pressure} </Typography>
                <Typography>MAX Temp: {res.temp_max} <span>&#176;</span>F </Typography>
                <Typography>MIN Temp: {res.temp_min} <span>&#176;</span>F </Typography>
                {/* <Typography>Wind Speed: {res.wind.speed} km/h </Typography> */}
            
            </div>
        )
    }
    
    const ResultC = () => {
        console.log(message);
        const cname1 = message;
        
        return(
            <div>
                
    
                <br />
                <h2>{cname1}</h2>
                
                <Typography>Temperature: {res.temp} <span>&#176;</span>C </Typography>
                <Typography>Humidity: {res.humidity}% </Typography>
                <Typography>Feels Like: {res.feels_like} <span>&#176;</span>C </Typography>
                
                <Typography>Pressure: {res.pressure} </Typography>
                <Typography>MAX Temp: {res.temp_max} <span>&#176;</span>C </Typography>
                <Typography>MIN Temp: {res.temp_min} <span>&#176;</span>C </Typography>
    
                {/* <Typography>Feels Like: {res.main.feels_like} <span>&#176;</span>C </Typography>
                <Typography>Humidity: {res.main.humidity}% </Typography>
                <Typography>Pressure: {res.main.pressure} </Typography>
                <Typography>MAX Temp: {res.main.temp_max} <span>&#176;</span>C </Typography>
                <Typography>MIN Temp: {res.main.temp_min} <span>&#176;</span>C </Typography>
                <Typography>Wind Speed: {res.wind.speed} km/h </Typography> */}
            
            </div>
        )
    }
 

    return(
        <div>
            <NavBar />
            <div style={styles.root}>
                <h1>Check Weather</h1> <br />
                <TextField
                    id="outlined-secondary"
                    label="Enter City"
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                    size="small"
                    
                /> &nbsp;
                <Button variant="outlined" color="primary" onClick={handleSearch} size="medium">
                <SearchIcon />Search
                </Button>
                <br />
                <br />
                {/* <Typography>Temperature: {temp.temp}</Typography>
                <Typography>Feels Like: {temp.feels_like} </Typography>
                <Typography>Humidity: {temp.humidity} </Typography>
                <Typography>Pressure: {temp.pressure} </Typography>
                <Typography>MAX Temp: {temp.temp_max} </Typography>
                <Typography>MIN Temp: {temp.temp_min} </Typography> */}
                {/* <div>{res.main.humidity} </div> */}

                {/* <Button variant="outlined" color="default" size="small" style={{justifyContent:"right", alignContent:"end", textAlign:"right", alignItems:"end"}} onClick={celciusDisp}  ><span>&#176;</span>C</Button>
                <Button variant="outlined" color="default" size="small" style={{justifyContent:"right", alignContent:"end", textAlign:"right", alignItems:"end"}} onClick={farDisp} ><span>&#176;</span>F</Button>
                {
                    
                    showcel ? <ResultC />:  <Result />
                    
                    
                    

                } */}

<Button variant="outlined" color="default" size="small" style={{justifyContent:"right", alignContent:"end", textAlign:"right", alignItems:"end"}} onClick={cRes}  ><span>&#176;</span>C</Button>
                <Button variant="outlined" color="default" size="small" style={{justifyContent:"right", alignContent:"end", textAlign:"right", alignItems:"end"}} onClick={fRes} ><span>&#176;</span>F</Button>
                {
                                        console.log(showc)

                }

                {
                    showc ? <ResultC />: null
                    
                    
                    
                }
                {
                    showf ? <Result />: null
                }
                

            </div>
        </div>
    )

 
}



const styles = {
    root:{
        marginTop: "10vh",
        textAlign:"center"
    }
}

export default Weather;