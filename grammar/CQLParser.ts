// Generated from ./grammar/CQL.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import CQLListener from "./CQLListener.js";
import CQLVisitor from "./CQLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class CQLParser extends Parser {
	public static readonly RAWTEXT = 1;
	public static readonly CATEGORY = 2;
	public static readonly SEMICOLON = 3;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_rawText = 1;
	public static readonly RULE_searchCategory = 2;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'category:'", 
                                                            "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "RAWTEXT", 
                                                             "CATEGORY", 
                                                             "SEMICOLON" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "rawText", "searchCategory",
	];
	public get grammarFileName(): string { return "CQL.g4"; }
	public get literalNames(): (string | null)[] { return CQLParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return CQLParser.symbolicNames; }
	public get ruleNames(): string[] { return CQLParser.ruleNames; }
	public get serializedATN(): number[] { return CQLParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, CQLParser._ATN, CQLParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, CQLParser.RULE_program);
		let _la: number;
		try {
			this.state = 16;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 6;
				this.rawText();
				this.state = 7;
				this.match(CQLParser.EOF);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 12;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===2) {
					{
					{
					this.state = 9;
					this.searchCategory();
					}
					}
					this.state = 14;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 15;
				this.match(CQLParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rawText(): RawTextContext {
		let localctx: RawTextContext = new RawTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, CQLParser.RULE_rawText);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 18;
				this.match(CQLParser.RAWTEXT);
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public searchCategory(): SearchCategoryContext {
		let localctx: SearchCategoryContext = new SearchCategoryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CQLParser.RULE_searchCategory);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			this.match(CQLParser.CATEGORY);
			this.state = 25;
			this.rawText();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,3,28,2,0,7,0,2,1,
	7,1,2,2,7,2,1,0,1,0,1,0,1,0,5,0,11,8,0,10,0,12,0,14,9,0,1,0,3,0,17,8,0,
	1,1,5,1,20,8,1,10,1,12,1,23,9,1,1,2,1,2,1,2,1,2,0,0,3,0,2,4,0,0,27,0,16,
	1,0,0,0,2,21,1,0,0,0,4,24,1,0,0,0,6,7,3,2,1,0,7,8,5,0,0,1,8,17,1,0,0,0,
	9,11,3,4,2,0,10,9,1,0,0,0,11,14,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,
	15,1,0,0,0,14,12,1,0,0,0,15,17,5,0,0,1,16,6,1,0,0,0,16,12,1,0,0,0,17,1,
	1,0,0,0,18,20,5,1,0,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,
	0,0,0,22,3,1,0,0,0,23,21,1,0,0,0,24,25,5,2,0,0,25,26,3,2,1,0,26,5,1,0,0,
	0,3,12,16,21];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CQLParser.__ATN) {
			CQLParser.__ATN = new ATNDeserializer().deserialize(CQLParser._serializedATN);
		}

		return CQLParser.__ATN;
	}


	static DecisionsToDFA = CQLParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rawText(): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, 0) as RawTextContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(CQLParser.EOF, 0);
	}
	public searchCategory_list(): SearchCategoryContext[] {
		return this.getTypedRuleContexts(SearchCategoryContext) as SearchCategoryContext[];
	}
	public searchCategory(i: number): SearchCategoryContext {
		return this.getTypedRuleContext(SearchCategoryContext, i) as SearchCategoryContext;
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_program;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RawTextContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RAWTEXT_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.RAWTEXT);
	}
	public RAWTEXT(i: number): TerminalNode {
		return this.getToken(CQLParser.RAWTEXT, i);
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_rawText;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterRawText) {
	 		listener.enterRawText(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitRawText) {
	 		listener.exitRawText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitRawText) {
			return visitor.visitRawText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchCategoryContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATEGORY(): TerminalNode {
		return this.getToken(CQLParser.CATEGORY, 0);
	}
	public rawText(): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, 0) as RawTextContext;
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_searchCategory;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterSearchCategory) {
	 		listener.enterSearchCategory(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitSearchCategory) {
	 		listener.exitSearchCategory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitSearchCategory) {
			return visitor.visitSearchCategory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
