import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

before( () => {
  chai.use( chaiEnzyme() );
});

