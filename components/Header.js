import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
                <div class="header">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-2">
                                <div class="brand">
                                    <a href="/">
                                        <img src="img/logo.png" alt="Logo" />
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
                                            <a href="/" class="nav-item nav-link active">Campaigns</a>
                                            <a href="/vision" class="nav-item nav-link">Vision</a>
                                            <a href="/roadmap" class="nav-item nav-link">Roadmap</a>
                                            <a href="/faq" class="nav-item nav-link">FAQ</a>
                                            <a href="/partnership" class="nav-item nav-link">Partnership</a>
                                            <a href="/support" class="nav-item nav-link">Support</a>
                                            <a href="/" class="btn"><i class="fa fa-download"></i>Login</a>
                                            <a href="/register" class="nav-item nav-link">Register</a>
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
