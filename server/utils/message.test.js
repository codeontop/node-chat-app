var expect = require('expect');

var generateMessage = require('./message.js');

describe('generateMessage', () =>{
    it('should generate correct message object', () =>{
        var from = 'Jeb';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});

    });
});