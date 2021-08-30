FROM node:12

RUN mkdir -p /home/node/app
COPY . /home/node/app
WORKDIR /home/node/app
RUN chmod a+w -R /home/node/app

RUN npm install

CMD [ "sh", "-c", "npm run dev" ]

EXPOSE 8080
