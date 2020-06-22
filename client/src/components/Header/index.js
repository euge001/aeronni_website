import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './Sidenav/sidenav';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-55728871-1');
ReactGA.pageview(window.location.pathname + window.location.search);


class Header extends Component {

    state = {
        showNav: false
    }

    onHideNav = () => {
        this.setState({ showNav: false })
    }

    render() {
        return (
            <div>
                <AppBar position="static"
                    style={{
                        background: '#444444'
                    }}
                >
                    <Toolbar>
                        <IconButton
                            style={{
                                marginRight: '20px'
                            }}
                            onClick={() => this.setState({ showNav: true })} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Nav
                            showNav={this.state.showNav}
                            onHideNav={() => this.onHideNav()}
                        />
                        <Typography variant="title" color="inherit" style={{ flex: 1 }} >
                            <Link to="/"
                                style={{
                                    color: '#ffffff'
                                }}>
                                Aeronni Technologies
                            </Link>
                        </Typography>
                        <Link to="/login">                            >
                            <Button
                                style={{
                                    color: '#ffffff'
                                }}
                            >Login</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;
