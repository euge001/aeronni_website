import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Footer from '../Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import YouTube from '@u-wave/react-youtube';




const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

let id = 0;
function createData(name, mod1, mod2) {
    id += 1;
    return { id, name, mod1, mod2 };
}

const data = [
    createData('Tank capacity, lt', 5, 15),
    createData('Flight time duration (per session, min)', 30, 30),
    createData('Area coverage by session, hA', 1, 3),
    createData('Area coverage per day, hA', "15 - 20", "45 - 60"),
    createData('Automated Flight Mode', "Yes", "Yes"),
    createData('FPV', "No", "Yes"),
    createData('Pit stop time (tank refill, session restart), min', 1, 1),
    createData('Flight parameters recorder', "No", "Yes"),
    createData('Access to cloud data storage via 3g/4g', "No", "Yes"),
    createData('TBO, hrs', 500, 2000),
    createData('Estimated price range, USD', "6000-10000", "40000-50000"),
];

class AerialApplicationRobot extends Component {
    render() {
        return (
            <div>
                <div className="header aar">
                    <h1>Aerial Application Robot</h1>
                </div>

                <div class="row">

                    <div class="col s12 m4 l3">
                        <h4>Test flight #6</h4>
                        <YouTube
                            video="OZkNs-fdiBc"
                            width="100%"
                            height="200px"
                        />
                        <h4>Test flight #4</h4>
                        <YouTube
                            video="mx2AKs0Kpz8"
                            width="100%"
                            height="200px"
                        />


                    </div>

                    <div class="col s12 m8 l9">

                        <Paper
                            style={{
                                margin: '1.52rem 0 .912rem 0',
                                padding: '20px'
                            }}
                        >
                            <p> We built and tested Aerial Application Drone prototype in 2014. Our initial idea was to replace manual Crop Spraying with average price of $5 per Rai (in Thailand) by completely automated Drone System.
                             We expected to reach price of $1- 3.5 per 1 Rai.
                            </p>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell></CustomTableCell>
                                        <CustomTableCell numeric><h5>Aeronni Module 1</h5></CustomTableCell>
                                        <CustomTableCell numeric><h5>Aeronni Module 2</h5></CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(n => {
                                        return (
                                            <TableRow key={n.id}>
                                                <CustomTableCell component="th" scope="row">
                                                    {n.name}
                                                </CustomTableCell>
                                                <CustomTableCell numeric>{n.mod1}</CustomTableCell>
                                                <CustomTableCell numeric>{n.mod2}</CustomTableCell>

                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

                    </div>

                </div>



                <Footer />
            </div>
        );
    }
}

export default AerialApplicationRobot;