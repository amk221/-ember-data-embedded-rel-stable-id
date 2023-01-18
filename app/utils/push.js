export default function pushPayload(store, modelName, rawPayload) {
  const ModelClass = store.modelFor(modelName);
  const serializer = store.serializerFor(modelName);
  const jsonApiPayload = serializer.normalizeResponse(
    store,
    ModelClass,
    rawPayload,
    null,
    'query'
  );

  return store.push(jsonApiPayload);
}
