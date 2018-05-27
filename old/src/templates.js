(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content-tile-image'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"content-tile content-type-image-link\">\r\n    <a class=\"content-image-link\" href=\""
    + alias4(((helper = (helper = helpers.contentHref || (depth0 != null ? depth0.contentHref : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentHref","hash":{},"data":data}) : helper)))
    + "\">\r\n        <h3 class=\"content-title\">"
    + alias4(((helper = (helper = helpers.contentTitle || (depth0 != null ? depth0.contentTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentTitle","hash":{},"data":data}) : helper)))
    + "</h3>\r\n        <img class=\"content-img content-img-link\" src=\""
    + alias4(((helper = (helper = helpers.contentImgSrc || (depth0 != null ? depth0.contentImgSrc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentImgSrc","hash":{},"data":data}) : helper)))
    + "\">\r\n    </a>\r\n</div>\r\n";
},"useData":true});
templates['content-tile-static-image'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\r\n<div class=\"content-tile content-type-image-static\">\r\n    <img class=\"content-img content-img-static\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.contentImgSrc || (depth0 != null ? depth0.contentImgSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"contentImgSrc","hash":{},"data":data}) : helper)))
    + "\">\r\n</div>\r\n";
},"useData":true});
templates['content-tile-text'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n<div class=\"content-tile content-type-text\">\r\n    <h3 class=\"content-title\">"
    + alias4(((helper = (helper = helpers.contentTitle || (depth0 != null ? depth0.contentTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentTitle","hash":{},"data":data}) : helper)))
    + "</h3>\r\n    <p class=\"content-text\">"
    + alias4(((helper = (helper = helpers.contentText || (depth0 != null ? depth0.contentText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentText","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['title'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"page-title-wrapper\">\r\n    <h1 id=\"page-title\">"
    + alias4(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "<h1>\r\n    <h2 id=\"page-subtitle\">"
    + alias4(((helper = (helper = helpers.pageSubtitle || (depth0 != null ? depth0.pageSubtitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageSubtitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n</div>";
},"useData":true});
})();
