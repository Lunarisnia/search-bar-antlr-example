<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <center>
          <h1>Cooler Cosmart</h1>
        </center>
        <v-text-field density="compact" placeholder="What are you thinking?" prepend-inner-icon="mdi-magnify"
          variant="outlined" v-model="searchQuery" @change="showCards"></v-text-field>
        <center>
          <v-row>
            <v-col v-bind:key="item.name" v-for="item in items" align-self="center">
              <ItemCard :productName="item.name" :category="item.category" :brand="item.brand" :price="item.price" />
            </v-col>
          </v-row>
        </center>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script lang="ts">
import { CharStream, CommonTokenStream } from "antlr4";
import CQLLexer from "./grammar/CQLLexer";
import CQLParser, { ExpressionContext, ProgramContext, RawTextContext, SearchBrandContext, SearchCategoryContext, SearchPriceContext, SemicolonContext } from "./grammar/CQLParser";
import CQLVisitor from "./grammar/CQLVisitor";

class CustomVisitor<Result> extends CQLVisitor<Result> {
  constructor() {
    super();
  }

  visitProgram: (ctx: ProgramContext) => Result = (ctx: ProgramContext) => {
    let treeMap = {};
    for (const child of ctx.children || []) {
      const childResult = this.visit(child) as any
      if (childResult) {
        const keys = Object.keys(childResult);
        if (treeMap.hasOwnProperty(keys[0])) {
          continue;
        }
        treeMap = {
          ...treeMap,
          ...this.visit(child) as any,
        }
      }
    }
    return treeMap as Result;
  };

  visitSearchCategory: (ctx: SearchCategoryContext) => Result = (ctx: SearchCategoryContext) => {
    const desiredCategories = [];
    for (const rawText of ctx.rawText_list()) {
      desiredCategories.push(rawText.getText());
    }
    return { "searchCategory": desiredCategories } as Result;
  }

  visitRawText: (ctx: RawTextContext) => Result = (ctx: RawTextContext) => {
    return { "rawText": ctx.getText() } as Result;
  }

  visitSemicolon: (ctx: SemicolonContext) => Result = (ctx: SemicolonContext) => {
    return { "semicolon": ctx.getText() } as Result;
  }

  visitSearchBrand: (ctx: SearchBrandContext) => Result = (ctx: SearchBrandContext) => {
    const desiredBrands = [];
    for (const rawText of ctx.rawText_list()) {
      desiredBrands.push(rawText.getText());
    }
    return { "searchBrand": desiredBrands } as Result;
  }

  visitSearchPrice: (ctx: SearchPriceContext) => Result = (ctx: SearchPriceContext) => {
    const expression = this.visit(ctx.expression())
    return { "searchPrice": expression } as Result;
  }

  visitExpression: (ctx: ExpressionContext) => Result = (ctx: ExpressionContext) => {
    let expression = {};
    expression = {
      ...expression,
      "operator": ctx.getChild(0)?.getText(),
      "value": ctx.rawText(0).getText()
    }

    if (ctx.AND()) {
      expression = {
        ...expression,
        "and": {
          "operator": ctx.getChild(3)?.getText(),
          "value": ctx.rawText(1).getText()
        }
      }
    }
    return expression as Result;
  }
}

export default {
  data: () => {
    return {
      searchQuery: "",
      categories: ["Electronic", "Skincare", "Toy"],
      items: [
        {
          name: "Redmi 69420",
          brand: "Xiaomi",
          category: "Electronic",
          price: 30,
        },
        {
          name: "Pocopon 6969",
          brand: "Xiaomi",
          category: "Electronic",
          price: 20,
        },
        {
          name: "Samsung Galaxy Z Fold 69",
          brand: "Samsung",
          category: "Electronic",
          price: 69,
        },
      ],
    };
  },
  mounted: () => { },
  methods: {
    showCards() { },
  },
  // computed: {
  //   parsedQuery: function () {

  //     return this.searchQuery;
  //   },
  // },
  watch: {
    searchQuery: function (val) {
      const input = val;
      const chars = new CharStream(input);
      const lexer = new CQLLexer(chars);
      const tokens = new CommonTokenStream(lexer);
      const parser = new CQLParser(tokens);
      const tree = parser.program();

      if (parser.syntaxErrorsCount > 0) {
        console.log("Syntax Errors");
      } else {
        const visitor = new CustomVisitor<any>();
        const result = visitor.visit(tree);
        console.log(result);
      }
    }
  }
};
</script>