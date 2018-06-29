var searchYouTube = (options, callback) => {
  // TODO
  var defaults = {
    maxResults: 5,
    videoEmbeddable: 'true',
    q: 'dogs',
    part: 'snippet',
    key: 'AIzaSyAq9DsOtUMSU7klJ5k7dEp1doL4T6wAegk',
    type: 'video'
  };
  defaults.maxResults = options.max;
  defaults.q = options.query;
  defaults.key = options.key || defaults.key;

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: defaults,

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
