var VideoList = (props) => (
  <div className="video-list">
     
    {console.log(props)}
    {props.videos.map(video => <VideoListEntry video={video} clickHandler = {props.clickHandler}/>)}
    
    {/*{props.videos.map(video => ReactDOM.render(<videoListEntry video={video} />, document.getElementsByClassName('video-list')[0]))}*/}

  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


