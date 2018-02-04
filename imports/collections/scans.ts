import { Mongo } from 'meteor/mongo';

export interface IScan {
  url: string,
}

const scansCollection = new Mongo.Collection<IScan>('scans');

export default scansCollection;
