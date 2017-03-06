const db = require('APP/db');
const Promise = require('bluebird');


const seedUsers = () => db.Promise.map([
  {name: 'Mary Poppins', email: 'super@example.com', password: '1234', dob: '1970-11-17', contact_id: 1},
  {name: 'Tony Tiger', email: 'frosted@example.com', password: '1234', dob: '1986-04-01', contact_id: 2},
  {name: 'Grandmother Willow', email: 'listenwithheart@example.com', password: '1234', dob: '1684-01-01', shipping_id: 3}
], user => db.model('users').create(user, {hooks: true}));


const seedSellers = () => db.Promise.map([
  {breweryName: 'Buzzed While Brewing', description: 'Beer so good, we can\'t work without drinking it!', user_id: 1},
  {breweryName: 'Frosted Lakes', description: 'Beer\'s grrrrrreat!', user_id: 2}
], seller => db.model('sellers').create(seller));


const seedAddresses = () => db.Promise.map([
  {streetAddress: '321 Horse Race Road', city: 'Painting On The', state: 'SW', zipCode: '54321', phoneNumber: '1234567890'},
  {streetAddress: '425 Super Flakey Street', city: 'Cartoon City', state: 'TV', zipCode: '11111', phoneNumber: '2345678901'},
  {streetAddress: '199 Willow Way', city: 'Middle of the Forest', state: 'WD', zipCode: '22222', phoneNumber: '0987654321'}
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
  ], brewType => db.model('brewTypes').create(brewType));


const seedFlavors = () => db.Promise.map([
  {name: 'bitter'},
  {name: 'hoppy'},
  {name: 'sharp'},
  {name: 'dark'},
  {name: 'refreshing'},
  {name: 'rich'},
  {name: 'robust'},
  {name: 'complicated'},
  {name: 'mild'},
  {name: 'citrus-tinged'},
  {name: 'creamy'},
  {name: 'hints of caramel'},
  {name: 'fruity edges'},
  ], flavor => db.model('flavors').create(flavor));


const seedUnits = () => db.Promise.map([
  {name: 'growler'},
  {name: 'six-pack'},
  ], unit => db.model('units').create(unit));

  const seedCartProductQtys = () => db.Promise.map([
  {quantity: 2,
   cart_id: 1,
   product_id: 1,
   },
  ], cartProductQty => db.model('cartProductQtys').create(cartProductQty));


const seedProducts = () => db.Promise.map([
  {name: 'Penguin Popper Ale', flavor: ['nutty', 'caramel'], description: 'So good, your penguin waiter might take a sip first', price: 19.95, unit_id: 1, seller_id: 1, brew_id: 6, inventory_id: 1},
  ], product => db.model('products').create(product));

  const seedInventories = () => db.Promise.map([
  {qtyAvailable: 20, qtySold: 5, lastPurchaed: '2015-02-09'},
  ], inventory => db.model('inventories').create(inventory));


const seedPhotos = () => db.Promise.map([
  {source: 'this is a photo url', caption: 'Some dang good beer', product_id: 1, seller_id: 1},
  {source: 'this is a second photo url', caption: 'Your penguin waiter will definitely take a sip', product_id: 1, seller_id: 1}
  ], photo => db.model('photos').create(photo));


const seedReviews = () => db.Promise.map([
  {writeUp: 'Definitely a must-try! Just trust me, you NEED to buy this!', stars: 5, product_id: 1, user_id: 3},
  {writeUp: 'Eh... It was okay. Not super impressive, but I might consider buying again.', stars: 3, product_id: 1, user_id: 2}
  ], review => db.model('reviews').create(review));


const seedCarts = () => db.Promise.map([
  { session: '1234',
    lastEdited: '2015-02-09',
    status: 'Purchased',
    user_id: 3},
  ], cart => db.model('carts').create(cart));


const seedOrders = () => db.Promise.map([
  { date: '2015-02-09',
    mailedOn: '2015-02-10',
    status: 'Completed',
    cart_id: 1},
  ], order => db.model('orders').create(order));


db.didSync
  .then(() => db.sync({force: true}))
  .then(() => Promise.all([seedUsers(), seedAddresses(), seedBrewTypes(), seedFlavors(), seedUnits()]))
  .then(() => Promise.all([seedSellers()]))
  .then(() => Promise.all([seedProducts()]))
  .then(() => Promise.all([seedPhotos(), seedReviews(), seedCarts(), seedOrders(), seedCartProductQtys(), seedInventories()]))
  .then(() => {
    console.log(`Data seeded successfully`);
  })
  .catch(error => console.error(error))
  .finally(() => db.close());
