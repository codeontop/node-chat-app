/* eslint-disable no-undef */
var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jeb';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.created).toBe('number');
    expect(message).toMatchObject({ from, text });
  });
});
