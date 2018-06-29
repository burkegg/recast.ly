

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[1], //should be the entire video obj
      allVideos: []
    };

    //this.handleClickParent = this.handleClickParent.bind(this);


  }
  

  handleClickParent(incomingVideo) {
    //console.log('incomingId', incomingVideo);
    //this.state.currentVideo = incomingVideo;
    console.log('prior', this.state);
    
    //this.setState(() => {return {currentVideo: incomingVideo}})
    
    this.setState({currentVideo: incomingVideo});
    
    //this.setState({ currentVideo: incomingVideo }, function() {
    /*<VideoPlayer video = {this.state.currentVideo}/>;*/
    //   console.log('callback executed');
    // });
    
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