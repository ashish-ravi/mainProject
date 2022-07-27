import React from "react";
import footerContent from "../content/footer";
import {Grid, Typography} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return(
        <Grid style={{marginLeft: 40, marginRight: 135 }}>
            <Grid container>
                <StayInformed data={footerContent.stayInformed}/>
            </Grid>
            <Grid container style={{marginTop: 200, borderTop:"1px solid #C9C9C9"}}>
                <Grid item xs={12} sm={10} md={5}>
                    <Typography style={{paddingTop: 20, fontSize: 15}}>© 2021 AirbnbClone, Inc. · Privacy · Terms · Sitemap · Company details</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} style={{paddingTop: 20}}><LanguageIcon   />
                    <Typography display="inline" style={{marginLeft: 10}} >English(IN)</Typography ></Grid>
                <Grid item xs={12} sm={6} md={2}  style={{paddingTop: 20, }}>
                     
                    <span style={{display: "flex", justifyContent: "flex-end"}}>
                     <FacebookIcon style={{paddingLeft: 5, paddingRight: 5}} />  
                     <TwitterIcon  style={{paddingLeft: 5, paddingRight: 5}} />
                     <InstagramIcon  style={{paddingLeft: 5, paddingRight: 5}} />
                     </span>
                </Grid>
                
                

            </Grid>
        </Grid>
    )
}

const StayInformed = (props) => {
    return(
        <Grid item md={12} sm={12}>
            <Typography variant={"h5"} style={{fontWeight: 750}}>{props.data.title}</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <RenderList data={props.data.forGuests} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <RenderList data={props.data.forHosts} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <RenderList data={props.data.forCovid} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <RenderList data={props.data.more} />
                </Grid>
            </Grid>
        </Grid>
    )
}

const RenderList = (props) => {
    return(
        <Grid style={{marginTop: 100}}>
            <Grid style={{borderBottom:"1px solid #C9C9C9"}}>
                <Typography style={{fontSize: 20, marginBottom: 20}}>{props.data.title}</Typography>
            </Grid>
            {
                props.data.content.map((item,index) => {
                    return(
                        <Grid key={index}>
                            <Grid style={{borderBottom:"1px solid #C9C9C9"}}>
                                <Typography style={{fontWeight: 750, marginTop: 20}}>{item.title}</Typography>
                                <Typography style={{ fontSize: 15 ,color: "#626262" , marginBottom: 20}}>{item.description}</Typography>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default Footer;