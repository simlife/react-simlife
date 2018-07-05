import { expect } from 'chai';

import { size, byteSize } from '../../../react-simlife';

describe('Data utils', () => {
  describe('size', () => {
    it('should return the correct size', () => {
      const data = 'Hello Chipster';
      expect(size(data)).to.equals(10.5);
      expect(size('')).to.equals(0);
    });
  });

  describe('byteSize', () => {
    it('should return the correct value', () => {
      const data = 'Hello Chipster';
      expect(byteSize(data)).to.equals('10.5 bytes');
      expect(byteSize('')).to.equals('0 bytes');
    });
  });
});
