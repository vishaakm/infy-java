# Theia-java
A custom Docker image containing the theia-ide for Java development


## Features
* Based on https://github.com/theia-ide/theia-apps/tree/master/theia-java-docker
* The Java used is OpenJDK version.

## Usage
```
$ docker build --tag vishaakm/theia-java .
$ docker run -it -p 80:3000 vishaakm/theia-java
```
