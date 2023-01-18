import Model, { hasMany } from '@ember-data/model';

export default class FooModel extends Model {
  @hasMany('bar', { async: false, inverse: null }) bars;
}
