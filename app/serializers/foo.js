import RESTSerializer, {
  EmbeddedRecordsMixin,
} from '@ember-data/serializer/rest';

export default class FooSerializer extends RESTSerializer.extend(
  EmbeddedRecordsMixin
) {
  attrs = {
    bars: {
      embedded: 'always',
    },
  };
}
