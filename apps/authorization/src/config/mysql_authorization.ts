export default () => ({
  authorization: {
    mysql: {
      master: {
        host: process.env.AUTHORIZATION_MYSQL_MASTER_HOST || 'localhost',
        port: process.env.AUTHORIZATION_MYSQL_MASTER_PORT || 3360,
        user: process.env.AUTHORIZATION_MYSQL_MASTER_USER || 'root',
        pass: process.env.AUTHORIZATION_MYSQL_MASTER_PASS || '1',
        db: process.env.AUTHORIZATION_MYSQL_MASTER_DB || 'db_authorization',
      },
    },
  },
});
