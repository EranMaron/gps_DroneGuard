const SerialPort = require('serialport')
const SerialPortParser = require('@serialport/parser-readline')
const GPS = require('gps')

const port = new SerialPort('/dev/ttyS0', { baudRate: 9600 })
const gps = new GPS()

const parser = port.pipe(new SerialPortParser())

parser.on('data', data => {
    console.log(data)
})
