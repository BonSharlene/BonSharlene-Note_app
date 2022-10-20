const fs = require ('fs')

const del = function (num, oldNote){
    const note = JSON.parse(oldNote)
    const newNote = note.filter(function(n,idx){ 
        return n.id !== num
    })
    fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}

module.exports = del;