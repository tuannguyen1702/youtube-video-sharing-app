export default () => ({
  server: {
    host: process.env.APP_HOST || '0.0.0.0',
    port: process.env.APP_PORT || 3001,
  },
  mongodb: {
    url:
      process.env.MONGODB_CONNECTION_STRING ||
      'mongodb://localhost:27017/video_sharing_app',
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  typeorm: {
    logging: true,
    synchronize:
      process.env.TYPEORM_AUTO_SYNC_SCHEMA_DATABASE === 'true' || false,
  },
});
