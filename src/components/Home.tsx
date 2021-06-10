import React from 'react'
import {Container, Typography, Grow, Grid, Card, CardContent, Button} from '@material-ui/core'
import NavBar from './Navbar'

const Home = () => {
    return(
        <Grid container direction='column' justify='center' alignItems='center'
        style={{ margin: 0, width: '100%' }}>
            <Grid item alignContent='center'>
            <Typography variant="h2" color="inherit" align="center">Save Money, Enjoy Your Round</Typography>
            </Grid>
            <Grid item alignContent='center'>
            <Typography variant="h2" color="inherit" align="center">Save Money, Enjoy Your Round</Typography>
            </Grid>
        </Grid>
    )
}
export default Home