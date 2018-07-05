import { expect } from 'chai';

import { parseHeaderForLinks } from '../../../react-simlife';

describe('parseHeaderForLinks', () => {
  it('should throw an error when passed an empty string', () => {
    expect(() => parseHeaderForLinks('')).to.throw(Error, 'input must not be of zero length');
  });

  it('should throw an error when passed without comma', () => {
    expect(() => parseHeaderForLinks('test')).to.throw(Error, 'section could not be split on ";"');
  });

  it('should throw an error when passed without semicolon', () => {
    expect(() => parseHeaderForLinks('test,test2')).to.throw(Error, 'section could not be split on ";"');
  });

  it('should return links when headers are passed', () => {
    const links = { last: 0, first: 0 };
    expect(parseHeaderForLinks('</api/audits?page=0&size=20>; rel="last",</api/audits?page=0&size=20>; rel="first"')).to.eql(links);
  });
});
