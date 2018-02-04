import { Meteor } from 'meteor/meteor';
import { PublicationWithoutArgs } from 'meteor-publication';
import Vue from 'vue';

(Vue.config as any).meteor.subscribe = function (index: any, publication: PublicationWithoutArgs<any, any> | string) {
  if (typeof publication === 'string') {
    return Meteor.subscribe(publication);
  }
  return publication.subscribe();
};
