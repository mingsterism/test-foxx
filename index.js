'use strict';
const createRouter = require('@arangodb/foxx/router');

const router = createRouter();
module.context.use(router);

router.get('/', (req, res) => {
  res.write('Hello Worldssseee!')
})
.response(['text/plain']);
