const axios = require('axios');
const UniversalRouter = require('universal-router');

module.exports = new UniversalRouter([
  { path: '/home', action: (req) => ({ page: 'home' }) },
  {
    path: '/user-list',
    action: async (req) => {
      const {data: users} = await axios.get('http://localhost:8080/api/users');
      return { page: 'user-list', data: { users } };
    }
  },
  {
    path: '/users/:id',
    action: async (req) => {
      const {data: user} = await axios.get(`http://localhost:8080/api/users/${req.params.id}`);
      return { page: 'user', data: { req, user } };
    }
  },
  { path: '(.*)', action: () => ({ page: 'notFound' }) }
])
