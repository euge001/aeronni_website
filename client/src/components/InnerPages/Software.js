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


class Software extends Component {
    render() {
        return (
            <div>
                <div className="header soft">
                    <h1> Software</h1>
                </div>

                <div class="row">



                    <div class="col s12 m12 l12">

                        <Paper
                            style={{
                                margin: '1.52rem 0 .912rem 0',
                                padding: '10px 20px'
                            }}
                        >
                            <div>
                                <h4>Our stack:</h4>
                                <p> Python</p>
                                <p> Go</p>
                                <p> MongoDB</p>
                                <p>  React/ReactNative</p>
                                <p> NodeJS</p>

                            </div>

                        </Paper>

                    </div>

                </div >



                <Footer />
            </div >
        );
    }
}

export default Software;