var searchYouTube = (options, callback) => {
  // TODO
  var defaults = {
    maxResults: 5,
    videoEmbeddable: 'true',
    query: 'dogs',
    part: 'snippet',
    key: 'AIzaSyAq9DsOtUMSU7klJ5k7dEp1doL4T6wAegk',
    type: 'video'
  };
  options = defaults;
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'JSON',
    data: options,

    success: function(data) {
      console.log(data);
      callback(data);
    },
    error: function() {
      console.log('failed');
    }
  }
  );
  
};


window.searchYouTube = searchYouTube;
