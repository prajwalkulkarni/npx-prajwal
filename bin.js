#!/usr/bin/env node
//import yargs from "yargs"
const yargs = require("yargs");

const args = Object.keys(yargs.argv);
args.pop();
args.shift();
if(args.length){
    console.log("Ok tested");
    return;
}

console.log(`
Hi, I'm
█▀█ █▀█ ▄▀█ ░░█ █░█░█ ▄▀█ █░░   █▄▀ █░█ █░░ █▄▀ ▄▀█ █▀█ █▄░█ █
█▀▀ █▀▄ █▀█ █▄█ ▀▄▀▄▀ █▀█ █▄▄   █░█ █▄█ █▄▄ █░█ █▀█ █▀▄ █░▀█ █                                                                                                                                                                                                                                                                                                               
`);

const oneLiner = "I'm a passionate Frontend developer architecting meaningful applications on the web."

for(let char in oneLiner){
    setTimeout(() => {
        process.stdout.write(oneLiner[char])
    }, 50*char)
}

setTimeout(()=>{
    console.log(`\nTo know more:
--profiles: Developer profiles and blogs
--projects: Projects I've worked on
--contact: Contact me 
`)
}, (oneLiner.length+1)*50);