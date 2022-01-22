const fs = require('fs');   // fs stands for File System

fs.readFile('./msg.txt',"utf-8",(err,data)=>{
    console.log(data)
})

const data = "Our happiness depends only on ourselves 😸"
fs.writeFile('./quotes.txt',data,(err)=>{
    console.log('Completed writing')
})

const name = "\nKarthikeyan M";

fs.appendFile("./awesome.txt",name,(err)=>{
    console.log("Updation completed")
})

fs.unlink('./removeFile.css',(err)=>{
    console.log("File deleted")
})
// To create/write a quote to 10 html files
const [, ,n] = process.argv;
const quote = "The road to success is always under construction..!";
for(let i=1;i<=n;i++)
{
    fs.writeFile(`./backups/test-${i}.html`,quote,(err)=>{
        console.log('Completed writing',i)
    })
}
fs.copyFile('./msg.txt','./backups/cool.html',(err)=>{
    console.log('File copied')
})

fs.readFile('./msg.txt',"utf-8",(err,quoteData)=>{
    console.log(quoteData)
    fs.writeFile(`./backups/cool2.html`,quoteData,(err)=>{
        console.log('Completed Copying')
    })
})

fs.readdir('./backups',(err,files)=>{
    console.log(files)
})