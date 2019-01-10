FROM node:latest
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY package.json /usr/src/
RUN npm install
CMD npm run dev