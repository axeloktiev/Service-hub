# ---- Base  ----
FROM node:14-alpine as base

WORKDIR /app

COPY package.json /app/

# ---- Dependencies ----
FROM base AS dependencies

RUN yarn install


# ---- Builder ----
FROM base AS builder

WORKDIR /app

COPY . .

COPY --from=dependencies /app/node_modules ./node_modules

RUN yarn build

# ---- Release ----

FROM base

WORKDIR /app

ENV NODE_ENV production

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["yarn", "start"]