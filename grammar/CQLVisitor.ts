// Generated from ./grammar/CQL.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./CQLParser";
import { RawTextContext } from "./CQLParser";
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
	 * Visit a parse tree produced by `CQLParser.searchCategory`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCategory?: (ctx: SearchCategoryContext) => Result;
}

