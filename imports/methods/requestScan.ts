import Method from 'meteor-method';
import scansCollection, { IScan } from '../collections/scans';

interface IFinishedScanResult {
  _id: string,
  isFinished: boolean,
}

const requestScan = new Method('scan/request', ({ url }): IFinishedScanResult | string => {
  let scan;
  if (scan = scansCollection.findOne({ url })) {
    if (scan.isFinished)
      return { _id: scan._id, isFinished: true };
  }

  return simulateScan(scansCollection.insert({
    status: 'queued',
    url,
  }));
});

export default requestScan;

function simulateScan(scanId: string): string {
  return scanId;
}
