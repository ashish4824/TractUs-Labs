exports.seed = async function(knex) {
  await knex('contracts').del()
  await knex('contracts').insert([
    {
      client_name: 'Client A',
      contract_id: 'CON-001',
      status: 'pending',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      client_name: 'Client B',
      contract_id: 'CON-002',
      status: 'finalized',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      client_name: 'Client C',
      contract_id: 'CON-003',
      status: 'canceled',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
