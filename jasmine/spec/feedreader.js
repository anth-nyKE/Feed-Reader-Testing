/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {    
    describe('RSS Feeds', function(){
        //Test to check that names are defined and are not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Test to ensure each feed has a defined, non-empty URL.         
        it('has a non-empty URL', function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect((feed.url).length).toBeGreaterThan(0);                
            });
        })
        //Test to ensure each feed has a defined, non-empty name.
        it('has a well defined name', function(){
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);                
            });
        })
    });


    //menu test suite
    describe('The Menu', function () {
        // Test to ensure the menu is hidden by default
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // Checks to see if the menu toggles on-clicks
        it('toggles on click', function () {
            //show menu on first click
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //hide menu on second click
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });                


    describe('Initian Entries', function(){
        /*Asynchronous test to check that there is at least 1 .entry element in the .feed
         *container after loadFeed() executes.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('has been rendered', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done()
        })  
    })


    describe('New Feed Selection', function(){
         /* Test to ensure content changes when a new feed is loaded
          * by the loadFeed() function.
          */
        beforeEach(function(done){
            loadFeed(0, function(){
                before = $('.feed').text()
                loadFeed(1, function(){
                    after = $('.feed').text()
                    done();
                })
            })
        })
        //control to check that content changes
        it('has loaded', function(done){
            expect(before).not.toEqual(after)
            done()
        })
    })     
}());
