import Method from 'meteor-method';
import scansCollection, { IScan } from '../collections/scans';

const requestScan = new Method('scan/request', ({url}): IScan | string => {
  let scan;
  if (scan = scansCollection.findOne({url})) {
    return scan;
  }
  return scansCollection.insert(url);
});

export default requestScan;
