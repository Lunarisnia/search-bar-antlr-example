// Generated from ./grammar/CQL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./CQLParser";
import { RawTextContext } from "./CQLParser";
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

