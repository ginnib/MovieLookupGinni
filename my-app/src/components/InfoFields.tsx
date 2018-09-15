import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const InfoFields = (props:any) => (
    <div className="allofit">
        <AppBar position="static" style={{backgroundColor: '#e8a9d4'}}>
            <Toolbar>
            <Typography variant="title" color="inherit" className="heade">
                Movie Lookup
            </Typography>
            </Toolbar>
        </AppBar>
        <form onSubmit={props.lyricsFunc}>
            <input className="text" name="movie" placeholder="Movie Name"/>
            <button className="search">Search</button> 
        </form>
    </div>
);

export default InfoFields;