FROM node:latest

WORKDIR /usr/src/api

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-opitional --no-fund --loglevel=error

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]