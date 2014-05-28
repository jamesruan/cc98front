browserify:
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery javascripts/design.js |uglifyjs > javascripts/design.min.js
