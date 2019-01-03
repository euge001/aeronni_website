import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './hoc/layout';
import BookView from './components/Books'
import Login from './containers/Admin/login'
import AddReview from './containers/Admin/add'
import Auth from './hoc/auth';
import User from './components/Admin';
import Logout from './components/Admin/logout';
import UserPosts from './components/Admin/userPosts';
import EditReview from './containers/Admin/edit';
import Register from './containers/Admin/register';
import AerialApplicationRobot from './components/InnerPages/AerialApplicationRobot';
import MannedDroneSystem from './components/InnerPages/MannedDroneSystem';
import Software from './components/InnerPages/Software';
import Contacts from './components/InnerPages/Contacts';

const routes = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Auth(Home, null)} />
                    <Route path="/Aerial-Application-Robot" exact component={Auth(AerialApplicationRobot, null)} />
                    <Route path="/Manned-Drone-System" exact component={Auth(MannedDroneSystem, null)} />
                    <Route path="/Software" exact component={Auth(Software, null)} />
                    <Route path="/Contacts" exact component={Auth(Contacts, null)} />
                    <Route path="/login" exact component={Auth(Login, false)} />
                    <Route path="/user" exact component={Auth(User, true)} />
                    <Route path="/user/logout" exact component={Auth(Logout, true)} />
                    <Route path="/user/add" exact component={Auth(AddReview, true)} />
                    <Route path="/user/register" exact component={Auth(Register, true)} />
                    <Route path="/user/edit-post/:id" exact component={Auth(EditReview, true)} />
                    <Route path="/books/:id" exact component={Auth(BookView)} />
                    <Route path="/user/user-reviews" exact component={Auth(UserPosts, true)} />
                </Switch>
            </Layout>
        </div>
    );
};

export default routes;