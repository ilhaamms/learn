console.log('Hello, world hahaw!');

// devDependencies dengan nodemon -> pnpm install --save-dev nodemon(nama package)
// supaya ketika ubah file, tidak perlu restart server
// devDependencies adalah cara mendaftarkan package-package yang kita ingin gunakan hanya di proses development saja.

// kemudian ada pnpm install, yaitu untuk menginstall package yang ada di package.json
// jadi gausah di push ke git yang folder node_modules, cukup push package.json aja
// kemudian nanti yang pull tinggal pnpm install aja, maka otomatis akan menginstall package yang ada di package.json