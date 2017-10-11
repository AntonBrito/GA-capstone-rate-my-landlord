'use strict'
const app = require('./../app.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const signUp = function (data) {
  console.log(data)
  debugger
  return $.ajax({
    url: app.host + '/sign-up',
    headers: {'header': 'Content-Type: application/json'},
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in/',
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
    url: app.host + '/change-password/' + app.user.id,
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
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllLandlords = () => {
  return $.ajax({
    url: app.host + '/landlords',
    method: 'GET'
  })
}

const getAllMyLandlord = () => {
  return $.ajax({
    url: app.host + '/landlord/' + app.user.id + '/my_landlord',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createLandlord = (data) => {
  return $.ajax({
    url: app.host + '/landlords',
    method: 'LANDLORD',
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

const updateLandlord = (data, dataId) => {
  console.log('update landlord data = ' + data)
  console.log('update landlord dataId = ' + dataId)
  return $.ajax({
    url: app.host + '/landlords/' + dataId,
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

const deleteLandlord = (dataId) => {
  return $.ajax({
    url: app.host + '/landlords/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getAllComments = () => {
  return $.ajax({
    url: app.host + '/comments',
    method: 'GET'
  })
}

const getAllMyComments = () => {
  return $.ajax({
    url: app.host + '/comments/' + app.user.id + '/my_comments',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getOneComment = (dataId) => {
  console.log('api.js dataId =' + dataId)
  return $.ajax({
    url: app.host + '/comments/' + dataId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteComment = (dataId) => {
  return $.ajax({
    url: app.host + '/comments/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createComment = (data) => {
  return $.ajax({
    url: app.host + '/comments',
    method: 'POST',
    data: {
      'comment': {
        'subject': data.subject,
        'sections': {
          'comment': data.body,
          'rate': data.rate
        }
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
    url: app.host + '/comment/' + dataId,
    method: 'PATCH',
    data: {
      'comment': {
        'subject': data.title,
        'sections': {
          'comment': data.comment,
          'rate': data.rate
        }
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
  getAllMyLandlord,
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
