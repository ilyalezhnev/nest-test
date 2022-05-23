FROM node:16.14.0-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn install

COPY . .

COPY /dist /dist

CMD ["yarn", "start:dev"]