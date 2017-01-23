
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "monster_truck"; ALTER SEQUENCE monster_truck_id_seq RESTART WITH 6')
  .then(()=>{
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
  })
  .then(()=>{
    return Promise.all([
      knex("user").insert([{
        id:1,
        'f_name':'Dillon',
        'email':'dcorkran972@gmail.com',
        'password':'test'
      },{
        id:2,
        'f_name':'Steve',
        'email':'Steve@gmail.com',
        'password':'test'
      }]),
      knex('monster_truck').insert([{
        'name':'Grave Digger',
        'size':'XXXL',
        'color':'Green',
        'user_id':1,
      },{
        'name':'Tall Cold One',
        'size':'XL',
        'color':'Blue',
        'user_id':2,
      },{
        'name':'Mean Machine',
        'size':'M',
        'color':'Black',
        'user_id':2,
      },{
        'name':'The Tempest',
        'size':'XL',
        'color':'Blue',
        'user_id':1,
      },{
        'name':'Grave Digger 2',
        'size':'XXXXXXXL',
        'color':'Purple',
        'user_id':1,
      }])
    ])
  })
};
