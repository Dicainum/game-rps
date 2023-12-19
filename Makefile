install:
	npm ci

game-rps:
	node bin/game-rps.js

publish: 
	npm publish --dry-run
