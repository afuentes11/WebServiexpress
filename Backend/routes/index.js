const routerUsers = require('./usersRoutes');
const routerMockUsers = require('./mockUserRoute')

function APIRoutes(app){
    app.use('/users',routerUsers);
    app.use('/mock/users',routerMockUsers);
}

module.exports = APIRoutes