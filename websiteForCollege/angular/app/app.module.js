(function(app){
  app.Appmodule = ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule],
    declarations: [ app.AppComponent ],
    bootstrap: [ app.AppComponent ]
  })
  .class ({
    constructor: function() {}
  });
})(window.app || (window.app = {}));
