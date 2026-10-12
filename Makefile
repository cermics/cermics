
all:
	bundle exec jekyll serve 


production:
	JEKYLL_ENV=production bundle exec jekyll build -d public
	rm -fr ../../gitlab/cermics.git/public
	mv public ../../gitlab/cermics.git/public


# Verifie le site dans les conditions reelles de publication : meme Jekyll que
# le workflow .github/workflows/jekyll.yml (celui du Gemfile), meme JEKYLL_ENV,
# et surtout meme baseurl -- que 'make all' laisse vide, si bien qu'un lien sans
# baseurl y fonctionne alors qu'il renvoie 404 en ligne.
# _config.check.yml y ajoute strict_filters. A lancer avant de pousser.
CHECK_DEST ?= /tmp/jekyll-check
CHECK_BASEURL ?= /cermics

check:
	JEKYLL_ENV=production bundle exec jekyll build \
	  --config _config.yml,_config.check.yml --baseurl $(CHECK_BASEURL) -d $(CHECK_DEST)
	@echo "OK : build de verification reussi dans $(CHECK_DEST)"
