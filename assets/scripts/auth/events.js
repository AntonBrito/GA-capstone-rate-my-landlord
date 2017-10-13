// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const app = require('../app.js')
// page funtionality //

// events //
const signUpSuccess = (data) => {
  app.user = data.user
  console.log(data)
  console.log('signed up Successfully')
  // console.log('I did something in ui.js!')
}

const signUpFailure = (error) => {
  console.log(error)
  console.log('failed to signUp')
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(signUpSuccess)
    .catch(signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  console.log('tryin to sign out')
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onGetAllLandlords = function (event) {
  event.preventDefault()
  api.getAllLandlords()
    .then(ui.getAllLandlordsSuccess)
    .catch(ui.getAllLandlordsFailure)
}

const onGetMyLandlords = function (event) {
  console.log(app.user)
  event.preventDefault()
  api.getMyLandlords()
    .then(ui.getMyLandlordsSuccess)
    .catch(ui.getMyLandlordsFailure)
}

const onCreateLandlord = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createLandlord(data)
    .then(ui.createLandlordSuccess)
    .catch(ui.createLandlordFailure)
}

const onUpdateLandlordSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateLandlordSaveId = ' + dataId)
  event.preventDefault()
  $('#update_landlord_form').attr({
    'data-id': dataId
  })
}

const onUpdateLandlord = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateLandlord dataId = ' + dataId)
  event.preventDefault()
  api.updateLandlord(data, dataId)
    .then(ui.editLandlordSuccess)
    .catch(ui.editLandlordFailure)
}

const onDeleteLandlord = function (event) {
  const data = this.getAttribute('data')
  event.preventDefault()
  debugger
  api.deleteLandlord(data)
    .then(ui.deleteLandlordSuccess)
    .catch(ui.deleteLandlordFailure)
}

const onGetAllComments = function (event) {
  event.preventDefault()
  api.getAllComments()
    .then(ui.getAllCommentsSuccess)
    .catch(ui.getAllCommentsFailure)
}

const onGetAllMyComments = function (event) {
  event.preventDefault()
  console.log(event)
  api.getAllMyComments()
    .then(ui.getAllMyCommentsSuccess)
    .catch(ui.getAllMyCommentsFailure)
}

const onGetOneComment = function (event) {
  console.log('onGetOneComment called')
  const dataId = this.getAttribute('data-id')
  console.log('dataId = ' + dataId)
  api.getOneComment(dataId)
    .then(ui.getOneCommentSuccess)
    .catch(ui.getOneCommentFailure)
}

const onCreateComment = function (event) {
  const data = getFormFields(this)
  console.log('comment to create')
  console.log(data)
  event.preventDefault()
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .then(onGetAllMyComments)
    .catch(ui.createCommentFailure)
}

const onUpdateCommentSaveId = function (event) {
  const dataId = this.getAttribute('data-id')
  console.log('onUpdateCommentSaveId = ' + dataId)
  event.preventDefault()
  $('#update_comments_form').attr({
    'data-id': dataId
  })
}

const onUpdateComment = function (event) {
  const data = getFormFields(this)
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.updateComment(data, dataId)
    .then(ui.updateCommentSuccess)
    .catch(ui.updateCommentFailure)
}

const onDeleteComment = function (event) {
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deleteComment(dataId)
    .then(ui.deleteCommentSuccess)
    .then(onGetAllMyComments)
    .catch(ui.deleteCommentFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onGetAllLandlords,
  onGetMyLandlords,
  onCreateLandlord,
  onUpdateLandlordSaveId,
  onUpdateLandlord,
  onDeleteLandlord,
  onGetAllComments,
  onGetAllMyComments,
  onCreateComment,
  onUpdateCommentSaveId,
  onUpdateComment,
  onGetOneComment,
  onDeleteComment
}
