const axios = require('axios');
const UniversalRouter = require('universal-router');

module.exports = new UniversalRouter([
  {
    path: '/home',
    action: (req) => {
      const component = require('./components/home');
      return { component, data: { req, action: 'home' } }
    }
  },
  {
    path: '/user-list',
    action: async (req) => {
      const component = require('./components/user-list');
      const {data: users} = await axios.get('http://localhost:8080/api/users');
      return { component, page: 'user-list', data: { req, users, action: 'user-list' } };
    }
  },
  {
    path: '/users/:id',
    action: async (req) => {
      const component = require('./components/user');
      const {data: user} = await axios.get(`http://localhost:8080/api/users/${req.params.id}`);
      return { component, data: { req, user, action: 'user' } };
    }
  },
  { path: '(.*)', action: () => ({ page: 'notFound', data: { action: 'not-found' } }) }
])
