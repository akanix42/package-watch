import Publication from 'meteor-publication';
import scansCollection from '../collections/scans';

export default new Publication('scan/progress', function (scanId) {
  return scansCollection.find({ _id: scanId });
});
