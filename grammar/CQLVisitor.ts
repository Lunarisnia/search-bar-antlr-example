// Generated from ./CQL.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./CQLParser";
import { RawTextContext } from "./CQLParser";
import { ExpressionContext } from "./CQLParser";
import { SearchPriceContext } from "./CQLParser";
import { SearchBrandContext } from "./CQLParser";
import { SearchCategoryContext } from "./CQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class CQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CQLParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `CQLParser.rawText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawText?: (ctx: RawTextContext) => Result;
	/**
	 * Visit a parse tree produced by `CQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `CQLParser.searchPrice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchPrice?: (ctx: SearchPriceContext) => Result;
	/**
	 * Visit a parse tree produced by `CQLParser.searchBrand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchBrand?: (ctx: SearchBrandContext) => Result;
	/**
	 * Visit a parse tree produced by `CQLParser.searchCategory`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCategory?: (ctx: SearchCategoryContext) => Result;
}

