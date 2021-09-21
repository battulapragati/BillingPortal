const request = require('supertest');
const app = require('../index')
const error = require('../routes/functions/errors');

describe('Oauth Apis', ()=>{
    it('resiter password check', ()=>{
    
    });

});
/**
const request = require('supertest');

const app = require("../app");
var mongoUtil = require( '../mongoUtil.js' );

beforeEach(async () => {
 await  mongoUtil.connectToServer()


});

afterAll(async ()=>{ 
  
  await mongoUtil.disConnect()

});



/// -----
describe('GET /apitest', function() {
  it('responds with html', function(done) {
    request(app)
      .get('/users/login')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
      
  });
});



describe('POST /apitest/searchBar', function() {

  it('responds with json data', function(done) {


    request(app)
      .post('/apitest/searchBar')
      .send({state: 'customer:A'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  });
});


describe('GET /apitest/getBill/:id', function() {

  it('responds with json data', function(done) {


    request(app)
      .get('/apitest/getBill/'+1)  //route params to be sent 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  });
});

describe('GET /apitest/generateInvoice/:id', function() {

  it('responds with json data', function(done) {


    request(app)
      .get('/apitest/generateInvoice/'+1)  //route params to be sent 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
      
  });
});

describe('GET /apitest/getInvoice/:id', function() {

  it('responds with json data', function(done) {


    request(app)
      .get('/apitest/getInvoice/'+'invoice1')  //route params to be sent 
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err,res)=>{
       
        if (err) {
          return done(err);
        }
        expect(Object.values(res.body).length).toBeGreaterThanOrEqual(1)
        return done();

      })
      
  });
});

describe('GET /apitest/charts', function() {

  it('responds with json data', function(done) {


    request(app)
      .get('/apitest/charts')  //route params to be sent 
      .send({state: 'customer:A'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err,res)=>{
       
        if (err) {
          return done(err);
        }
        expect(Object.values(res.body).length).toBeGreaterThanOrEqual(1)
        return done();

      })
      
  });
});

describe('GET /apitest', function() {

    it('responds with json data', function(done) {
  
  
      request(app)
        .get('/apitest')  //route params to be sent 
        .send({state: 'customer:A'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err,res)=>{
         
          if (err) {
            return done(err);
          }
          expect(Object.values(res.body).length).toBeGreaterThanOrEqual(1)
          return done();
  
        })
        
    });
  });

  describe('POST /apitest/searchBar', function() {

    it('responds with json data', function(done) {
  
  
      request(app)
        .post('/apitest/searchBar')
        .send({state: 'invoice:invoice50'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    });
  });

  describe('POST /apitest/searchBar', function() {

    it('responds with json data', function(done) {
  
  
      request(app)
        .post('/apitest/searchBar')
        .send({state: 'bills:1'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    });
  });

  describe('POST /apitest/searchBar', function() {

    it('responds with json data', function(done) {
  
  
      request(app)
        .post('/apitest/searchBar')
        .send({state: 'bills:101'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    });
  });

  describe('POST /apitest/searchBar', function() {

    it('responds with json data', function(done) {
  
  
      request(app)
        .post('/apitest/searchBar')
        .send({state: 'invoice:90'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
        
    });
  });
  **/
