install:
	npm ci

node index.js:
	node index.js

publish: 
	npm publish --dry-run
