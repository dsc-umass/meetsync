import React, { useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { auth, firebase } from '../components/Firebase/firebase'
import router from 'next/router';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
//        userService.logout();
        this.state = {
            username: '',
            email: '',
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
        const { username, email, password, returnUrl } = this.state;
        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }
        this.setState({ loading: true });
        
        console.log(username);
        console.log(process.env.apiKey,);
        auth.createUserWithEmailAndPassword(username, password)
            .then(() => {
                alert("Created New User");
                router.push('/dashboard');
            })
            .catch(err => {
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
                            <p className="text-center"> Join MeetSync </p>
                            <h2 className="text-center">Create your account</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username" className="red-star"><b>Username</b> </label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter your username" />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="username" className="red-star"><b>Email Address</b></label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} placeholder="Enter your username" />
                                    {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password" className="red-star"><b>Password</b></label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} placeholder="Enter your password" />
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                    <p>Make sure it's at least 6 characters <Link href="/signup"><a>Learn more.</a></Link></p>
                                </div>
                                <div>

                                </div>
                                <div>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" disabled={loading}>Create Account</button>
                                    {loading &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                {error &&
                                    <div className={'alert alert-danger'}>{error}</div>
                                }
                            </form>
                        </div>
                        
                    </div>
                </section>
            </Layout>
            
        );
    }
}