This repo contains all the files required to build the wiki website.

Clone this repo from *nuc.bourdeaud.net* with:

```sh
cd docker
git clone https://github.com/sbourdeaud/wiki
```

Build the static content with:

```sh
source venv/bin/activate
mkdocs build
```

It is then meant to be copied on the `caddy_caddy_data` volume on *nuc.bourdeaud.net* with:

```sh
sudo cp -av ../mkdocs/site /var/lib/docker/volumes/wiki_data/_data/caddy/mkdocs/
```

The doc site can then be accessed at [https://wiki.bourdeaud.net](https://wiki.bourdeaud.net)