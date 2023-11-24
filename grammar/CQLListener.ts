// Generated from ./CQL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./CQLParser";
import { RawTextContext } from "./CQLParser";
import { SemicolonContext } from "./CQLParser";
import { ExpressionContext } from "./CQLParser";
import { SearchPriceContext } from "./CQLParser";
import { SearchBrandContext } from "./CQLParser";
import { SearchCategoryContext } from "./CQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CQLParser`.
 */
export default class CQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CQLParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.rawText`.
	 * @param ctx the parse tree
	 */
	enterRawText?: (ctx: RawTextContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.rawText`.
	 * @param ctx the parse tree
	 */
	exitRawText?: (ctx: RawTextContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.semicolon`.
	 * @param ctx the parse tree
	 */
	enterSemicolon?: (ctx: SemicolonContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.semicolon`.
	 * @param ctx the parse tree
	 */
	exitSemicolon?: (ctx: SemicolonContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.searchPrice`.
	 * @param ctx the parse tree
	 */
	enterSearchPrice?: (ctx: SearchPriceContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.searchPrice`.
	 * @param ctx the parse tree
	 */
	exitSearchPrice?: (ctx: SearchPriceContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.searchBrand`.
	 * @param ctx the parse tree
	 */
	enterSearchBrand?: (ctx: SearchBrandContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.searchBrand`.
	 * @param ctx the parse tree
	 */
	exitSearchBrand?: (ctx: SearchBrandContext) => void;
	/**
	 * Enter a parse tree produced by `CQLParser.searchCategory`.
	 * @param ctx the parse tree
	 */
	enterSearchCategory?: (ctx: SearchCategoryContext) => void;
	/**
	 * Exit a parse tree produced by `CQLParser.searchCategory`.
	 * @param ctx the parse tree
	 */
	exitSearchCategory?: (ctx: SearchCategoryContext) => void;
}

