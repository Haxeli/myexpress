const db = require('../database');

const course = {
  getAllcourses: function(callback) {
    return db.query('select * from course', callback);
  } ,
  getById: function(id, callback) {
    return db.query('select * from course where idcourse=?', [id], callback);
  } ,
  add: function(course, callback) {
    return db.query(
      'insert into course (name,credits) values(?,?)',
      [course.name, course.credits],
      callback
    ) ;
  } ,
  delete: function(id, callback) {
    return db.query('delete from course where idcourse=?', [id], callback);
  } ,
  update: function(id, course, callback) {
    return db.query(
      'update course set name=?, credits=? where idcourse=?',
      [course.name, course.credits, id],
      callback
    ) ;
  }
} ;
module.exports = course;