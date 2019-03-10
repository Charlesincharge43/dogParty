const db = require('./db').db;
const Party = require('./db').Party;

db.sync()
  .then(()=>{
    /* eslint-disable no-console */
    console.log('db has synced. seeding');
    /* eslint-enable no-console */

    return Party.destroy({
      where: {},
      truncate: true
    });
  })
  .then(() => {
    return Promise.all([
      Party.create({capacity: 5, location: '1234 fake street, Evanston, IL', date: 1581746400000, event: `Charles' Pool PAWty`}),
      Party.create({capacity: 3, location: '4321 phony ave, Key West, FL', date: 1581487200000, event: 'Huskies only!'}),
      Party.create({capacity: 2, location: '6789 ersatz blvd, Boston, MA', date: 1581400800000, event: 'Boston Retrievers convention'}),
    ]);
  })
  .then(() => {
    /* eslint-disable no-console */
    console.log('seed successful!');
    /* eslint-enable no-console */
    process.exit();
  })
  .catch(err => {
    /* eslint-disable no-console */
    console.error(err);
    /* eslint-enable no-console */
    process.exit();
  });
