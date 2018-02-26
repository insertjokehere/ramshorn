FROM node:6

WORKDIR /src

COPY package.json .

RUN npm install --quiet && npm cache clean && rm -rf /tmp/*

COPY . .

CMD ["npm", "start"]

HEALTHCHECK CMD curl --fail http://localhost:3000/ || exit 1
