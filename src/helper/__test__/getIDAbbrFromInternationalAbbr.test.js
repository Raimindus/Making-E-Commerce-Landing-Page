import getIDAbbrFromInternationalAbbr from '../getIDAbbrFromInternationalAbbr';

describe('getIDAbbrFromInternationalAbbr', () => {
  it('should return WIB', () => {
    expect(getIDAbbrFromInternationalAbbr('GMT+7')).toBe('WIB');
  });

  it('should return WITA', () => {
    expect(getIDAbbrFromInternationalAbbr('GMT+8')).toBe('WITA');
  });

  it('should return WIT', () => {
    expect(getIDAbbrFromInternationalAbbr('GMT+9')).toBe('WIT');
  });

  it('should return GMT+10', () => {
    expect(getIDAbbrFromInternationalAbbr('GMT+10')).toBe('GMT+10');
  });
});

