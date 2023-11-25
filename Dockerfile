FROM node
ENV MONGO_INITDB_ROOT_USERNAME: root \
      MONGO_INITDB_ROOT_PASSWORD: example
RUN mkdir -p /home/app
COPY . /home/app
CMD ["node", "/home/app/index.js"]