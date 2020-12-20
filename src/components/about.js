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
            <div class="about">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div id="video-section">
                                <div class="youtube-player" data-id="jssO8-5qmag">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="section-title">Our Lesbian Partners</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                            </p>
                            <a class="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default About;
