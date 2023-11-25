// Generated from ./CQL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class CQLLexer extends Lexer {
	public static readonly SEMICOLON = 1;
	public static readonly COMMA = 2;
	public static readonly MORETHAN = 3;
	public static readonly LESSTHAN = 4;
	public static readonly LESSTHANEQUAL = 5;
	public static readonly MORETHANEQUAL = 6;
	public static readonly AND = 7;
	public static readonly RAWTEXT = 8;
	public static readonly CATEGORY = 9;
	public static readonly BRAND = 10;
	public static readonly PRICE = 11;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "','", "'>'", 
                                                            "'<'", "'<='", 
                                                            "'>='", "'&&'", 
                                                            null, "'category:'", 
                                                            "'brand:'", 
                                                            "'price:'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SEMICOLON", 
                                                             "COMMA", "MORETHAN", 
                                                             "LESSTHAN", 
                                                             "LESSTHANEQUAL", 
                                                             "MORETHANEQUAL", 
                                                             "AND", "RAWTEXT", 
                                                             "CATEGORY", 
                                                             "BRAND", "PRICE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SEMICOLON", "COMMA", "RAW_TEXT", "MORETHAN", "LESSTHAN", "LESSTHANEQUAL", 
		"MORETHANEQUAL", "AND", "RAWTEXT", "CATEGORY", "BRAND", "PRICE",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, CQLLexer._ATN, CQLLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "CQL.g4"; }

	public get literalNames(): (string | null)[] { return CQLLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return CQLLexer.symbolicNames; }
	public get ruleNames(): string[] { return CQLLexer.ruleNames; }

	public get serializedATN(): number[] { return CQLLexer._serializedATN; }

	public get channelNames(): string[] { return CQLLexer.channelNames; }

	public get modeNames(): string[] { return CQLLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,11,77,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,2,1,2,3,2,32,8,2,1,3,1,3,1,4,1,
	4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,5,8,49,8,8,10,8,12,8,52,9,
	8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,50,0,12,1,1,3,2,5,0,7,3,9,4,11,
	5,13,6,15,7,17,8,19,9,21,10,23,11,1,0,1,4,0,10,10,13,13,44,44,59,59,77,
	0,1,1,0,0,0,0,3,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,
	1,0,0,0,3,27,1,0,0,0,5,31,1,0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,11,37,1,0,0,
	0,13,40,1,0,0,0,15,43,1,0,0,0,17,46,1,0,0,0,19,53,1,0,0,0,21,63,1,0,0,0,
	23,70,1,0,0,0,25,26,5,59,0,0,26,2,1,0,0,0,27,28,5,44,0,0,28,4,1,0,0,0,29,
	32,9,0,0,0,30,32,8,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,6,1,0,0,0,33,34,
	5,62,0,0,34,8,1,0,0,0,35,36,5,60,0,0,36,10,1,0,0,0,37,38,5,60,0,0,38,39,
	5,61,0,0,39,12,1,0,0,0,40,41,5,62,0,0,41,42,5,61,0,0,42,14,1,0,0,0,43,44,
	5,38,0,0,44,45,5,38,0,0,45,16,1,0,0,0,46,50,3,5,2,0,47,49,3,5,2,0,48,47,
	1,0,0,0,49,52,1,0,0,0,50,51,1,0,0,0,50,48,1,0,0,0,51,18,1,0,0,0,52,50,1,
	0,0,0,53,54,5,99,0,0,54,55,5,97,0,0,55,56,5,116,0,0,56,57,5,101,0,0,57,
	58,5,103,0,0,58,59,5,111,0,0,59,60,5,114,0,0,60,61,5,121,0,0,61,62,5,58,
	0,0,62,20,1,0,0,0,63,64,5,98,0,0,64,65,5,114,0,0,65,66,5,97,0,0,66,67,5,
	110,0,0,67,68,5,100,0,0,68,69,5,58,0,0,69,22,1,0,0,0,70,71,5,112,0,0,71,
	72,5,114,0,0,72,73,5,105,0,0,73,74,5,99,0,0,74,75,5,101,0,0,75,76,5,58,
	0,0,76,24,1,0,0,0,3,0,31,50,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CQLLexer.__ATN) {
			CQLLexer.__ATN = new ATNDeserializer().deserialize(CQLLexer._serializedATN);
		}

		return CQLLexer.__ATN;
	}


	static DecisionsToDFA = CQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}