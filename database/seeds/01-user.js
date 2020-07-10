
exports.seed = function(knex) {
  return knex('user').insert([
    {username: 'random', password: 'random'},
    {username: 'jimmy', password: 'john'}
  ])
}
