### How to create your own Package executor

Having a node package for your introduction would be a cool way to flex your skills and also would help you to stand out amongst the crowd.

Creating and publishing your npm package is rather an easy task, however there are few prerequisites one needs to meet.

#### Prerequisites

- [Have Node Installed](https://nodejs.org/en/download)
- [npm account](https://npmjs.com)

### Setting up the project

You can either fork and clone this repository, make the necessary changes and publish it
(OR)
Initialize the project, configure the necessary files, test locally and publish it.

1. Clone this repository and make necessay changes

If you're cloning this repository, there are only few changes you'd need to make.
Delete `package.json` and `yarn.lock`.
Setup your remote origin pointing to the forked repository.
Run `npm init` and enter the required details.
After your `package.json` is generated. Add the below configuration properties to it:

```
  "bin": "./bin.js",
  "dependencies": {
    "yargs": "^17.7.2"
  },
  "publishConfig": {
    "access": "public"
  }
```

Run `yarn install`

<b>Note:</b> This project uses `yarn`. So make sure you've yarn installed.

Update `data.js` with your information, and to generate cool ASCII texts, you can use [this](https://fsymbols.com/generators/carty/) website.

To test things locally, run `npx .` from the project directory.

### Publishing

Publishing your package to npm is pretty straightforward, as there's a workflow already setup that publishes your changes when you commit your changes on remote main branch.
Before pushing your changes, you'd have to add your access token to your repository.
You can obtain your access token from the npm website by cliking on your profile > access tokens > generate new token.

Add this token to your reporsitory by navigating to your project > settings > secrets and variables(present on the left pane) > Actions > New repository secret > set the key as `npm_token`.

There you have it, run your package by executing `npx <your-package-name>`

2. Initialize the project from scratch

Get started by running `npm init` and enter the required details.

Once the `package.json` file is created, add the `bin` property and point it to your `bin.js` file.

Whenever the command `npx <your-package-name>` is executed, it is the `bin` file that runs.
So, anything that'd you'd want to show on running the command should go into this file.

To support passing arguments and reading them, you may have to use a dependency like `yargs`.

Additionally, you can also add a workflow that publishes your package to the npm registry. You may refer to the workflow defined in this project by navigating to `.github/workflows/npm-publish.yml`.

### Liked the project? Give it a :star:

Learned something new? Consider giving this repo a :star:. It would encourage me to publish more such cool projects.
Thank you!
