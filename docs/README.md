## ngClient 

ngClient is a demo application for reference when creating Angular applications that must consume web services.

It seems that most examples on the web follow the beginning http tutorial 
and load services directly into app.component or app.modules.  

The goal here is to follow the recommended modular structure and package modules, components, and services that can be reused across multiple applications.

---

### First things first

We always start by creating a new project. Follow the [Getting Started](https://angular.io/guide/quickstart) instructions from the [Official Angular Documentation](https://angular.io/docs).  

At the time of this writing Angular is stable at `v4.4.4` and my system is configured with the following node and npm versions:  

```bash
$ node -v
v7.0.0
$ npm -v
v3.10.8
$ ng -v
    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
@angular/cli: 1.4.4
node: 7.0.0
os: darwin x64
@angular/animations: 4.4.4
@angular/common: 4.4.4
@angular/compiler: 4.4.4
@angular/core: 4.4.4
@angular/forms: 4.4.4
@angular/http: 4.4.4
@angular/platform-browser: 4.4.4
@angular/platform-browser-dynamic: 4.4.4
@angular/router: 4.4.4
@angular/cli: 1.4.4
@angular/compiler-cli: 4.4.4
@angular/language-service: 4.4.4
typescript: 2.3.4
```

Once the project is created I like to configure the cli so that any generated files will have a selector prefix other than the default, `app`.  

For this application I will use `hcc` for Humbold Code Club.  Open the `.angular-cli.json` file and update the prefix setting:

```bash
"prefix": "hcc",
```

The `tslint.json` file is setup to enforce prefixes, so don't forget to add your new selector prefix or the linter will fail. 

```bash
"directive-selector": [
  true,
  "attribute",
  "app, hcc",
  "camelCase"
],
"component-selector": [
  true,
  "element",
  "app, hcc",
  "kebab-case"
],
``` 

We have not made any changes to the default app itself yet, so go ahead and run it to make sure everything is working before we move on.

```bash
$ ng serve
```

Finally, I have made some changes to the default home page by changing the `title` in `app.component.ts` and adding a link to this project page in the template, `app.component.html`.

---

### Making a new module
Our goal is to make a module with components and services that we can plug into our app.  We will be consuming an api that serves information about bitcoin, so from the project root directory run:

#### create the module
```bash
$ ng g module bitccoin
```
This will create a new directory and module under the app directory, `src/app/bitcoin/bitcoin.module.ts`.

#### create the component
To add a component to this module run the following command from the bitcoin directory:
```bash
$ ng g component bitcoin-price -m bitcoin
```
This will generate a new directory containing a component, template, css file, and spec under the bitcoin directory and add the component to our module.

#### update the component template



```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/gallonallen/test/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.