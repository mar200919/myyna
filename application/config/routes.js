/* 
 * Routes.
 * Add your routes here
 * 
 * @version 1.0
 * @author Robin <robin@cubettech.com>
 * @Date 23-10-2013
 */

exports.routes  = [
    {route: '/', controller: 'user', action: 'login', fn: 'userLoginPreCheck'},
    {route: '/logout', controller: 'user', action: 'logout'},
    {route: '/login', controller: 'user', action: 'login', fn: 'userLoginPreCheck'},
    {route: '/socialsignup', controller: 'user', action: 'socialsignup'},
    {route: '/logincheck', controller: 'user', action: 'logincheck', type: 'POST'},
    {route: '/signup', controller: 'user', action: 'signup'},
    {route: '/userlist', controller: 'user', action: 'userList', fn: 'login_validate'},
    {route: '/auth', controller: 'user', action: 'auth'},
    {route: '/twittersignup', controller: 'user', action: 'twittersignup'},
    {route: '/twitterauth', controller: 'user', action: 'twitterauth'},
    {route: '/usersignup', controller: 'user', action: 'usersignup', type: 'POST'},
    {route: '/twitteruser', controller: 'user', action: 'twitteruser', type: 'POST'},
    {route: '/mailverify', controller: 'user', action: 'mailVerification'},
    {route: '/closeSignup', controller: 'user', action: 'closeSignup'},
    {route: '/settings', controller: 'user', action: 'Settings', fn: 'login_validate'},
    {route: '/changesettings', controller: 'user', action: 'changeSettings', type: 'POST', fn: 'login_validate'},
    {route: '/followuser', controller: 'user', action: 'followUser', type: 'POST', fn: 'login_validate'},
    {route: '/unFollowuser', controller: 'user', action: 'unFollowUser', type: 'POST', fn: 'login_validate'},
    {route: '/forgotaction', controller: 'user', action: 'forgotaction', type: 'POST'},
    {route: '/socialshare', controller: 'user', action: 'socialShare'},
    {route: '/uservalidation', controller: 'user', action: 'userNameChack', type: 'POST'},
    {route: '/emailvalidation', controller: 'user', action: 'EmailValidation', type: 'POST'},
   
    
    {route: '/webpins', controller: 'pin', action:'webpin',fn:'login_validate'},
    {route: '/pinpage', controller: 'pin', action:'pins', type:'POST',fn:'login_validate'},
    {route: '/nextpage', controller: 'pin', action:'morepins',type:'POST',params:[':list']},
    {route: '/pinlike', controller: 'pin', action:'pinLike',type:'POST',fn:'login_validate'},
    {route: '/pinunlike', controller: 'pin', action:'pinUnlike',type:'POST',fn:'login_validate'},
    {route: '/createcomment', controller: 'pin', action:'createComment',type:'POST'},
    {route: '/screenshot', controller: 'pin', action:'screenshot', type:'POST'},
    {route: '/pins', controller: 'pin', action:'list'},
    {route: '/mostrepin', controller: 'pin', action:'mostRepin', fn:'login_validate'},
    {route: '/mostlike', controller: 'pin', action:'mostLike', fn:'login_validate'},
    {route: '/repin', controller: 'pin', action:'repin', type:'POST',fn:'login_validate'},
    {route: '/repinload', controller: 'pin', action:'repinload',params:[':pid'],fn:'login_validate'},
    {route: '/report', controller: 'pin', action:'report', type:'POST',fn:'login_validate'},
    {route: '/reportload', controller: 'pin', action:'reportPinLoad',params:[':pid'],fn:'login_validate'},
    {route: '/removeNotification', controller: 'pin', action:'removeNotification',fn:'login_validate'},
    {route: '/videodescription', controller: 'pin', action: 'YoutubeDescription', type: 'POST'},
//    {route: '/sharepinload', controller: 'pin', action:'sharePinLoad'},
//    {route: '/sharepin', controller: 'pin', action:'InitialshareSave', type:'POST'},
//    {route: '/imagelist', controller: 'pin', action:'imageList', type:'POST'},
//    {route: '/videolist', controller: 'pin', action:'videoList', type:'POST'},
//    {route: '/audiolist', controller: 'pin', action:'audioList', type:'POST'},
//    {route: '/loadPins', controller: 'pin', action:'loadThirdpartyShare',fn:'login_validate',params:[':share_id']},
//    
    {route: '/addpin', controller: 'image_upload', action:'addpin',fn:'login_validate'},
    {route: '/post_url', controller: 'urlfetch', action:'post_url', type: 'POST'},
    {route: '/select_action', controller: 'urlfetch', action:'select_action', type: 'POST'},
    {route: '/pin_action', controller: 'urlfetch', action:'pin_action', type: 'POST'},
    {route: '/webpinspage', controller: 'webpin', action:'webpin', fn:'name1'},
    {route: '/image_upload', controller: 'image_upload', action:'browse_image',fn:'login_validate'},
    {route: '/upload_action', controller: 'image_upload', action:'upload_action',type: 'POST'},
    {route: '/webaudio_upload', controller: 'webaudio_upload', action:'webaudio_form',fn:'login_validate'},
    {route: '/webaudio_action', controller: 'webaudio_upload', action:'webaudio_action',type:'POST'},
    {route: '/addboard', controller: 'board', action: 'board_form'},
    {route: '/board_action', controller: 'board', action: 'board_action', type: 'POST'},
    {route: '/boards', controller: 'board', action: 'boardList'},
    {route: '/followboard', controller: 'board', action: 'followBoard', type: 'POST'},
    {route: '/unfollowboard', controller: 'board', action: 'unFollowBoard', type: 'POST'},
    {route: '/category', controller: 'pin', action: 'listByCategory', params: [':catid']},
    {route: '/board', controller: 'pin', action: 'listByBoard', params: [':bid']},
    {route: '/user', controller: 'pin', action: 'listByUser', params: [':uid', ':bid'], fn: 'login_validate'},
    {route: '/pin', controller: 'pin', action: 'popup', params: [':pid', ':popup']},
    {route: '/upin_nxtpg', controller: 'pin', action: 'more_userpins', type: 'POST'},
    {route: '/nextboardpins', controller: 'pin', action: 'morePinsByBoard', type: 'POST'},
    {route: '/nextdomainpins', controller: 'pin', action:'morePinsByDomain',type:'POST'},
//    {route: '/sharer', controller: 'pin', action: 'sharejs'},

    //admin side
    {route: '/admin', controller: 'admin/adminuser', action: 'login', fn: 'adminLoginPreCheck'},
    {route: '/admin/adminauth', controller: 'admin/adminuser', action: 'adminAuth', type: 'POST'},
    {route: '/admin/dashboard', controller: 'admin/adminuser', action: 'dashboard', fn: 'adminLoginCheck'},
    {route: '/admin/logout', controller: 'admin/adminuser', action: 'logout'},
    {route: '/admin/viewadmins', controller: 'admin/adminuser', action: 'viewAdminUsers', fn: 'adminLoginCheck'},
    {route: '/admin/addadmin', controller: 'admin/adminuser', action: 'addAdminUsers', fn: 'adminLoginCheck'},
    {route: '/admin/addadminpost', controller: 'admin/adminuser', action: 'addAdminUsersPost', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/checkusername', controller: 'admin/adminuser', action: 'checkUsername', fn: 'adminLoginCheck', params: [':username']},
    {route: '/admin/deleteadmin', controller: 'admin/adminuser', action: 'deleteAdminUser', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/editadmin', controller: 'admin/adminuser', action: 'editAdminUser', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/updateadminuser', controller: 'admin/adminuser', action: 'updateAdminUsersPost', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/resetpwdadminuser', controller: 'admin/adminuser', action: 'ResetPassword', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/viewusers', controller: 'admin/user', action: 'viewUsers', fn: 'adminLoginCheck'},
    {route: '/admin/adduser', controller: 'admin/user', action: 'addUsers', fn: 'adminLoginCheck'},
    {route: '/admin/adduserpost', controller: 'admin/user', action: 'addUsersPost', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/ucheckusername', controller: 'admin/user', action: 'checkUsername', fn: 'adminLoginCheck', params: [':username']},
    {route: '/admin/deleteuser', controller: 'admin/user', action: 'deleteUser', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/edituser', controller: 'admin/user', action: 'editUser', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/updateuser', controller: 'admin/user', action: 'updateUsersPost', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/blockuser', controller: 'admin/user', action: 'blockUser', fn: 'adminLoginCheck', params: [':type', ':id']},
    {route: '/admin/resetpwduser', controller: 'admin/user', action: 'ResetPassword', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/blockedusers', controller: 'admin/user', action: 'blockedUsers', fn: 'adminLoginCheck'},
    {route: '/admin/general-settings', controller: 'admin/settings', action: 'general', fn: 'adminLoginCheck'},
    {route: '/admin/update-general-settings', controller: 'admin/settings', action: 'updateGeneral', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/social-settings', controller: 'admin/settings', action: 'social', fn: 'adminLoginCheck'},
    {route: '/admin/update-social-settings', controller: 'admin/settings', action: 'updateSocial', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/viewpins', controller: 'admin/pins', action: 'viewPins', fn: 'adminLoginCheck'},
    {route: '/admin/deletepin', controller: 'admin/pins', action: 'deletePin', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/blockpin', controller: 'admin/pins', action: 'blockPin', fn: 'adminLoginCheck', params: [':type', ':id']},
    {route: '/admin/blockedpins', controller: 'admin/pins', action: 'blockedPins', fn: 'adminLoginCheck'},
    {route: '/admin/cleanpin', controller: 'admin/pins', action: 'cleanPin', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/reportedpins', controller: 'admin/pins', action: 'reportedPins', fn: 'adminLoginCheck'},
    {route: '/admin/addboard', controller: 'admin/pins', action: 'addBoard', fn: 'adminLoginCheck'},
    {route: '/admin/editboard', controller: 'admin/pins', action: 'addBoard', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/addboardpost', controller: 'admin/pins', action: 'addBoardPost', fn: 'adminLoginCheck', type: 'POST'},
    {route: '/admin/viewboards', controller: 'admin/pins', action: 'showBoards', fn: 'adminLoginCheck'},
    {route: '/admin/lockboard', controller: 'admin/pins', action: 'LockBoard', fn: 'adminLoginCheck', params: [':type', ':id']},
    {route: '/admin/deleteboard', controller: 'admin/pins', action: 'deleteBoard', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/addcategory', controller: 'admin/pins', action: 'addCategory', fn: 'adminLoginCheck'},
    {route: '/admin/editcategory', controller: 'admin/pins', action: 'addCategory', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/addcategoyrpost', controller: 'admin/pins', action: 'addCategoryPost', fn: 'adminLoginCheck', type: "POST"},
    {route: '/admin/viewcategories', controller: 'admin/pins', action: 'showCategories', fn: 'adminLoginCheck'},
    {route: '/admin/deletecategory', controller: 'admin/pins', action: 'deleteCategory', fn: 'adminLoginCheck', params: [':id']},
    {route: '/admin/pinpagination', controller: 'admin/pins', action: 'pinPagination',params: [':blocktype']}
    
]

exports.commonRouteFunctions = ['DefineLocals'];

