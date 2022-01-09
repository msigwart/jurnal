#! /usr/bin/env node
import fs from 'fs';
import child_process from 'child_process'

if (!process.env.JURNAL_DIR) {
  console.log('Environment variable JURNAL_DIR not set.')
  process.exit(0)
}

const dirEnv = process.env.JURNAL_DIR;
const dir = `${dirEnv.endsWith('/') ? dirEnv : dirEnv + '/'}`
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const today = new Date();
const pathToTemplate = `${dir}template.md`
const pathToFile = `${dir}${formatDate(today)}.md`

const defaultTemplate =
`---
  title: 'Journal entry for %%date%%'
  date: '%%date%%'
---
## How are you feeling today?


`
if (!fs.existsSync(pathToFile)) {
  console.log(`Created new journal entry.`);
  let template = defaultTemplate;
  if (fs.existsSync(pathToTemplate)) {
    template = fs.readFileSync(pathToTemplate).toString();
  }

  template = template.replaceAll('%%date%%', formatDate(today))
  fs.writeFileSync(pathToFile, template)
}
const vim = child_process.spawn('vim', [pathToFile], {stdio: 'inherit'});
vim.on('exit', process.exit);

function formatDate(date) {
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

