exports.up = function(knex) {
    return knex.schema.createTable('contracts', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('client_name').notNullable();
      table.string('contract_id').unique().notNullable();
      table.enu('status', ['pending', 'finalized', 'canceled']).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contracts');
  };
  