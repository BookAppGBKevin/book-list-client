'use strict';

var app = app || {};

(function(module) {
  let productionApiUrl = '';
  let developmentApiUrl = '';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);
  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    let template = Handlebars.complie($(`#${templateId}`).text());
    return template(data);
  };
})(app);