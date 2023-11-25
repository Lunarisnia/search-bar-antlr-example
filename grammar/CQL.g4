grammar CQL;

SEMICOLON: ';';
COMMA: ',';

fragment RAW_TEXT: (. | ~[\n\r,;]);

MORETHAN: '>';
LESSTHAN: '<';
LESSTHANEQUAL: '<=';
MORETHANEQUAL: '>=';
AND: '&&';
RAWTEXT: (RAW_TEXT RAW_TEXT*?);
CATEGORY: 'category:';
BRAND: 'brand:';
PRICE: 'price:';

program:
	rawText EOF
	| (
		searchCategory
		| searchCategory
		| searchPrice
		| searchBrand
	)* (
		semicolon (
			rawText
			| searchCategory
			| searchPrice
			| searchBrand
		)
	)*? EOF;

rawText: RAWTEXT*;

semicolon: SEMICOLON;

expression: (MORETHAN | LESSTHAN | LESSTHANEQUAL | MORETHANEQUAL) rawText (
		AND (MORETHAN | LESSTHAN | LESSTHANEQUAL | MORETHANEQUAL) rawText
	)?;

searchPrice: PRICE (expression);
searchBrand: BRAND rawText (COMMA rawText)*?;
searchCategory: CATEGORY rawText (COMMA rawText)*?;