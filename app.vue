<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <center>
          <h1>Cooler Cosmart</h1>
        </center>
        <v-text-field density="compact" placeholder="What are you thinking?" prepend-inner-icon="mdi-magnify"
          variant="outlined" v-model="searchQuery"></v-text-field>
        <center>
          <v-row>
            <v-col v-bind:key="item.name" v-for="item in filteredCards" align-self="center">
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
      searchQueryTree: {} as any,

      searchQuery: "",
      categories: ["Electronic", "Skincare", "Toy"],
      items: [
        {
          id: 1,
          name: "Redmi 69420",
          brand: "Xiaomi",
          category: "Electronic",
          price: 30,
        },
        {
          id: 2,
          name: "Pocopon 6969",
          brand: "Xiaomi",
          category: "Electronic",
          price: 20,
        },
        {
          id: 3,
          name: "Samsung Galaxy Z Fold 69",
          brand: "Samsung",
          category: "Electronic",
          price: 69,
        },
        {
          id: 4,
          name: "Methamphetamine",
          brand: "Heisenberg",
          category: "Skincare",
          price: 420,
        },
        {
          id: 5,
          name: "M4A1-S",
          brand: "America",
          category: "Toy",
          price: 5,
        },
        {
          id: 6,
          name: "PlayStation 5",
          brand: "Sony",
          category: "Toy",
          price: 32,
        },
        {
          id: 7,
          name: "Nintendo 3DS",
          brand: "Nintendo",
          category: "Toy",
          price: 999,
        },
        {
          id: 8,
          name: "Opium",
          brand: "Heisenberg",
          category: "Skincare",
          price: 999,
        },
        {
          id: 9,
          name: "Lip Balm",
          brand: "Wardah",
          category: "Skincare",
          price: 341,
        },
      ],
    };
  },
  // This does nothing just make things harder to read because fuck you
  mounted: () => { },
  computed: {
    // This is incredibly complex for no reason because I am such a good programmer :)
    filteredCards: function () {
      // Get all the keys from the parse tree
      const treeKeys = Object.keys(this.searchQueryTree);

      // If there is nothing in the parse tree then just show all
      if (treeKeys.length < 1)
        return this.items;

      let filtered = [];
      if (treeKeys.includes("rawText")) {
        filtered.push(this.items.filter((item) => item.name.toLowerCase().includes(this.searchQueryTree.rawText.toLowerCase())));
      }

      if (treeKeys.includes("searchCategory")) {
        filtered.push(this.items.filter((item) => this.searchQueryTree.searchCategory.includes(item.category)));
      }

      if (treeKeys.includes("searchBrand")) {
        filtered.push(this.items.filter((item) => this.searchQueryTree.searchBrand.includes(item.brand)));
      }

      if (treeKeys.includes("searchPrice")) {
        let localFiltered: any[] = [];
        const searchPrice = this.searchQueryTree.searchPrice;
        switch (searchPrice.operator) {
          case ">":
            localFiltered = this.items.filter((item) => item.price > parseInt(searchPrice.value))
            break;
          case ">=":
            localFiltered = this.items.filter((item) => item.price >= parseInt(searchPrice.value))
            break;
          case "<":
            localFiltered = this.items.filter((item) => item.price < parseInt(searchPrice.value))
            break;
          case "<=":
            localFiltered = this.items.filter((item) => item.price <= parseInt(searchPrice.value))
            break;

          default:
            break;
        }
        if (searchPrice.and) {
          switch (searchPrice.and.operator) {
            case ">":
              localFiltered = localFiltered.filter((item) => item.price > parseInt(searchPrice.and.value))
              break;
            case ">=":
              localFiltered = localFiltered.filter((item) => item.price >= parseInt(searchPrice.and.value))
              break;
            case "<":
              localFiltered = localFiltered.filter((item) => item.price < parseInt(searchPrice.and.value))
              break;
            case "<=":
              localFiltered = localFiltered.filter((item) => item.price <= parseInt(searchPrice.and.value))
              break;

            default:
              break;
          }
        }

        filtered.push(localFiltered);
      }
      // Everything up before this pushes an array into another array so lets flatten it
      filtered = filtered.flat();

      // Count the duplicates of the item. "Wait there can be duplicates?" Yes.
      const itemCounter: any = {};
      for (const item of filtered) {
        if (itemCounter[item.id] == null) {
          itemCounter[item.id] = 0;
        }
        itemCounter[item.id] += 1;
      }

      // If its not empty string
      if (treeKeys.length > 1 && treeKeys[0] != "rawText") {
        // Remove non duplicate entry
        // We do this because relation between filter are AND which mean only the thing that fullfill ALL OF THEM are allowed.
        // And if they fullfill all of them then it has to be AND.
        // If you think this is complicated shut the fuck up.
        const noColon = treeKeys.filter((value) => value != 'semicolon');
        filtered = filtered.filter((item) => itemCounter[item.id] != noColon.length ? false : true)
      }
      filtered = filtered.filter((item, index, array) => {
        return array.indexOf(item) === index;
      })
      return filtered.flat();
    },
  },
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
        this.searchQueryTree = result;
      }
    }
  }
};
</script>