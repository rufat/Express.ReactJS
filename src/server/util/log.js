const fs = require('fs');

/**
 * @name Logger
 * @description Logger is a logging utility that contains useful customizable properties.
 */
class Logger {
    async w(prefix, string, cl = null) {
        if(prefix.toString().length > 0 && string.toString().length > 0) {
            const log_message = `[${prefix}] ${new Date().toISOString()}: ${string}`;
            try {
                const stream = fs.createWriteStream("./app.txt", {flags: 'a'});
                await stream.write(log_message + "\n");
                if (cl || cl != null) console.log(log_message);
                stream.end();
            } catch (ex) {
                throw `[ERROR] Log message: ${log_message}\nException: ${ex}`
            }
        } else {
            throw ('[ERROR] Prefix or log message is empty.')
        }
    }
}

module.exports = new Logger().w;