FROM ubuntu

RUN apt-get update && \
    apt-get install -y gnupg2 && \
    apt-get install -y openjdk-8-jdk

# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    update-ca-certificates -f

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

# Installing NodeJS 12 and theia 
RUN apt-get install -y curl apt-transport-https build-essential git && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn && \
    rm -rf /var/lib/apt/lists/* && \
    apt-get clean

# See : https://github.com/theia-ide/theia-apps/issues/34
RUN adduser --disabled-password --gecos '' handson
RUN chmod g+rw /home && \
    mkdir -p /home/project && \
    chown -R handson:handson /home/handson && \
    chown -R handson:handson /home/project

WORKDIR /home/handson

USER handson

ARG version=latest
ADD $version.package.json ./package.json
ARG GITHUB_TOKEN

RUN yarn --cache-folder ./ycache && rm -rf ./ycache && \
    NODE_OPTIONS="--max_old_space_size=4096" yarn theia build ; \
    yarn theia download:plugins

EXPOSE 3000

ENV SHELL=/bin/bash \
    THEIA_DEFAULT_PLUGINS=local-dir:/home/handson/plugins

ENTRYPOINT [ "node", "/home/handson/src-gen/backend/main.js", "/home/project", "--hostname=0.0.0.0" ]
