const expect = require('expect');
const { Users } = require('./Users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Simon',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Jake',
            room: 'Node Course'
        }];
    });

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

    it('should return names for nodes course', () => {
        var usersList = users.getUserList('Node Course');

        expect(usersList).toMatchObject(['Mike', 'Jake']);
    });

    it('should return names for react course', () => {
        var usersList = users.getUserList('React Course');

        expect(usersList).toMatchObject(['Simon']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        console.log(users);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '77';
        
        var user = users.removeUser(userId);

        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '-1';
        var user = users.getUser(userId);

        expect(user).toBeUndefined();
    });
});