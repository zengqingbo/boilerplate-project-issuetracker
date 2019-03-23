/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';
require('dotenv').config();
var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;

const CONNECTION_STRING = process.env.DB; //MongoClient.connect(CONNECTION_STRING, function(err, db) {});

module.exports = function (app) {

  MongoClient.connect(CONNECTION_STRING, function(err, db) {

    app.route('/api/issues/:project')

    .get(function (req, res){
      var project = req.params.project;

    })

    .post(function (req, res){
      var project = req.params.project;
      db.collection(project).insertOne({
        issue_title: req.query.issue_title,
        issue_text: req.query.issue_text,
        created_by: req.query.created_by,
        assigned_to: req.query.assigned_to,
        status_text: req.query.status_text
      },function(err, r) {

      });
    })

    .put(function (req, res){
      var project = req.params.project;

    })

    .delete(function (req, res){
      var project = req.params.project;

    });


  })

};
