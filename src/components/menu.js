import React, { Component } from 'react';
import '../util/style/index.css';



class Menu extends Component {
    // can change class to function if not needed

    // constructor(props) {
    //     super(props);

    //     this.state = { term: '' };
    // }

    // onInputChange(term) {
    //     this.setState({ term });
    //     this.props.onSearchTermChange(term);
    // }

    render() {
        return (
                <div class="header">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-2">
                                <div class="brand">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="topbar">
                                    <div class="topbar-col">
                                        <a href="tel:+012 345 67890"><i class="fa fa-phone-alt"></i>+012 345 67890</a>
                                    </div>
                                    <div class="topbar-col">
                                        <a href="mailto:info@example.com"><i class="fa fa-envelope"></i>info@example.com</a>
                                    </div>
                                    <div class="topbar-col">
                                        <div class="topbar-social">
                                            <a href=""><i class="fab fa-twitter"></i></a>
                                            <a href=""><i class="fab fa-facebook-f"></i></a>
                                            <a href=""><i class="fab fa-youtube"></i></a>
                                            <a href=""><i class="fab fa-instagram"></i></a>
                                            <a href=""><i class="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="navbar navbar-expand-lg bg-light navbar-light">
                                    <a href="#" class="navbar-brand">MENU</a>
                                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                        <div class="navbar-nav ml-auto">
                                            <a href="index.html" class="nav-item nav-link active">Invest</a>
                                            <a href="vision.html" class="nav-item nav-link">Vision</a>
                                            <a href="faq.html" class="nav-item nav-link">FAQ</a>
                                            <a href="partners.html" class="nav-item nav-link">Partners</a>
                                            <a href="/" class="btn"><i class="fa fa-download"></i>Download Now</a>
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
