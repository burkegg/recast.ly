

// We are going to do a help desk request first thing.
// Looking to pass the click handler down,
// we don't understand the ideas involved,
// but we know that passing a handler down is possible.
// Want to figure out how to bind the click handler to 
// a particular element and transmit attributes about hte leement back.
//(for isntane, we want to get the clicked element's video ID)
//and also how/if it changes the App's state property



// currently can pass video into player.  added this.state.currentVideo 
// to where we generate the current video.

// what does this line do?: this.handleClick = this.increase.bind(this); 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[1], //should be the entire video obj
      allVideos: []
    };

    //this.handleClickParent = this.handleClickParent.bind(this);


  }
  
  getCurrentVideoInfo() {
    //onClick=this.
    // when we click on a video get the clicked video's id.
    // set this.state.currentVideo to the id received by click.
  }
   
  setState() {
    // what did we click on?
    //currentVideo: 'FIX_ME',
  }
  // Added 'event' to handleClick.
  handleClickParent(incomingId) {
    console.log('incomingId', incomingId);
    console.log('something was clicked?', event);
    //setState();

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