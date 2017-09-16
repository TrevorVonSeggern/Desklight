FROM node:latest
RUN apt-get update
RUN apt-get install -y sqlite3 libsqlite3-dev build-essential libssl-dev

ADD package.json package.json
RUN npm install

ADD . .

EXPOSE 80
ENV PORT 80
ENTRYPOINT npm start
