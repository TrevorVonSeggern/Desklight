#!/bin/sh
FROM resin/rpi-raspbian
RUN apt-get update

ENV DB_DATASE_TYPE mysql
ENV DB_HOST localhost
ENV DB_USERNAME root
ENV DB_PASSWORD mysuperpwd!
ENV nodeversion 8.5.0

RUN apt-get install manpages-dev javascript-common libjs-jquery libssl-doc file build-essential wget git
RUN apt-get install nodejs

ADD package.json package.json
RUN npm install

ADD . .

EXPOSE 80
ENV PORT 80
ENTRYPOINT npm start
