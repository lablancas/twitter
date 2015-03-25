[![Build Status](https://travis-ci.org/lablancas/pubsub.svg)](https://travis-ci.org/lablancas/twitter)

# Preface
This meteor package is a wrapper of NPM package twitter

See https://www.npmjs.com/package/twitter

# Quick Start
Note: This package is designed for server-side usage only.

    var options = {
        consumer_key: Meteor.settings.twitter_consumer_key,
        consumer_secret: Meteor.settings.twitter_consumer_secret,
        access_token_key: Meteor.settings.twitter_access_token_key,
        access_token_secret: Meteor.settings.twitter_access_token_secret
    }
    var client = new Twitter(options);

    var params = {};
    
    Twitter.getAsync(client, 'statuses/home_timeline', params, function(error, tweets, response){
        if (!error) {
            console.log(tweets);
        }

    });
    
# Installation
meteor add lablancas:twitter

Store Twitter App Settings in /path/to/your/app/settings.json

    {

        "twitter_consumer_key": "Your App Consumer Key",
        "twitter_consumer_secret": "Your App Consumer Secret",
        "twitter_access_token_key": "Your App Token Key",
        "twitter_access_token_secret": "Your App Token Secret"
    }

Start meteor with your settings
    
    meteor --settings /path/to/your/app/settings.json

# Twitter Functions

    Twitter.getAsync(client, path, params, callback);
    Twitter.postAsync(client, path, params, callback);
    Twitter.streamAsync(client, path, params, callback);

## REST API
You simply need to pass the endpoint and parameters to one of convenience methods. Take a look at the documentation site to reference available endpoints.

Example, lets get a list of favorites:

    var options = {
        consumer_key: Meteor.settings.twitter_consumer_key,
        consumer_secret: Meteor.settings.twitter_consumer_secret,
        access_token_key: Meteor.settings.twitter_access_token_key,
        access_token_secret: Meteor.settings.twitter_access_token_secret
    }
    
    var client = new Twitter(options);
    
    Twitter.get(client, 'favorites/list', function(error, tweets, response){
      if(error) throw error;
      console.log(tweets);  // The favorites. 
      console.log(response);  // Raw response object. 
    });
    
How about an example that passes parameters? Let's tweet something:

    var options = {
        consumer_key: Meteor.settings.twitter_consumer_key,
        consumer_secret: Meteor.settings.twitter_consumer_secret,
        access_token_key: Meteor.settings.twitter_access_token_key,
        access_token_secret: Meteor.settings.twitter_access_token_secret
    }
    
    var client = new Twitter(options);
    
    Twitter.post(client, 'statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response){
      if(error) throw error;
      console.log(tweet);  // Tweet body. 
      console.log(response);  // Raw response object. 
    });
    
## Streaming API
Using the stream convenience method, you to open and manipulate data via a stream piped directly from one of the streaming API's. Let's see who is talking about javascript:

    var options = {
        consumer_key: Meteor.settings.twitter_consumer_key,
        consumer_secret: Meteor.settings.twitter_consumer_secret,
        access_token_key: Meteor.settings.twitter_access_token_key,
        access_token_secret: Meteor.settings.twitter_access_token_secret
    }
    
    var client = new Twitter(options);
    
    Twitter.stream(client, 'statuses/filter', {track: 'javascript'}, function(stream) {
      stream.on('data', function(tweet) {
        console.log(tweet.text);
      });

      stream.on('error', function(error) {
        throw error;
      });
    });