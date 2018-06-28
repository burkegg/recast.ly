var VideoList = (props) => (
  <div className="video-list">
    {console.log('props.videos', props.videos)}
    {/*<videoListEntry video = {props[0]}/>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>*/}
    {props.videos.map(video => <div><videoListEntry video={video} /></div>)}
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


