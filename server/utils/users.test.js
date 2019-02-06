const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Jane',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }
    ];
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUSerList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('shouuld return names for react course', () => {
    var userList = users.getUSerList('React Course');

    expect(userList).toEqual(['Jane']);
  });
});
