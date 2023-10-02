SISTEM QUOTATION HAYUJALAN

######HOW TO RUN PROJECT########

Clone atau run project
- npm install
- composer install
  
Cek key dan database di .env
- php artisan key:generate
- php artisan migrate:refresh --seed
  
Cara running 
- npm run dev
- php artisan serve

Project setelah pull (database belum server)
- php artisan migrate:refresh --seed
- npm run dev
- php artisan serve

Project setelah pull (sudah ada server)
- npm run dev
- php artisan serve

Database server 
http://128.199.189.176/phpmyadmin/index.php?db=bismill2_hayujalan&token=77c77b79bc09164c2d9dbd43f124a1bb
username : bismill2_HJ
password : KoTA206
