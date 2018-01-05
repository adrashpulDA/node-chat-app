const expect = require('expect');
const { Users } = require('./Users');

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '126u76',
            name: 'Artem',
            room: 'Some Room'
        };

        var resUser = users.addUser(user);

        expect(users.users).toMatchObject([resUser]);
    });
});