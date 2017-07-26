import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; //it let me interact with the file system using Node


//first test using CHAI
describe('My first test', () => {
 it('should pass', () => {
   expect(true).to.equal(true);
 });
});

//second test using jsdom
describe('index.html', () => {
  it('should say users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done(); //tell mocha that the test is done
      window.close();
    });
  });
});
