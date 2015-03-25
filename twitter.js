// Write your package code here!

Twitter = Npm.require("twitter");

Twitter.getAsync    = Meteor.wrapAsync(function(client, path, params, callback){
    client.get(path, params, callback);
});

Twitter.postAsync   = Meteor.wrapAsync(function(client, path, params, callback){
    client.post(path, params, callback);
});

Twitter.streamAsync = Meteor.wrapAsync(function(client, path, params, callback){
    client.stream(path, params, callback);
});
