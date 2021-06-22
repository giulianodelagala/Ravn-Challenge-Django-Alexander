FROM node

WORKDIR /
COPY /src/ /src/
COPY /public/ /public/
COPY package.json /

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]