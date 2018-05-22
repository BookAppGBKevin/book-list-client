var app = app || {};
(function(module){

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Book(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }
  Book.all = [];
  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());
    return template(this);
  };
  
  Book.loadAll = rows => {
    Book.all = rows.sort((a, b) => b.title - a.title).map(Book => new Book(Book));
  };

  Book.fetchAll = callback => 
  $.get(`${heroku url}/books`)
  .then(Book.loadAll)
  .then(callback)
  .catch(errorCallback);

  module.Book = Book;
})(app);