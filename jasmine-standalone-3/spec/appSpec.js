describe('Feature Test:', function(){
  var app


  beforeEach(function(){
  app = new App();
  });

  it('planes can be instructed to land at an airport', function (){
  expect(app.number).toEqual(5);
  });
