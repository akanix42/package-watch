import { Mongo } from 'meteor/mongo';

export interface IScan {
  _id?: string,
  isFinished?: boolean,
  status: string,
  url: string,
}

const scansCollection = new Mongo.Collection<IScan>('scans');

export default scansCollection;
