import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Footer from '../Footer';
import { withStyles } from '@material-ui/core/styles';
import Googlemap from "./Googlemap";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contacts extends Component {
    render() {
        return (
            <div>
                <div className="header cnt">
                    <h1>Contacts</h1>
                </div>

                <div class="row">

                    <div class="col s12 m6 l6">

                        <Paper
                            style={{
                                margin: '1.52rem 0 .912rem 0',
                                padding: '10px 20px'
                            }}
                        >
                            <h5>Silver Springs, NV</h5>

                            <h5>info@aeronni.com</h5>

                        </Paper>
                    </div>
                    <div class="col s12 m6 l6">

                        <Paper
                            style={{
                                margin: '1.52rem 0 .912rem 0',
                                padding: '10px 20px'
                            }}
                        >
                            <Googlemap />


                        </Paper>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contacts;