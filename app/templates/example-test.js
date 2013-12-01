var fixtures  = jasmine.getFixtures();

// given relative path test/fixtures/ to karma
fixtures.fixturesPath = 'base/test/fixtures/';

describe('<Unit Test>', function() {
  describe('Example', function() {
    it('should add `in` class', function() {
      fixtures.load('example.html');
      var $example = $('.example');
      $example.defaultPluginName();
      expect($example.hasClass('success')).toBe(true);
    });
  });
});
