grammar CQL;

fragment RAW_TEXT: [a-zA-Z0-9];

RAWTEXT:
	(
		RAW_TEXT
		| ' '
		| '~'
		| '`'
		| '!'
		| '@'
		| '#'
		| '$'
		| '%'
		| '^'
		| '&'
		| '*'
		| '('
		| ')'
		| '_'
		| '-'
		| '+'
		| '='
		| '{'
		| '}'
		| '['
		| ']'
		| '|'
		| '\\'
		| ':'
		| '\''
		| '"'
		| '<'
		| '>'
		| ','
		| '.'
		| '/'
		| '?'
	) {console.log("Hello, World")};

CATEGORY: 'category:';
SEMICOLON: ';';

program: rawText EOF | (searchCategory)* EOF;

rawText: RAWTEXT*;
searchCategory: CATEGORY rawText;