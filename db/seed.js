const db = require('APP/db');
const Promise = require('bluebird');


const seedUsers = () => db.Promise.map([
  {name: 'Mary Poppins', email: 'super@example.com', password: '1234', dob: '1970-11-17', contact_id: 1},
  {name: 'Tony Tiger', email: 'frosted@example.com', password: '1234', dob: '1986-04-01', contact_id: 2},
  {name: 'Grandmother Willow', email: 'listenwithheart@example.com', password: '1234', dob: '1684-01-01', shipping_id: 3}
], user => db.model('users').create(user));


const seedSellers = () => db.Promise.map([
  {breweryName: 'Buzzed While Brewing', description: 'Beer so good, we can\'t work without drinking it!', user_id: 1},
  {breweryName: 'Frosted Lakes', description: 'Beer\'s grrrrrreat!', user_id: 2}
], seller => db.model('sellers').create(seller));


const seedAddresses = () => db.Promise.map([
  {streetAddress: '321 Horse Race Road', city: 'Painting On The', state: 'Sidewalk', zipCode: '54321', phoneNumber: '1234567890'},
  {streetAddress: '425 Super Flakey Street', city: 'Cartoon City', state: 'TV', zipCode: '11111', phoneNumber: ''},
  {streetAddress: '199 Willow Way', city: 'Middle of the Forest', state: 'Woods', zipCode: '22222', phoneNumber: '0987654321'}
  ], address => db.model('addresses').create(address));


//brews source: http://www.webstaurantstore.com/article/27/different-types-of-beers.html
const seedBrewTypes = () => db.Promise.map([
  {name: 'American Lager', description: 'Light in flavor, color, and alcohol content, and often produced in large quantities.'},
  {name: 'German Pilsner', description: 'Pale gold in color with a medium hop flavor and a slight note of maltiness.'},
  {name: 'Amber American Lager', description: 'Amber lagers feature prevalent malt flavors with varying levels of hoppiness. This beer features a darker color, caramel aroma, and smooth taste.'},
  {name: 'Oktoberfest', description: 'Named for the Oktoberfest celebration in Munich, this is a full-bodied beer with a rich, toasted flavor and a dark copper color.'},
  {name: 'Doppelbock', description: 'Doppelbocks are stronger than the traditional style and boast a higher alcohol content and a fuller body.'},
  {name: 'English Brown Ale', description: 'English brown ales feature a nutty malt flavor with a caramel aroma.'},
  {name: 'American IPA', description: 'American IPAs have more hops, big herbal or citrus flavors, and high bitterness compared to pale ale.'},
  ], brewType => db.model('brewType').create(brewType));


const seedUnits = () => db.Promise.map([
  {name: 'growler'},
  {name: 'six-pack'},
  ], unit => db.model('units').create(unit));


const seedProducts = () => db.Promise.map([
  {name: 'Penguin Popper Ale', flavor: ['nutty', 'caramel'], description: 'So good, your penguin waiter might take a sip first', price: 19.95, quantity: 40, unit_id: 1, seller_id: 1, brew_id: 6},
  ], product => db.model('products').create(product));


db.didSync
  .then(() => db.sync({force: true}))
  .then(Promise.all([seedUsers, seedSellers, seedAddresses, seedBrewTypes, seedUnits, seedProducts]))
  .then(() => console.log(`Data seeded successfully`))
  .catch(error => console.error(error))
  .finally(() => db.close());
