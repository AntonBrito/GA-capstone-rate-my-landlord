'use strict'
const app = require('./../app.js')
const config = require('./../config.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const signUp = function (data) {
  console.log('hits api.signUp')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const changePassword = (data) => {
  console.log(data.credentials.old)
  console.log(data.credentials.new)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllLandlords = () => {
  return $.ajax({
    url: config.apiOrigin + '/landlords',
    method: 'GET'
  })
}

const getMyLandlords = () => {
  console.log(app.user)
  return $.ajax({
    url: config.apiOrigin + '/my-landlords/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createLandlord = (data) => {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/landlords',
    method: 'POST',
    data: {
      'landlord': {
        'firstname': data.firstname,
        'address': data.address
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateLandlord = (data, dataId) => {
  console.log('update landlord data = ' + data)
  console.log('update landlord dataId = ' + dataId)
  return $.ajax({
    url: config.apiOrigin + '/landlords/' + dataId,
    method: 'PATCH',
    data: {
      'landlord': {
        'name': data.name,
        'address': data.address
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteLandlord = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/landlords/' + data.landlord.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllMyComments = () => {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      user_id: app.user.id
    }
  })
}

const getAllComments = () => {
  return $.ajax({
    url: config.apiOrigin + '/comments/', // + '/my_comments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getOneComment = (dataId) => {
  console.log('api.js dataId =' + dataId)
  return $.ajax({
    url: config.apiOrigin + '/comments/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteComment = (dataId) => {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createComment = (data) => {
  console.log(data)
  console.log('cret comment')
  console.log(app.user)
  return $.ajax({
    url: config.apiOrigin + '/comments',
    method: 'POST',
    data: {
      'comment': {
        'subject': data.subject,
        'comment': data.comment,
        'rate': data.rate,
        'landlord_id': data.landlord_id
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateComment = (data, dataId) => {
  console.log('update comment data = ' + data)
  console.log('update lanlord dataId = ' + dataId)
  return $.ajax({
    url: config.apiOrigin + '/comment/' + dataId,
    method: 'PATCH',
    data: {
      'comments': {
        'subject': data.subject,
        'comment': data.comment,
        'rate': data.rate,
        'landlord_id': data.landlord_id
      }
    },
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signIn,
  signUp,
  changePassword,
  signOut,
  getFormFields,
  getAllLandlords,
  getMyLandlords,
  createLandlord,
  updateLandlord,
  deleteLandlord,
  getAllComments,
  getAllMyComments,
  createComment,
  updateComment,
  getOneComment,
  deleteComment
}
