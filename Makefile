install:
	npm ci

node index.js:
	node bin/game-rps.js

publish: 
	npm publish --dry-run
