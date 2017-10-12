'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events.js')
require('./handlebars-data')
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('click', events.onSignOut)
  $('#changePassword').on('submit', events.onChangePassword)
  $('#alllandlords').on('click', events.onGetAllLandlords)
  $('#get-every-landlords').on('click', events.onGetAllLandlords)
  $('#get-my-landlords').on('click', events.onGetMyLandlords)
  $('#landlord_name').on('submit', events.onCreateLandlord)
  $('#comment_form').on('submit', events.onCreateComment)
  $('#random').on('click', events.onGetAllMyComments)
  $('#update_landlord_form').on('submit', events.onUpdateLandlord)
  $('#update_comment_form').on('submit', events.onUpdateComment)
  $('#alllandlors').on('click', function () {
    $('#landlords_page').show()
  })
  $('form').on('submit', function () {
    $('input').val('')
    $('#message').empty()
  })

  $('#landlords_page, #comments_page, #create_landlord, #create_comment, #update_landlord, #update_Comment').hide()

  // landlords view
  $('#get-every-landlords').on('click', function () {
    $('#landlords_page').show()
    $('#message').empty()
    $('#comments_page, #create_landlord, #create_comment, #update_landlord, #update_comment').hide()
  })
  $('#get-my-landlords').on('click', function () {
    $('#landlords_page').show()
    $('#message').empty()
    $('#comments_page, #create_landlord, #create_comment, #update_landlord, #update_comment').hide()
  })
  // comments view
  $('#listOfComments').on('click', function () {
    $('#comments_page').show()
    $('#message').empty()
    $('#landlords_page, #create_posts, #create_pages, #update_posts, #update_pages').hide()
  })
  // create landlords view
  $('#show-landlord-create').on('click', function () {
    $('#create_landlord').show()
    $('#message').empty()
    $('#landlords_page, #comments_page, #create_comment, #update_landlord, #update_comment').hide()
  })

  // create comments view
  $('#show-comment-create').on('click', function () {
    $('#create_comment').show()
    $('#message').empty()
    $('#landlords_page, #comments_page, #create_landlord, #update_landlord, #update_comment').hide()
  })
})

$(document).on('click', '.landlordEditButton', events.onUpdateLandlordSaveId)
$(document).on('click', '.commentEditButton', events.onUpdateCommentSaveId)
$(document).on('click', '#comments-dropdown-comment-subject', events.onGetOneComment)
$(document).on('click', '.commentsDeleteButton', events.onDeleteComment)
$(document).on('click', '.landlordsDeleteButton', events.onDeleteLandlord)
$(document).on('click', '.commentEditButton', function () {
  $('#update_comments').show()
})
$(document).on('click', '.landlordEditButton', function () {
  $('#update_landlord').show()
})

$('.landlordsEditButton, .landlordsDeleteButton').hide()
