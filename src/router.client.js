const history = require('./history')
const router = require('./router')



const render = async (location) => {
  alert(1)
  const route = await router.resolve(location);
  const component = require(`./components/${route.page}.`);
}

history.listen(render)
