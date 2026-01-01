This repo contains all the files required to build the wiki website.

From *nuc.bourdeaud.net* in the *docker/wiki* directory:

```sh
git pull && mkdocs build && docker build -t wiki . && docker stop wiki && docker rm wiki && docker run -d --restart=always -p 8000:3000 --name wiki wiki
```

The doc site can then be accessed at [https://wiki.bourdeaud.net](https://wiki.bourdeaud.net)