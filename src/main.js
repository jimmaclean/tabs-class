const Tabs = require('./tabs');
const tabsElAll = document.querySelectorAll('[data-tabs]');
const mytabs = new Tabs(tabsElAll.item(0));