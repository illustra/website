FROM node:12

WORKDIR /illustra-website

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3003

CMD ["node", "index.js"]