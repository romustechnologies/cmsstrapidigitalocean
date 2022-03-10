module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '50702dfb31636dc39e4dff7efe0d05a0'),
  },
});
