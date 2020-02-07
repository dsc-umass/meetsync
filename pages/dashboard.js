// pages/dashboard.js
import React from 'react';

// Add this at the top of the page
import withAuth from '../functions/withAuth';
import Layout from '../components/Layout';

class Dashboard extends React.Component {
 render() {
   return (
      <Layout>
        <section className="text-center">
          <div className="container">
            <h1>Dashboard  Page</h1>
            <p>You can't go into this page if you are not authenticated.</p>
          </div>
        </section>
      </Layout>
     )
   }
}
export default withAuth(Dashboard);