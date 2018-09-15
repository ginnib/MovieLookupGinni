// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import * as React from 'react';


const UI = (props:any) => (
    <div>
        <div className="allofit">
            {/* <Paper className="paper" elevation={0} style={{backgroundColor: '#d8d8d8', color: '#000000',marginLeft:'10px', marginBottom: '10px', marginRight: '10px', paddingLeft:'20px', paddingRight:'20px', paddingTop: '20px', paddingBottom:'20px'}}> */}
            <Card className="card" style={{backgroundColor: '#d8d8d8', color: '#000000',marginLeft:'2%', marginBottom: '2%', marginRight: '2%', paddingLeft:'2%', paddingRight:'2%', paddingTop: '2%', paddingBottom:'2%'}}>
            <CardContent>
                <Typography variant="headline" component="h3" style={{color: '#000000'}}>
                Title: {props.title}
                </Typography>
                <br/>
                <Typography component="p" style={{color: '#000000'}}>
                Release Date: {props.release}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Release Year: {props.year}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Rated: {props.rating}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Genre: {props.genre}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Actors: {props.actors}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Director: {props.director}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Writer: {props.writer}
                </Typography>
                <Typography component="p" style={{color: '#000000'}}>
                Plot: {props.plot}
                </Typography>
                </CardContent>
            </Card>
            {/* </Paper> */}
        </div>
    </div>
);

export default UI;