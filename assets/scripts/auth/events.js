// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// page funtionality //

// events //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(onGetAllMyComments)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
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

const onGetAllMyLandlords = function (event) {
  event.preventDefault()
  api.getAllMyLandlords()
    .then(ui.getAllMyLandlordsSuccess)
    .catch(ui.getAllMyLandlordsFailure)
}

const onCreateLandlord = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPost(data)
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
  const dataId = this.getAttribute('data-id')
  event.preventDefault()
  api.deleteLandlord(dataId)
    .then(ui.deleteLandlordSuccess)
    .catch(ui.deleteLandlordFailure)
}

const onGetAllComments = function (event) {
  event.preventDefault()
  api.getAllComments()
    .then(ui.getAllCommentsSuccess)
    .catch(ui.getAllCommentsFailure)
}

const onGetAllMyComments = function () {
  // event.preventDefault()
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
  onGetAllMyLandlords,
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
