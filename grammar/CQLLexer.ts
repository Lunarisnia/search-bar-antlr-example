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
	public static readonly RAWTEXT = 4;
	public static readonly CATEGORY = 5;
	public static readonly BRAND = 6;
	public static readonly PRICE = 7;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "','", "'>'", 
                                                            null, "'category:'", 
                                                            "'brand:'", 
                                                            "'price:'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SEMICOLON", 
                                                             "COMMA", "MORETHAN", 
                                                             "RAWTEXT", 
                                                             "CATEGORY", 
                                                             "BRAND", "PRICE" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"SEMICOLON", "COMMA", "RAW_TEXT", "MORETHAN", "RAWTEXT", "CATEGORY", "BRAND", 
		"PRICE",
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

	public static readonly _serializedATN: number[] = [4,0,7,58,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,
	1,1,2,1,2,3,2,24,8,2,1,3,1,3,1,4,1,4,5,4,30,8,4,10,4,12,4,33,9,4,1,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,31,0,8,1,1,3,2,5,0,7,3,9,4,11,5,13,6,15,7,1,0,1,4,0,
	10,10,13,13,44,44,59,59,58,0,1,1,0,0,0,0,3,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
	0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,
	23,1,0,0,0,7,25,1,0,0,0,9,27,1,0,0,0,11,34,1,0,0,0,13,44,1,0,0,0,15,51,
	1,0,0,0,17,18,5,59,0,0,18,2,1,0,0,0,19,20,5,44,0,0,20,4,1,0,0,0,21,24,9,
	0,0,0,22,24,8,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,6,1,0,0,0,25,26,5,62,
	0,0,26,8,1,0,0,0,27,31,3,5,2,0,28,30,3,5,2,0,29,28,1,0,0,0,30,33,1,0,0,
	0,31,32,1,0,0,0,31,29,1,0,0,0,32,10,1,0,0,0,33,31,1,0,0,0,34,35,5,99,0,
	0,35,36,5,97,0,0,36,37,5,116,0,0,37,38,5,101,0,0,38,39,5,103,0,0,39,40,
	5,111,0,0,40,41,5,114,0,0,41,42,5,121,0,0,42,43,5,58,0,0,43,12,1,0,0,0,
	44,45,5,98,0,0,45,46,5,114,0,0,46,47,5,97,0,0,47,48,5,110,0,0,48,49,5,100,
	0,0,49,50,5,58,0,0,50,14,1,0,0,0,51,52,5,112,0,0,52,53,5,114,0,0,53,54,
	5,105,0,0,54,55,5,99,0,0,55,56,5,101,0,0,56,57,5,58,0,0,57,16,1,0,0,0,3,
	0,23,31,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CQLLexer.__ATN) {
			CQLLexer.__ATN = new ATNDeserializer().deserialize(CQLLexer._serializedATN);
		}

		return CQLLexer.__ATN;
	}


	static DecisionsToDFA = CQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}