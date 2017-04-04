
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('user_id').primary();
      table.string('category').notNullable().defaultTo('student');
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('name').notNullable();
      table.string('country').notNullable();
      table.string('sex').notNullable();
      table.bigInteger('age').notNullable();
      table.string('description');
      table.string('picture').defaultTo('http://www.freeiconspng.com/uploads/grab-vector-graphic-person-icon--imagebasket-13.png');
      table.timestamp('registered_at').notNullable().defaultTo(knex.raw('now()'));
    })
    .then(function(){
      return knex('users').insert([
        {
          name : 'First user',
          category : "student",
          email : 'test@gmail.com',
          country : 'france',
          sex : 'M',
          age : 12,
          picture : 'https://cdn0.iconfinder.com/data/icons/customers-and-service/512/6.png',
          password : 'test',
          description : 'Je suis un élève qui veut apprendre l\'informatique'
        },{
          name : 'Admin',
          category : "teacher",
          email : 'admin@gmail.com',
          country : 'france',
          sex : 'M',
          age : 12,
          picture : 'https://image.freepik.com/free-icon/person-teacher_318-29324.jpg',
          password : 'admin',
          description : 'Je veux apprendre les Maths'
        }
      ]);
    })]);
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
