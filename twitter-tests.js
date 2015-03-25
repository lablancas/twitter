// Write your tests here!
// Here is an example.
Tinytest.add('Twitter - Exported', function (test) {

    test.instanceOf(Twitter,             Function);
    test.instanceOf(Twitter.getAsync,    Function);
    test.instanceOf(Twitter.postAsync,   Function);
    test.instanceOf(Twitter.streamAsync, Function);

});
