install: install-deps

gendiff:
	node bin/gendiff.js

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .
	
lint-fix:
	npx eslint --fix .
