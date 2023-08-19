#!/usr/bin/env node
const yargs = require("yargs");
const { profiles, projects, contact, oneLiner, work } = require("./data");
const args = Object.keys(yargs.argv);
args.pop();
args.shift();
if (args.length) {
  args.forEach((value) => {
    switch (value) {
      case "profiles":
        console.table(profiles);
        break;
      case "projects":
        console.table(projects);
        break;
      case "contact":
        console.table(contact);
        break;
      default:
        console.log(
          "Invalid argument passed, please try again with a correct argument"
        );
    }
  });

  process.exit();
}

console.log(`
Hi, I'm
█▀█ █▀█ ▄▀█ ░░█ █░█░█ ▄▀█ █░░   █▄▀ █░█ █░░ █▄▀ ▄▀█ █▀█ █▄░█ █
█▀▀ █▀▄ █▀█ █▄█ ▀▄▀▄▀ █▀█ █▄▄   █░█ █▄█ █▄▄ █░█ █▀█ █▀▄ █░▀█ █                                                                                                                                                                                                                                                                                                               
`);

function awaitTypingText() {
  return new Promise((resolve, _) => {
    for (let char in oneLiner) {
      setTimeout(() => {
        process.stdout.write(oneLiner[char]);
        if (+char === oneLiner.length - 1) {
          resolve();
        }
      }, 50 * char);
    }
  });
}

awaitTypingText()
  .then(() => {
    work.forEach((item) => {
      process.stdout.write(`-> ${item}\n`);
    });
  })
  .then(() => {
    console.log(`\nTo know more:
    Run: npx . <arg>, where <arg> is one of:
    --profiles: Developer profiles and blogs
    --projects: Projects I've worked on and the open source projects I've contributed to
    --contact: Contact me 
    `);
  });
