(function() {

  return {
    events: {
      'app.activated': 'sayHello',
      'fetchCallActivity.done': 'fetchCallActivityDone'
    },

  sayHello: function() {
    var currentUser = this.currentUser().name();
    this.switchTo('hello', {
        username: currentUser
      });

    console.log('here');
    
    this.ajax('fetchCallActivity');

    },

    fetchCallActivity: function() {
      return {
        url:  '/api/v2/bookmarks.json',
        type: 'GET'
      };
    }

  fetchCallActivityDone: function(data) {
    console.log('here');
    }

  };

}());
 