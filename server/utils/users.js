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

    removeUser(id) {
        var user = this.getUser(id);
        if (user) {
            this.users = this.users.filter(u => u.id !== id);
        }
        return user;
    }

    getUser(id) {
        return this.users.filter((u) => u.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter((u) => {
            return u.room === room;
        });
        var namesArray = users.map(u => u.name);

        return namesArray;
    }
}

module.exports = { Users }