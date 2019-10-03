
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('qcp').del()
    .then(function () {
      // Inserts seed entries
      return knex('qcp').insert([
        {   qcp_number: 1, 
            date_raised: '20/6/2019', 
            raised_by: 'Goku', 
            test_code: 'M0100-01', 
            factory: '1270', 
            spec: '334513', 
            batch: '2295689201', 
            unit: 'A0001', 
            concerning: 'Vegeta', 
            reason: 'Dups Out', 
            action: 'Retest in dups + higher', 
            results_due: '26/6/2019', 
            reviewed: false},
        {   qcp_number: 2, 
            date_raised: '21/6/2019', 
            raised_by: 'Trunks', 
            test_code: 'M2500-02', 
            factory: '6072', 
            spec: '445232', 
            batch: '2289031401', 
            unit: 'M0042', 
            concerning: 'Gohan', 
            reason: 'Contamination', 
            action: 'Retest in dups + higher', 
            results_due: '24/6/2019', 
            reviewed: false},
        {   qcp_number: 3, 
            date_raised: '21/6/2019', 
            raised_by: 'Goku', 
            test_code: 'M0800-27', 
            factory: '7382', 
            spec: '676981', 
            batch: '2296789201', 
            unit: 'P0003', 
            concerning: 'Gohan', 
            reason: 'Procedure Not Followed', 
            action: 'Retest', 
            results_due: '24/6/2019', 
            reviewed: false}
      ]);
    });
};
