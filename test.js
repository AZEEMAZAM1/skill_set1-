const{ readFile,writeFile} = require('fs')

readFile ('./content/result-sync.txt','utf8',(err,reault)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(reault)
})