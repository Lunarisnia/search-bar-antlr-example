// Generated from ./grammar/CQL.g4 by ANTLR 4.13.1
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
	public static readonly RAWTEXT = 1;
	public static readonly CATEGORY = 2;
	public static readonly SEMICOLON = 3;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'category:'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "RAWTEXT", 
                                                             "CATEGORY", 
                                                             "SEMICOLON" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"RAW_TEXT", "RAWTEXT", "CATEGORY", "SEMICOLON",
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

	// @Override
	public action(localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 1:
			this.RAWTEXT_action(localctx, actionIndex);
			break;
		}
	}
	private RAWTEXT_action(localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			console.log("Hello, World")
			break;
		}
	}

	public static readonly _serializedATN: number[] = [4,0,3,29,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,1,1,1,3,1,14,8,1,1,1,1,1,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,0,0,4,1,0,3,1,5,2,7,3,1,0,2,3,0,48,
	57,65,90,97,122,5,0,32,47,58,58,60,64,91,96,123,126,28,0,3,1,0,0,0,0,5,
	1,0,0,0,0,7,1,0,0,0,1,9,1,0,0,0,3,13,1,0,0,0,5,17,1,0,0,0,7,27,1,0,0,0,
	9,10,7,0,0,0,10,2,1,0,0,0,11,14,3,1,0,0,12,14,7,1,0,0,13,11,1,0,0,0,13,
	12,1,0,0,0,14,15,1,0,0,0,15,16,6,1,0,0,16,4,1,0,0,0,17,18,5,99,0,0,18,19,
	5,97,0,0,19,20,5,116,0,0,20,21,5,101,0,0,21,22,5,103,0,0,22,23,5,111,0,
	0,23,24,5,114,0,0,24,25,5,121,0,0,25,26,5,58,0,0,26,6,1,0,0,0,27,28,5,59,
	0,0,28,8,1,0,0,0,2,0,13,1,1,1,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CQLLexer.__ATN) {
			CQLLexer.__ATN = new ATNDeserializer().deserialize(CQLLexer._serializedATN);
		}

		return CQLLexer.__ATN;
	}


	static DecisionsToDFA = CQLLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}