const fs = require('fs');
let path;
for(let i = 1; i <= 10; i++){
    path = `log${i-1}.txt`
    fs.writeFile(path,`Nishtha : ${i}`,(err)=>{
        if (err) {
            return console.error(err);
        }
    })
}
console.log("Files are created")
