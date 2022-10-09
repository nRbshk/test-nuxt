FROM node:16

# create workdir
WORKDIR /workspace/frontend

COPY package*.json .

# install dep
RUN yarn install

# copy sources
COPY . .

# uncomment this, if you want to directly access node app
# EXPOSE 3000 

# ENV HOST 0.0.0.0