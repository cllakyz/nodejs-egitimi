const slugif = require('slugify');

const text = "Beşiktaş üçüncü maçına çıkıyor";
const slug_text = slugif(text, '*');

console.log(slug_text);