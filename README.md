# Jurnal
Jurnal is a simple markdown-based journal for the command line.

**Prerequisites:**
* Node

## Getting started
Install Jurnal with:
```shell
npm -g jurnal
```

Set the environment variable `JURNAL_DIR` to point to the directory where you want to keep your markdown journal entries, e.g.:
```shell
export JURNAL_DIR=~/journal
```

Then create a new journal entry:
```shell
jurnal
```

## Templates
You can optionally define a template for your journal entries.
Just create a file called `template.md` in your journal directory (i.e. `JURNAL_DIR`).

In your template, use `%%date%%` as placeholder for the current date (formatted as "yyyy-MM-dd").

## How to contribute
I may or may not continue to work on this project. But feel free to submit issues and pull requests.

## License
This repository is licensed under MIT.
