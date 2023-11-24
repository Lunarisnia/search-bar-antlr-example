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
	public static readonly RAWTEXT = 4;
	public static readonly CATEGORY = 5;
	public static readonly BRAND = 6;
	public static readonly PRICE = 7;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_rawText = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_searchPrice = 3;
	public static readonly RULE_searchBrand = 4;
	public static readonly RULE_searchCategory = 5;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "rawText", "expression", "searchPrice", "searchBrand", "searchCategory",
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
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 12;
				this.rawText();
				this.state = 13;
				this.match(CQLParser.EOF);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 224) !== 0)) {
					{
					this.state = 19;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 15;
						this.searchCategory();
						}
						break;
					case 2:
						{
						this.state = 16;
						this.searchCategory();
						}
						break;
					case 3:
						{
						this.state = 17;
						this.searchPrice();
						}
						break;
					case 4:
						{
						this.state = 18;
						this.searchBrand();
						}
						break;
					}
					}
					this.state = 23;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 24;
						this.match(CQLParser.SEMICOLON);
						this.state = 29;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case -1:
						case 1:
						case 4:
							{
							this.state = 25;
							this.rawText();
							}
							break;
						case 5:
							{
							this.state = 26;
							this.searchCategory();
							}
							break;
						case 7:
							{
							this.state = 27;
							this.searchPrice();
							}
							break;
						case 6:
							{
							this.state = 28;
							this.searchBrand();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
				}
				this.state = 36;
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
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 39;
				this.match(CQLParser.RAWTEXT);
				}
				}
				this.state = 44;
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
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, CQLParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this.match(CQLParser.MORETHAN);
			this.state = 46;
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
	// @RuleVersion(0)
	public searchPrice(): SearchPriceContext {
		let localctx: SearchPriceContext = new SearchPriceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, CQLParser.RULE_searchPrice);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(CQLParser.PRICE);
			{
			this.state = 49;
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
		this.enterRule(localctx, 8, CQLParser.RULE_searchBrand);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.match(CQLParser.BRAND);
			this.state = 52;
			this.rawText();
			this.state = 57;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 53;
					this.match(CQLParser.COMMA);
					this.state = 54;
					this.rawText();
					}
					}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
		this.enterRule(localctx, 10, CQLParser.RULE_searchCategory);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(CQLParser.CATEGORY);
			this.state = 61;
			this.rawText();
			this.state = 66;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 62;
					this.match(CQLParser.COMMA);
					this.state = 63;
					this.rawText();
					}
					}
				}
				this.state = 68;
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

	public static readonly _serializedATN: number[] = [4,1,7,70,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,1,0,1,0,1,0,1,0,3,0,30,8,0,5,0,32,8,0,10,0,12,
	0,35,9,0,1,0,3,0,38,8,0,1,1,5,1,41,8,1,10,1,12,1,44,9,1,1,2,1,2,1,2,1,3,
	1,3,1,3,1,4,1,4,1,4,1,4,5,4,56,8,4,10,4,12,4,59,9,4,1,5,1,5,1,5,1,5,5,5,
	65,8,5,10,5,12,5,68,9,5,1,5,3,33,57,66,0,6,0,2,4,6,8,10,0,0,75,0,37,1,0,
	0,0,2,42,1,0,0,0,4,45,1,0,0,0,6,48,1,0,0,0,8,51,1,0,0,0,10,60,1,0,0,0,12,
	13,3,2,1,0,13,14,5,0,0,1,14,38,1,0,0,0,15,20,3,10,5,0,16,20,3,10,5,0,17,
	20,3,6,3,0,18,20,3,8,4,0,19,15,1,0,0,0,19,16,1,0,0,0,19,17,1,0,0,0,19,18,
	1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,33,1,0,0,0,23,21,1,
	0,0,0,24,29,5,1,0,0,25,30,3,2,1,0,26,30,3,10,5,0,27,30,3,6,3,0,28,30,3,
	8,4,0,29,25,1,0,0,0,29,26,1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,32,1,0,
	0,0,31,24,1,0,0,0,32,35,1,0,0,0,33,34,1,0,0,0,33,31,1,0,0,0,34,36,1,0,0,
	0,35,33,1,0,0,0,36,38,5,0,0,1,37,12,1,0,0,0,37,21,1,0,0,0,38,1,1,0,0,0,
	39,41,5,4,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,
	3,1,0,0,0,44,42,1,0,0,0,45,46,5,3,0,0,46,47,3,2,1,0,47,5,1,0,0,0,48,49,
	5,7,0,0,49,50,3,4,2,0,50,7,1,0,0,0,51,52,5,6,0,0,52,57,3,2,1,0,53,54,5,
	2,0,0,54,56,3,2,1,0,55,53,1,0,0,0,56,59,1,0,0,0,57,58,1,0,0,0,57,55,1,0,
	0,0,58,9,1,0,0,0,59,57,1,0,0,0,60,61,5,5,0,0,61,66,3,2,1,0,62,63,5,2,0,
	0,63,65,3,2,1,0,64,62,1,0,0,0,65,68,1,0,0,0,66,67,1,0,0,0,66,64,1,0,0,0,
	67,11,1,0,0,0,68,66,1,0,0,0,8,19,21,29,33,37,42,57,66];

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
	public SEMICOLON_list(): TerminalNode[] {
	    	return this.getTokens(CQLParser.SEMICOLON);
	}
	public SEMICOLON(i: number): TerminalNode {
		return this.getToken(CQLParser.SEMICOLON, i);
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


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: CQLParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MORETHAN(): TerminalNode {
		return this.getToken(CQLParser.MORETHAN, 0);
	}
	public rawText(): RawTextContext {
		return this.getTypedRuleContext(RawTextContext, 0) as RawTextContext;
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
