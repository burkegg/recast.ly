

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[1], //should be the entire video obj
      allVideos: []
    };

  }
  
  getYouTubeVideos(query) {
    var options = {
      // key:  API KEY
      q: query
    };

    this.props.searchYouTube(options, function(videos) {
      console.log(videos);
      this.setState({
        allVideos: videos,
        currentVideo: videos[0]
      });
    }.bind(this)
    ); 
  }
  handleClickParent(incomingVideo) {
    console.log('prior', this.state); 
    this.setState({currentVideo: incomingVideo});
    console.log('post', this.state);
  }
   
  render() {

    return ( 
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={window.exampleVideoData} // data source to app in general
              clickHandler = {this.handleClickParent.bind(this)} 
              allVideos = {this.state.allVideos} // will update the state list.
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;