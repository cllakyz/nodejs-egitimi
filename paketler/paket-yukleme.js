const slugify = require('slugify');

const text = "Beşiktaş üçüncü maçına çıkıyor";
const slug_text = slugify(text, '*');

console.log(slug_text);