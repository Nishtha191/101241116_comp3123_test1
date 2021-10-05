let fs = require('fs'); 
for(i = 1 ;i <= 10;i++){
    let name = `log${i-1}.txt`
    if(fs.existsSync(`./log${i-1}.txt`)){
        fs.unlink(name, (e => {
            if (e)console.log(e);              
        }));
        console.log("Delete files ... " +name)
    }  
    else if(!fs.existsSync(`./log${i}.txt`)) {
        console.log("Not found :" +name)
    }    
} 
