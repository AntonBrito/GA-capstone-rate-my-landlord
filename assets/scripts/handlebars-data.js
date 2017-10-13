const landlordsHandlebars = function (name, address) {
  const landlordHandlebarsTemplate = require('./landlord-template.handlebars')
  const context = {
    'name': name,
    'address': address
  }
  const landlordTemplate = landlordHandlebarsTemplate(context)
  $('#landlords-div').append(landlordTemplate)
}

// template context for pages/

const commentsHandlebars = function (subject, comment, rate) {
  const commentHandlebarsTemplate = require('./comments-template.handlebars')
  const context = {
    'subject': subject,
    'comment': comment,
    'rate': rate
  }
  const templateFilled = commentHandlebarsTemplate(context)
  $('#empty-comments-div').append(templateFilled)
}

const dropdownHandlebars = function (subject, dataId) {
  const commentHandlebarsTemplate = require('./comments-dropdown-list.handlebars')
  const context = {
    'subject': subject
  }
  const templateFilled = commentHandlebarsTemplate(context)
  $('#listOfComments').append(templateFilled)
}

module.exports = {
  landlordsHandlebars,
  commentsHandlebars,
  dropdownHandlebars
}
