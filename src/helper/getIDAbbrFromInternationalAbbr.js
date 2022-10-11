const getIDAbbrFromInternationalAbbr = (abbr) => {
  if (abbr === 'GMT+7') {
    return 'WIB';
  }
  if (abbr === 'GMT+8') {
    return 'WITA';
  }
  if (abbr === 'GMT+9') {
    return 'WIT';
  }
  return abbr;
};

export default getIDAbbrFromInternationalAbbr;