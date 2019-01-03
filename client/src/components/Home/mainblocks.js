import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { Link } from 'react-router-dom';


class Mainblocks extends Component {

    render() {
        return (
            <div>

                <Grid container spacing={16}
                    style={{
                        padding: "10px",
                    }}
                >
                    <Grid item xs={12} sm={4}
                        style={{
                            padding: "10px",
                            textAlign: 'center'

                        }}
                    >
                        <Paper>
                            <Card>
                                <CardMedia>
                                    <img src='/images/010.jpg' />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        Aerial Application Robot
          </Typography>
                                    <Typography component="p">
                                        Aerial Applications is the challenging moment for every farmer in South East Asia. We make this process simple and enjoyable. All you need is just to fill the tank and press the button in your mobile.
          </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="/Aerial-Application-Robot">
                                        <Button size="small" color="primary">
                                            Learn More
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>

                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={4}
                        style={{
                            padding: "10px",
                            textAlign: 'center'
                        }}
                    >
                        <Paper>
                            <Card>
                                <CardMedia>
                                    <img src='/images/011.jpg' />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        Safest Manned Drone System
          </Typography>
                                    <Typography component="p">
                                        A lot of companies develop a manned drones nowadays. But how about safety? Will insurance company play that game? We do manned drone flight as safe is it should be. Ideal urban transport.
          </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="/Manned-Drone-System">
                                        <Button size="small" color="primary">
                                            Learn More
                                   </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>


                    <Grid item xs={12} sm={4}
                        style={{
                            padding: "10px",
                            textAlign: 'center'

                        }}
                    >
                        <Paper>
                            <Card>
                                <CardMedia>
                                    <img src='/images/012.jpg' />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        AI for Aerospace Industry
          </Typography>
                                    <Typography component="p">
                                        Decision making is the crucial part of Aerospace Industry. Especially for fully autonomous flying robots. Machine Learning makes this process better day to day.
          </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to="/Software">
                                        <Button size="small" color="primary">
                                            Learn More
                                    </Button>
                                    </Link>
                                </CardActions>
                            </Card>

                        </Paper>
                    </Grid>
                </Grid>





            </div>
        );
    }
}

export default Mainblocks;