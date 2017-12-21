const expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message', () => {
        var from = 'someemai@mail.com';
        var text = 'someText';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);

        expect(message).toMatchObject({
            from,
            text
        });

        expect(typeof message.createdAt).toBe('number');
    });
});