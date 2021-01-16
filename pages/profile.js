import React, { Component }  from 'react'
import Layout from '../components/Layout'
import UserProfile from '../components/UserProfile'
import { Auth0Provider } from "@auth0/auth0-react"; 

export default () => {
    return (
        <Layout>
            <Auth0Provider
                domain={process.env.NEXT_PUBLIC_auth0_domain}
                clientId={process.env.NEXT_PUBLIC_auth0_clientId_dev}
                redirectUri={process.env.NEXT_PUBLIC_auth0_redirectUri}
            >
                <UserProfile />
            </Auth0Provider>
        </ Layout>
    );
}