# Sabestian

This is a command line utility tool that I created for the purpose of helping me.

## Guide to make nodeJS apps accessible from anywhere.

add a shebang line to the top of index.js:

```bash
#!/usr/bin/env node
```

Next, we need to add a bin property to our package.json file. This maps the command name (sabestian) to the name of the file to be executed (relative to package.json):

```json
"bin": {
  "sabestian": "./index.js"
}
```

After that, install the module globally and you’ll have a working shell command:

```bash
npm install -g
```

If you want to confirm the install worked, you can list your globally installed Node modules using this:

```
npm ls -g --depth=0

```
