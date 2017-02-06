(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<div><h1>Hello Angular</h1></div>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
