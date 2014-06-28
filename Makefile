browserify:
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery -x 'grammar' -x Sammy -x ML javascripts/design.js |uglifyjs > javascripts/design.min.js
