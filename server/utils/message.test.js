const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

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

    it('should generate the correct location message', () => {
        var from = 'someemai@mail.com';
        var lat = 100;
        var lon = 30;
        var url = 'https://www.google.com/maps?q=100,30';
        var message = generateLocationMessage(from, lat, lon);

        console.log(message);
        expect(message.from).toBe(from);
        expect(message.url).toBe('https://www.google.com/maps?q=100,30');

        expect(message).toMatchObject({
            from,
            url
        });
    });
});