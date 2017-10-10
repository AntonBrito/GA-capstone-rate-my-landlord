'use strict'
const app = require('../app.js')
const template = require('../handlebars-data')
// const events = require('./events.js')

const signUpSuccess = (data) => {
  console.log(data)
  console.log('signed up Successfully')
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('failed to signUp')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log('signed in!')
  console.log(app.user)
  $('#signfo').hide()
  $('#message').html('You are Signed In!')
  $('#landlords_page').hide()
}

const signInFailure = (error) => {
  console.log(error)
  $('#message').html('Invalid password')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('#message').html('Successfully changed password!')
}

const changePasswordfailure = (error) => {
  console.log(error)
  $('#message').html('Invalid OLD password.')
}

const logOutSuccess = (data) => {
  console.log(data)
  console.log('Succeded in logOutSuccess')
  $('#signfo').show()
  $('#landlords_page, #comments_page, #create_landlord, #create_comment, #update_landlord, #update_comment').hide()
  $('#message').html('You Have Signed Out!')
  $('#listOfLandlords').empty()
}

const logOutFailure = (error) => {
  console.log(error)
  console.log('Failed in logOutFailure')
}
const getAllLandlordsSuccess = (data) => {
  console.log(data)
  console.log('Successfully retrieved all landlords by all users')
  $('#landlords-div').empty()
  for (let i = 0; i < data.landlords.length; i++) {
    const name = data.landlords[i].title
    const address = data.landlords[i].body
    template.landlordHandlebars(name, address)
  }
  $('.landlordsEditButton, .landlordsDeleteButton').hide()
}
const getAllLandlordsFailure = (err) => {
  console.log(err)
  console.log('Failed retieving all landlords by all users')
  $('#landlords-div').html('These Are Not The landlords You Are Looking For')
}

// we can dry this code out after crud functionality is done
// const getAllMyLandlordsSuccess = (data) => {
//   console.log(data)
//   console.log('Successfully retrieved all MY landlord')
//   $('#landlord-div').empty()
//   for (let i = 0; i < data.landlords.length; i++) {
//     const name = data.landlords[i].name
//     const comment = data.landlords[i].comment
//     template.landlordsHandlebars(name, comment)
//   }
// }

// // not being called by .catch in events.js
// const getAllMyLandlordsFailure = (error) => {
//   console.log('Failed')
//   $('#landlord-div').html('These Are Not The landlords You Are Looking For')
//   console.log(error)
// }

const getAllCommentsSuccess = (data) => {
  app.comments = data.comments
  console.log(app.comments)
  console.log('Succeded in getAllCommentsSuccess')
}

const getOneCommentSuccess = (data) => {
  console.log('succeeded in getOneCommentSuccess')
  // assign for edit or delete
  app.comment = data.comment
  console.log(app.comment)
  $('#comments-div').empty()
  const subject = data.comment.subject
  const comment = data.comment.sections.comment
  const rate = data.comment.rate
  console.log(subject + comment + rate)
  template.commentsHandlebars(subject, comment, rate)
}

const getAllCommentsFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllCommentsFailure')
}

const getAllMyCommentsSuccess = (data) => {
  console.log('I am getAllMyCommentsSuccess')
  console.log(data)
  console.log('app === ' + app.page)
  console.log('Succeded')
  $('#listOfComments').empty()
  for (let i = 0; i < data.comments.length; i++) {
    // data-id = data.comments[i]._id
    const dataId = data.comments[i]._id
    console.log('dataId === ' + dataId)
    const subject = data.comments[i].title
    template.dropdownHandlebars(subject, dataId)
  }
}

const getAllMyCommentsFailure = (error) => {
  console.log(error)
  console.log('Failed in getAllMyCommentsFailure')
}

const createCommentSuccess = (data) => {
  console.log(data)
  console.log('Succeded in createCommentSuccess')
  $('textarea').val('')
}

const createCommentFailure = (error) => {
  console.log(error)
  console.log('Failed in createCommentFailure')
}

const createLandlordSuccess = (data) => {
  console.log(data)
  console.log('Succeded in createCommentSuccess')
  $('textarea').val('')
}

const createLandlordFailure = (error) => {
  console.log(error)
  console.log('Failed in createLandlordFailure')
}

const deleteCommentSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deleteCommentSuccess')
  $('#comment-div').empty()
}

const deleteCommentFailure = (error) => {
  console.log(error)
  console.log('Failed in deleteCommentFailure')
}

const deleteLandlordSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deleteLandlordSuccess')
}

const deleteLandlordFailure = (error) => {
  console.log(error)
  console.log('Failed in deleteLandlordFailure')
}

const updateCommentSuccess = (data) => {
  console.log(data)
  console.log('Succeded in updateCommentSuccess')
  $('#comment-div').empty()
  const subject = data.comment.subject
  const comment = data.comment.comment
  const rate = data.comment.rate
  console.log(subject + comment + rate)
  template.commentsHandlebars(subject, comment, rate)
}

const updateCommentFailure = (error) => {
  console.log(error)
  console.log('Failed in updateCommentFailure')
}

const updateLandlordSuccess = (data) => {
  console.log(data)
  console.log('Succeded in deleteLandlordSuccess')
  $('#lanlord-div').empty()
  for (let i = 0; i < data.landlord.length; i++) {
    const name = data.landlord[i].name
    const comment = data.landlord[i].body
    template.landlordsHandlebars(name, comment)
  }
}

const updateLandlordFailure = (error) => {
  console.log(error)
  console.log('Failed in deleteLandlordFailure')
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  changePasswordfailure,
  changePasswordSuccess,
  logOutFailure,
  logOutSuccess,
  getAllLandlordsSuccess,
  getAllLandlordsFailure,
  getAllCommentsSuccess,
  getAllCommentsFailure,
  getOneCommentSuccess,
  getAllMyCommentsSuccess,
  getAllMyCommentsFailure,
  createLandlordSuccess,
  createCommentSuccess,
  createCommentFailure,
  createLandlordFailure,
  deleteCommentSuccess,
  deleteLandlordSuccess,
  deleteCommentFailure,
  deleteLandlordFailure,
  updateCommentSuccess,
  updateCommentFailure,
  updateLandlordSuccess,
  updateLandlordFailure
}
