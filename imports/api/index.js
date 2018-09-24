import { Mongo } from 'meteor/mongo';

export const FingerprintCollection = new Mongo.Collection('FINGERPRINT');

export const AccelerationCollection = new Mongo.Collection('ACCELERATION');

export const VelocityCollection = new Mongo.Collection('VELOCITY');
