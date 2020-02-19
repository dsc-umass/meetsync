//Higher Order Class
import React from 'react';
import router from 'next/router';
import { auth } from '../components/Firebase/firebase';
const withAuth = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                console.log(authUser);
                if (authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                    console.log("SIGNED IN")
                } else {
                    alert("You are not logged in");
                    router.push('/login');
                }
            });
        }
        renderContent() {
            const { status } = this.state;
            if (status == 'LOADING') {
                return <h1>Loading ......</h1>;
            } else if (status == 'SIGNED_IN') {
                return <Component {...this.props} />
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}
export default withAuth;