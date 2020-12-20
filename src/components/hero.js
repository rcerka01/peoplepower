import React, { Component } from 'react';

class Hero extends Component {
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
            <div class="hero">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2>Fractional</h2>
                            <h2><span>Green</span> energy investing</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare</p>
                            <a class="btn" href="https://htmlcodex.com/bootstrap-agency-template">Download Now</a>
                        </div>
                        <div class="col-md-6">
                            <img src="img/hero.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default Hero;
