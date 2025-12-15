This repo contains all the files required to build the homelab documentation website.

Clone this repo from *pi2.iot.bourdeaud.net* with:

```sh
cd docker
git clone https://git.bourdeaud.net/mkdocs
```

Build the static content with:

```sh
source venv/bin/activate
mkdocs build
```

It is then meant to be copied on the `caddy_caddy_data` volume on *pi2.iot.bourdeaud.net* with:

```sh
sudo cp -av ../mkdocs/site /var/lib/docker/volumes/caddy_caddy_data/_data/caddy/mkdocs/
```

The doc site can then be accessed at [https://docs.bourdeaud.net](https://docs.bourdeaud.net)