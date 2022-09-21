FROM node:alpine
WORKDIR /home/node/app
COPY package.json /home/node/app/package.json
COPY package-lock.json /home/node/app/package-lock.json
RUN npm ci
COPY . /home/node/app
CMD node /home/node/app/src
