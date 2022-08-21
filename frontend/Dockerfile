FROM node:16

# create workdir
WORKDIR /usr/src/frontend

COPY package*.json .

# install dep
RUN yarn install

# copy sources
COPY . .

# uncomment this, if you want to directly access node app
# EXPOSE 4444 

# run app
CMD yarn build

ENV HOST 0.0.0.0