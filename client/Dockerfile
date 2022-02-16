FROM node:14-buster-slim as dev

WORKDIR /app

COPY package.json /app/

RUN yarn install

COPY ./ /app

EXPOSE 3000

CMD ["yarn", "run", "dev"]