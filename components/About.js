import React, { Component } from 'react';

class About extends Component {
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
                        <div>
                            <h2>FRACTIONAL <span>GREEN</span> ENERGY INVESTING </ h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare</p>
                            <a class="btn" href="vision">More</a>
                        </div>
                        {/* <div class="col-md-6">
                            <img src="img/hero.png" alt="Image to be made" />
                        </div> */}
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
