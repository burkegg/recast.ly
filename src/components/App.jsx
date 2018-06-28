

// We are going to do a help desk request first thing.
// Looking to pass the click handler down,
// we don't understand the ideas involved,
// but we know that passing a handler down is possible.
// Want to figure out how to bind the click handler to 
// a particular element and transmit attributes about hte leement back.
//(for isntane, we want to get the clicked element's video ID)
//and also how/if it changes the App's state property

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: null,
      allVideos: []
    };
  }
  
  getCurrentVideoInfo() {
    //onClick=this.
    // when we click on a video get the clicked video's id.
    // set this.state.currentVideo to the id received by click.
    
  }
  
  handleClick() {
    this.onClick.bind(this),

    this.setState({
      // what did we click on?
      currentVideo: 'FIX_ME'
    });
  }
  
  render() {
    return ( 
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={window.exampleVideoData[0]}/>
          </div>
          <div className="col-md-5">
            {/*<div><h5><em>videoList</em> view goes here</h5></div>*/}
            <VideoList 
              videos={window.exampleVideoData} 
            />
            {console.log(window.exampleVideoData)}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;