module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: null,
  database: 'gobarber',
  schema: 'public',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
