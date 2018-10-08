# MyForce Services

## 1. Pustaka dan kerangka kerja yang digunakan
### 1. NodeJS
NodeJS adalah sebuah bahasa pemrograman JavaScript yang digunakan untuk bekerja dibagian server.

### 2. NPM
NPM adalah paket manajer yang digunakan untuk menginstal paket yang dibutukan untuk aplikasi JavaScript.

### 3. FeathersJS
FeathersJS adalah sebuah kerangka kerja yang digunakan untuk membangun aplikasi modern dengan menggunakan JavaScript.

### 4. Socket.io
Socket.io adalah sebuah pustaka yang digunakan untuk mengembangkan sistem yang real-time.

## 2. Konfigurasi basis data mysql pada FeathersJS
1. Buka folder ```myforce-service```
2. Buka folder ```config```
3. Buka file ```default.json```
4. Perbaharui bagian  ```"mysql": "mysql://username:@host:port/database"```

## 2. Instalasi
## Tahap pengambangan (Development mode)
Untuk tahapan pengembangan atau development mode caranya sebagai berikut:

### 1. Salin dari GitHub
```git clone https://github.com/telecreative-developer/myforce-services.git```

### 2. Menginstal semua paket yang dibutukan aplikasi
```cd myforce-services && npm install```

### 3. Menjalankan aplikasi
```cd myforce-services && npm start```

## Tahap produksi (Production mode)
```git clone https://github.com/telecreative-developer/myforce-services.git```

### 2. Menginstal semua paket yang dibutukan aplikasi
```cd myforce-services && npm install```

### 3. Menginstal pm2 secara global
```npm install -g pm2```

### 4. Menjalankan aplikasi
```cd myforce-services && pm2 start src/```

# Endpoints

### Answers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/answers

### Branches

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/branches

### checks

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/checks

### customers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/customers

### events

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/events

### invoices

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/invoices

### managers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/managers

### pics

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pics

### pipeline-products

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pipeline-products

### pipelines

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pipelines

### points

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/points

### products

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/products

### questions

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/questions

### selling-process

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/selling-process

### subproducts

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/subproducts

### targets

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/targets

### team-updates

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/team-updates

### upload-avatar-user

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/upload-avatar-user

### upload-cover-user

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/upload-cover-user

### users

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/users
