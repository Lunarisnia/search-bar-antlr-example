grammar CQL;

SEMICOLON: ';';
COMMA: ',';

fragment RAW_TEXT: (. | ~[\n\r,;]);

MORETHAN: '>';
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

expression: MORETHAN rawText;

searchPrice: PRICE (expression);
searchBrand: BRAND rawText (COMMA rawText)*?;
searchCategory: CATEGORY rawText (COMMA rawText)*?;