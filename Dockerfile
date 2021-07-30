FROM node:12

WORKDIR /illustra-website

COPY . .

RUN yarn
RUN yarn build

EXPOSE 3003

CMD ["yarn", "start"]