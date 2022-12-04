back/.env:
	cp back/.env.dist $@

front/.env:
	cp front/.env.dist $@

install.back:
	cd back; yarn install;

install.front:
	cd front; yarn install;

install: back/.env front/.env install.back install.front
