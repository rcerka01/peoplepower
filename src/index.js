import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import './util/style/index.css';

//import _ from 'lodash';

import Menu from './components/menu';
import Hero from './components/hero';
import About from './components/about';

// import VideoDetail from './components/video_detail';
// import VideoList from './components/video_list';

class App extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { 
    //         videos: [],
    //         selectedVideo: null
    //     };envelope.videoSearch("surfboard");  
    // }

    // videoSearch(term) {
    //     YTSearch({ key: API_KEY, term: term }, videos => {
    //         // this.setState({ videos: videos });
    //          this.setState({ 
    //              videos: videos,
    //              selectedVideo: videos[0]
    //          });
    //     });
    // }

    render() {
        //const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
          <div class="wrapper">
            <Helmet>
              <link href="lib/slick/slick.css" rel="stylesheet" />
              <link href="libs/slick/slick-theme.css" rel="stylesheet" />
              <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
            </Helmet>
            <Menu />
            <Hero />
            <About />
            <Helmet>
              <script src="./util/lib/slick/slick.min.js" type="text/javascript" />
              <script src="./util/lib/isotope/isotope.pkgd.min.js" type="text/javascript" />
              <script src="./util/lib/lightbox/js/lightbox.min.js" type="text/javascript" />
            </Helmet>
          </ div>);
    }

}

ReactDOM.render(<App />, document.querySelector(".root"));
// reportWebVitals();
 