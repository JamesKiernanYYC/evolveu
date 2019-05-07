const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
    console.time("yeet")
    if (err) {
        console.log('ERROR')
    }
    console.log('1',data.toString())
    console.timeEnd("yeet")
})

const file = fs.readFileSync('./hello.txt')

console.log('2',file.toString())

//Write

// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err)
  
//     }
// })

//Create

// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//Delete

// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err)
//     }
//     console.log('Inception')
// })

