import React, { Component } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
//import getConfig from 'next/config'
import Login from '../components/Login'

//const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Menu extends Component {
    render() {
        return (
                <div class="header">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-2">
                                <div class="brand">
                                    <a href="/">
                                        <img src="util/img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="topbar">

                                </div>
                                <div class="navbar navbar-expand-lg bg-light navbar-light">
                                    <a href="#" class="navbar-brand">MENU</a>
                                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>


                                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div class="navbar-nav ml-auto">
                                            <a href="/" class="nav-item nav-link active">CAMPAIGNS</a>
                                            <a href="/vision" class="nav-item nav-link">VISION</a>
                                            <a href="/partnership" class="nav-item nav-link">PARTNERSHIP</a>
                                            <a href="/roadmap" class="nav-item nav-link">ROADMAP</a>
                                            <a href="/faq" class="nav-item nav-link">FAQ</a>
                                            <Auth0Provider
                                                domain={process.env.NEXT_PUBLIC_auth0_domain}
                                                clientId={process.env.NEXT_PUBLIC_auth0_clientId_dev}
                                                redirectUri={process.env.NEXT_PUBLIC_auth0_redirectUri}
                                                // domain={publicRuntimeConfig.auth0.domain}
                                                // clientId={publicRuntimeConfig.auth0.clientId}
                                                // redirectUri={publicRuntimeConfig.auth0.redirectUri}
                                            >
                                                <Login />
                                            </ Auth0Provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Menu;
