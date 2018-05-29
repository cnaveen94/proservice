'use strict';
module.exports = function(app) {
    // var todoList = require('../controller/proAppController');
    var getProfile = require('../controller/proAppController');

    app.route('/profile')
        .get(getProfile.list_all_profiles)
        .post(getProfile.create_a_profile);

    // app.route('/profile/:list')
    //     .get(todoList.list_all_tasks)
    //     .post(todoList.create_a_task);
    //
    //
    // // todoList Routes
    // app.route('/list')
    //     .get(todoList.list_all_tasks)
    //     .post(todoList.create_a_task);
    //
    //
    // app.route('/list/:listId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};