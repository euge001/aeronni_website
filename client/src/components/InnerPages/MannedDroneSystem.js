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
    createData('Empty weight, kg', 115),
    createData('Cruising speed range, km/h', "150 - 180"),
    createData('Flight duration with 10 min reserves, min', 90),
    createData('Cruising altitude, m', "150 - 300"),
    createData('Autopilot', "Yes"),
    createData('Aeronni Safety Kit', "Yes"),
    createData('Recharge time, min', "60 - 240"),
    createData('Flight parameters recorder', "Yes"),
    createData('Access to cloud data storage via 3g/4g', "Yes"),
    createData('Transponder', "Yes"),
    createData('TCAS', "Yes"),
    createData('TBO, hrs', 2000),
    createData('Estimated price range, USD', "120000-250000"),
];

class MannedDroneSystem extends Component {
    render() {
        return (
            <div>
                <div className="header mds">
                    <h1> Manned Drone System</h1>
                </div>

                <div class="row">

                    <div class="col s12 m4 l3">
                        <h6>Top 10 Passenger Drones Available in 2018</h6>
                        <YouTube
                            video="alKb0p3KN8E"
                            width="100%"
                            height="200px"
                        />



                    </div>

                    <div class="col s12 m8 l9">

                        <Paper
                            style={{
                                margin: '1.52rem 0 .912rem 0',
                                padding: '10px 20px'
                            }}
                        >
                            <div>
                                <h4>Imagine a flying machine</h4>
                                <p>  - which is able to take off and to land on a rooftop.</p>
                                <p>  - which is able to take you to any point in your city in less than a 15 minutes.</p>
                                <p>  - which has 4 levels of safety, so you can even let you kid to fly to school.</p>
                                <p>  - with a level of noise less than your Harley Davidson.</p>
                                <h4>Why we are better then others?</h4>
                                <p> <h6> Safety:</h6> Our mission is to make flight as safe as it should be. It must be safe for passenger and it must be safe for people on the ground. In case of any electrical or mechanical issues onboard you will be able to land safely Aeronni-1 is the first manned drone that makes you and your insurance company happy. </p>
                                <p>  <h6> Experience:</h6> We successfully built both airplanes and software for the last 20 years. We also love to fly and we are scientists.</p>

                            </div>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell></CustomTableCell>
                                        <CustomTableCell numeric><h5>Manned Drone System 'Aeronni-1'</h5></CustomTableCell>

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

                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>

                    </div>

                </div >



                <Footer />
            </div >
        );
    }
}

export default MannedDroneSystem;