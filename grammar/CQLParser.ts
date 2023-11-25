// Generated from ./CQL.g4 by ANTLR 4.13.1
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
	public static readonly RULE_program = 0;
	public static readonly RULE_rawText = 1;
	public static readonly RULE_semicolon = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_searchPrice = 4;
	public static readonly RULE_searchBrand = 5;
	public static readonly RULE_searchCategory = 6;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "rawText", "semicolon", "expression", "searchPrice", "searchBrand", 
		"searchCategory",
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
			let _alt: number;
			this.state = 39;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				this.rawText();
				this.state = 15;
				this.match(CQLParser.EOF);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0)) {
					{
					this.state = 21;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 17;
						this.searchCategory();
						}
						break;
					case 2:
						{
						this.state = 18;
						this.searchCategory();
						}
						break;
					case 3:
						{
						this.state = 19;
						this.searchPrice();
						}
						break;
					case 4:
						{
						this.state = 20;
						this.searchBrand();
						}
						break;
					}
					}
					this.state = 25;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 35;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 26;
						this.semicolon();
						this.state = 31;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case -1:
						case 1:
						case 8:
							{
							this.state = 27;
							this.rawText();
							}
							break;
						case 9:
							{
							this.state = 28;
							this.searchCategory();
							}
							break;
						case 11:
							{
							this.state = 29;
							this.searchPrice();
							}
							break;
						case 10:
							{
							this.state = 30;
							this.searchBrand();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 37;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 38;
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
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8) {
				{
				{
				this.state = 41;
				this.match(CQLParser.RAWTEXT);
				}
				}
				this.state = 46;
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
	public semicolon(): SemicolonContext {
		let localctx: SemicolonContext = new SemicolonContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CQLParser.RULE_semicolon);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.match(CQLParser.SEMICOLON);
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CQLParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 120) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 50;
			this.rawText();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 51;
				this.match(CQLParser.AND);
				this.state = 52;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 120) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 53;
				this.rawText();
				}
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
	public searchPrice(): SearchPriceContext {
		let localctx: SearchPriceContext = new SearchPriceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, CQLParser.RULE_searchPrice);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.match(CQLParser.PRICE);
			{
			this.state = 57;
			this.expression();
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
	public searchBrand(): SearchBrandContext {
		let localctx: SearchBrandContext = new SearchBrandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, CQLParser.RULE_searchBrand);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(CQLParser.BRAND);
			this.state = 60;
			this.rawText();
			this.state = 65;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 61;
					this.match(CQLParser.COMMA);
					this.state = 62;
					this.rawText();
					}
					}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
		this.enterRule(localctx, 12, CQLParser.RULE_searchCategory);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(CQLParser.CATEGORY);
			this.state = 69;
			this.rawText();
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 70;
					this.match(CQLParser.COMMA);
					this.state = 71;
					this.rawText();
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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

	public static readonly _serializedATN: number[] = [4,1,11,78,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,0,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,0,1,0,1,0,1,0,3,0,32,8,0,5,0,34,8,0,
	10,0,12,0,37,9,0,1,0,3,0,40,8,0,1,1,5,1,43,8,1,10,1,12,1,46,9,1,1,2,1,2,
	1,3,1,3,1,3,1,3,1,3,3,3,55,8,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,64,8,5,10,
	5,12,5,67,9,5,1,6,1,6,1,6,1,6,5,6,73,8,6,10,6,12,6,76,9,6,1,6,3,35,65,74,
	0,7,0,2,4,6,8,10,12,0,1,1,0,3,6,83,0,39,1,0,0,0,2,44,1,0,0,0,4,47,1,0,0,
	0,6,49,1,0,0,0,8,56,1,0,0,0,10,59,1,0,0,0,12,68,1,0,0,0,14,15,3,2,1,0,15,
	16,5,0,0,1,16,40,1,0,0,0,17,22,3,12,6,0,18,22,3,12,6,0,19,22,3,8,4,0,20,
	22,3,10,5,0,21,17,1,0,0,0,21,18,1,0,0,0,21,19,1,0,0,0,21,20,1,0,0,0,22,
	25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,35,1,0,0,0,25,23,1,0,0,0,26,31,
	3,4,2,0,27,32,3,2,1,0,28,32,3,12,6,0,29,32,3,8,4,0,30,32,3,10,5,0,31,27,
	1,0,0,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,34,1,0,0,0,33,26,1,
	0,0,0,34,37,1,0,0,0,35,36,1,0,0,0,35,33,1,0,0,0,36,38,1,0,0,0,37,35,1,0,
	0,0,38,40,5,0,0,1,39,14,1,0,0,0,39,23,1,0,0,0,40,1,1,0,0,0,41,43,5,8,0,
	0,42,41,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,3,1,0,0,0,
	46,44,1,0,0,0,47,48,5,1,0,0,48,5,1,0,0,0,49,50,7,0,0,0,50,54,3,2,1,0,51,
	52,5,7,0,0,52,53,7,0,0,0,53,55,3,2,1,0,54,51,1,0,0,0,54,55,1,0,0,0,55,7,
	1,0,0,0,56,57,5,11,0,0,57,58,3,6,3,0,58,9,1,0,0,0,59,60,5,10,0,0,60,65,
	3,2,1,0,61,62,5,2,0,0,62,64,3,2,1,0,63,61,1,0,0,0,64,67,1,0,0,0,65,66,1,
	0,0,0,65,63,1,0,0,0,66,11,1,0,0,0,67,65,1,0,0,0,68,69,5,9,0,0,69,74,3,2,
	1,0,70,71,5,2,0,0,71,73,3,2,1,0,72,70,1,0,0,0,73,76,1,0,0,0,74,75,1,0,0,
	0,74,72,1,0,0,0,75,13,1,0,0,0,76,74,1,0,0,0,9,21,23,31,35,39,44,54,65,74];

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
	public rawText_list(): RawTextContext[] {
		return this.getTypedRuleContexts(RawTextContext) as RawTextContext[];
	}
	public rawText(i: number): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, i) as RawTextContext;
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
	public searchPrice_list(): SearchPriceContext[] {
		return this.getTypedRuleContexts(SearchPriceContext) as SearchPriceContext[];
	}
	public searchPrice(i: number): SearchPriceContext {
		return this.getTypedRuleContext(SearchPriceContext, i) as SearchPriceContext;
	}
	public searchBrand_list(): SearchBrandContext[] {
		return this.getTypedRuleContexts(SearchBrandContext) as SearchBrandContext[];
	}
	public searchBrand(i: number): SearchBrandContext {
		return this.getTypedRuleContext(SearchBrandContext, i) as SearchBrandContext;
	}
	public semicolon_list(): SemicolonContext[] {
		return this.getTypedRuleContexts(SemicolonContext) as SemicolonContext[];
	}
	public semicolon(i: number): SemicolonContext {
		return this.getTypedRuleContext(SemicolonContext, i) as SemicolonContext;
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


export class SemicolonContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(CQLParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_semicolon;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterSemicolon) {
	 		listener.enterSemicolon(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitSemicolon) {
	 		listener.exitSemicolon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitSemicolon) {
			return visitor.visitSemicolon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public rawText_list(): RawTextContext[] {
		return this.getTypedRuleContexts(RawTextContext) as RawTextContext[];
	}
	public rawText(i: number): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, i) as RawTextContext;
	}
	public MORETHAN_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.MORETHAN);
	}
	public MORETHAN(i: number): TerminalNode {
		return this.getToken(CQLParser.MORETHAN, i);
	}
	public LESSTHAN_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.LESSTHAN);
	}
	public LESSTHAN(i: number): TerminalNode {
		return this.getToken(CQLParser.LESSTHAN, i);
	}
	public LESSTHANEQUAL_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.LESSTHANEQUAL);
	}
	public LESSTHANEQUAL(i: number): TerminalNode {
		return this.getToken(CQLParser.LESSTHANEQUAL, i);
	}
	public MORETHANEQUAL_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.MORETHANEQUAL);
	}
	public MORETHANEQUAL(i: number): TerminalNode {
		return this.getToken(CQLParser.MORETHANEQUAL, i);
	}
	public AND(): TerminalNode {
		return this.getToken(CQLParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_expression;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchPriceContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PRICE(): TerminalNode {
		return this.getToken(CQLParser.PRICE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_searchPrice;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterSearchPrice) {
	 		listener.enterSearchPrice(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitSearchPrice) {
	 		listener.exitSearchPrice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitSearchPrice) {
			return visitor.visitSearchPrice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchBrandContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BRAND(): TerminalNode {
		return this.getToken(CQLParser.BRAND, 0);
	}
	public rawText_list(): RawTextContext[] {
		return this.getTypedRuleContexts(RawTextContext) as RawTextContext[];
	}
	public rawText(i: number): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, i) as RawTextContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(CQLParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return CQLParser.RULE_searchBrand;
	}
	public enterRule(listener: CQLListener): void {
	    if(listener.enterSearchBrand) {
	 		listener.enterSearchBrand(this);
		}
	}
	public exitRule(listener: CQLListener): void {
	    if(listener.exitSearchBrand) {
	 		listener.exitSearchBrand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CQLVisitor<Result>): Result {
		if (visitor.visitSearchBrand) {
			return visitor.visitSearchBrand(this);
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
	public rawText_list(): RawTextContext[] {
		return this.getTypedRuleContexts(RawTextContext) as RawTextContext[];
	}
	public rawText(i: number): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, i) as RawTextContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(CQLParser.COMMA, i);
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
