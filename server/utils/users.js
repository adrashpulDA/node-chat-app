[{
    id: '/1231211@',
    name: 'Artem',
    room: 'Some Room'
}]

class Users {
    constructor(id, name, room) {
        this.users = [];
    }

    addUser(id, name, room) {
        console.log(id);
        console.log(name);
        console.log(room);
        
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
}

module.exports = { Users }