import React, { Component } from 'react';
import Partner from '../components/Partner';

class Partners extends Component {

    render() {
        return (
            <div class="hero">
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Partners</h2>
                            </div>
                            <div class="col-12">
                            <a href="/">Home</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h2>partners</ h2>
                <Partner />
                <Partner />
                <Partner />
            </div>
            );
    }

}

export default Partners;
