# ---- Base  ----
FROM node:14-alpine as base

WORKDIR /app

COPY package.json /app/

# ---- Dependencies ----
FROM base AS dependencies

RUN yarn install

# ---- Release ----

FROM base

COPY --from=dependencies /app/node_modules ./node_modules

COPY ./ /app

EXPOSE 3000

CMD ["yarn", "run", "start"]