const landlordsHandlebars = function (name, address) {
  const landlordHandlebarsTemplate = require('./templates/posts-template.handlebars')
  const context = {
    'name': name,
    'address': address
  }
  const landlordTemplate = landlordHandlebarsTemplate(context)
  $('#landlord-div').append(landlordTemplate)
}

// template context for pages/

const commentHandlebars = function (subject, comment, rate) {
  const commentHandlebarsTemplate = require('./templates/comments-template.handlebars')
  const context = {
    'subject': subject,
    'comment': comment,
    'rate': rate
  }
  console.log('info from handlebars' + subject + comment + rate)
  const html = commentHandlebarsTemplate(context)
  $('#comment-div').append(html)
}

const dropdownHandlebars = function (subject, dataId) {
  const commentHandlebarsTemplate = require('./templates/comment-dropdown-list.handlebars')
  const context = {

    'subject': subject

  }
  const html = commentHandlebarsTemplate(context)
  $('#listOfComments').append(html)
}

module.exports = {
  landlordsHandlebars,
  commentHandlebars,
  dropdownHandlebars
}
