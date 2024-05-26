let schema = null;

const setSchema = (newSchema) => {
  schema = newSchema;
};

const getSchema = () => {
  return schema;
};

module.exports = { setSchema, getSchema };
