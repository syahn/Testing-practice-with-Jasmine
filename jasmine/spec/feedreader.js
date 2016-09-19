// feedreader.js

$(function() {
    // This suite is all about the RSS feeds definitions, the allFeeds variable in our application.


    describe('RSS Feeds', function() {
        // This tests to make sure that the allFeeds variable has been defined and that it is not empty.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is not empty.
         */

         it('have URL', function() {
             allFeeds.forEach(function(feed){
                 expect(feed.url).toBeDefined();
                 expect(feed.url).not.toEqual('');
             });
         });


        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is not empty.
         */
         it('have name', function() {
             allFeeds.forEach(function(feed){
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toEqual('');
             });
         });
    });


    describe('The menu', function() {

        // This test ensures the menu element is hidden by default.

         it('are hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toEqual(true);
         });

         // This test ensures the menu changes visibility when the menu icon is clicked.

          it('shows when icon is clicked and hides when icon is clicked again', function() {
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toEqual(false);
              $('.menu-icon-link').trigger('click');
              expect($('body').hasClass('menu-hidden')).toEqual(true);

          });
    });


    describe('Initial Entries', function(){

        /* This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done){
             loadFeed(0, done);
         });

         it('have at least one entry', function() {
             expect($('.feed .entry').length).not.toEqual(0);
         });



    describe('New Feed Selection', function(){
        // This test ensures when a new feed is loaded by the loadFeed function that the content actually changes.
         var currentFeedUrl,
             newFeedUrl;

         beforeEach(function(done){
             loadFeed(0, function(){
                 currentFeedUrl = $('.feed').children()[0].href;
                 loadFeed(1, done);
             });
         });

         it('shows different feed from previous one', function(){
             newFeedUrl = $('.feed').children()[0].href;
             expect(currentFeedUrl).not.toBe(newFeedUrl);
         });
     });
    });
}());
