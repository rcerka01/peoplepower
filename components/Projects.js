import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (
            <div class="portfolio">
                <div class="container">
                    <div class="section-header">
                        <h2>Campaigns</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium ornare velit non</p>
                    </div>
                    <div class="row portfolio-container">
                        <div class="col-lg-3 col-md-6 col-sm-6 portfolio-item web-des">
                            <div class="portfolio-wrap">
                            <h3 class='portfolio-header'>STARTER PROJECT</h3>

                                <figure>
                                    <img src="./util/img/wind-turbine.jpg" alt="" />
                                    <a href="#"></a>
                                    <a href="#"></a>
                                    <a class="portfolio-title" href="loveuk/1">INVEST</a>
                                </figure>
                                <p class='project-parameters'>
                                    <span class='costs'>500MW WIND TURBINE IN FRESGOE</span><br />
                                    Total Cost: <span class='costs'>1,270,000£</span><br />
                                    Token Cost: <span class='costs'>57.00£</span><br />
                                    Total Tokens: <span class='costs'>20,000</span><br />
                                    Tokens Available: <span class='costs'>15,700</span><br />
                                    Yield per Token pes Year: <span class='costs'>6.23£</span><br />
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 portfolio-item web-dev">
                            <div class="portfolio-wrap">
                            <h3>COMMING UP</h3>
                                <figure>
                                <img src="./util/img/wind-turbine-disabled.jpg" alt="" />
                                    <a href="#"></a>
                                    <a href="#"></a>
                                    <a class="portfolio-title portfolio-title-unavailable" href="#">unavailable</a>
                                </figure>
                                <p class='project-parameters'>
                                    <span class='costs'>1000MW WIND TURBINE IN CROSSKIRK</span><br />
                                    Total Cost: <span class='costs'>2,250,000£</span><br />
                                    Token Cost: <span class='costs'>79.00£</span><br />
                                    Total Tokens: <span class='costs'>40,000</span><br />
                                    Tokens Available: <span class='costs'>0</span><br />
                                    Yield per Token pes Year: <span class='costs'>9.15£</span><br />
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 portfolio-item dig-mar">
                            <div class="portfolio-wrap">
                            <h3>COMMING UP</h3>
                                <figure>
                                <img src="./util/img/wind-turbine-disabled.jpg" alt="" />
                                    <a href="#"></a>
                                    <a href="#"></a>
                                    <a class="portfolio-title" href="#">UNAVAILABLE</a>
                                </figure>
                                <p class='project-parameters'>
                                    <span class='costs'>1000MW WIND TURBINE IN CROSSKIRK</span><br />
                                    Total Cost: <span class='costs'>2,250,000£</span><br />
                                    Token Cost: <span class='costs'>79.00£</span><br />
                                    Total Tokens: <span class='costs'>40,000</span><br />
                                    Tokens Available: <span class='costs'>0</span><br />
                                    Yield per Token pes Year: <span class='costs'>9.15£</span><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default Projects;
