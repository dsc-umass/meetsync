import React, { useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'
import './login.css'
import GoogleButton from 'react-google-button'
import router from 'next/router';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
//        userService.logout();
        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;
        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
        this.setState({ loading: true });
        
        //FIREBASE EMAIL SIGN IN
        auth.signInWithEmailAndPassword(username, password)
            .then(() => {
                alert("You are sign in");
                
            })
            .catch(err => {
                alert('OOps something went wrong check your console');
                console.log(err);
            });
    }
	handleCreateUser = () => {
        event.preventDefault();
		const username = this.state.username;
		const password = this.state.password;
        auth.createUserWithEmailAndPassword(username, password);
	}
	handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        auth.signInWithPopup(provider)
            .then(() => {
                alert('You are signed In');
                router.push('/dashboard');
            })
            .catch(err => {
                alert('OOps something went wrong check your console');
                console.log(err);
            });
    }
    handleLogout = () => {
        auth.signOut().then(function () {
            alert('Logout successful');
        }).catch(function (error) {
            alert('OOps something went wrong check your console');
            console.log(err);
        });
	}
    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <Layout>
                <section>
                    <div className="row">
                        <div className="mycard col-md-6 col-md-offset-0">
                            <h2 className="text-center">Sign in to MeetSync</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username"><b>Username or email address</b></label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter your username" />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password"><b>Password</b></label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Enter your password" />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" disabled={loading}>Login</button>
                                    {loading &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                {error &&
                                    <div className={'alert alert-danger'}>{error}</div>
                                }
                            </form>
                            <GoogleButton onClick={this.handleSignIn}>Google Signin</GoogleButton>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="mycard col-md-6 col-md-offset-0">
                            <p>New to MeetSync? <Link href="/signup"><a>Create an account</a></Link></p>
                        </div>
                        <Link href="/dashboard">
                            <a className="card">
                                <h3>Go to Dashboard&rarr;</h3>
                                <p>Visit Dashboard</p>
                            </a>
                        </Link>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </section>
            </Layout>
            
        );
    }
}