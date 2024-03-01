'use strict';

const icons = require('./icons.json');

const IMG_SIZE = 16;

let css = `i.icon { display: block; height: ${IMG_SIZE}px; width: ${IMG_SIZE}px; }\n`;
css += 'table tr { white-space: nowrap; }\n';
css += 'td.perms {}\n';
css += 'td.file-size { text-align: right; padding-left: 1em; }\n';
css += 'td.display-name { padding-left: 1em; }\n';

let css1024 = `@media (max-width: 1024px) {
  table tr { white-space: normal; }
  td {padding: 5px 0}
  td.file-size { text-align: left; padding-left: 0; }
  td.display-name { padding-left: 0; }
  td.perms, td.last-modified { display: none; }
  .footer {display: none; }
}
\n`;

css += css1024;

Object.keys(icons).forEach((key) => {
  css += `i.icon-${key} {\n`;
  css += `  background-image: url("data:image/png;base64,${icons[key]}");\n`;
  css += '}\n\n';
});

exports.icons = icons;
exports.css = css;
