<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <center>
          <h1>Cooler Cosmart</h1>
        </center>
        <v-text-field
          density="compact"
          placeholder="What are you thinking?"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          v-model="searchQuery"
          @change="showCards"
        ></v-text-field>
        <center>
          <v-row>
            <v-col
              v-bind:key="item.name"
              v-for="item in items"
              align-self="center"
            >
              <ItemCard
                :productName="item.name"
                :category="item.category"
                :brand="item.brand"
                :price="item.price"
              />
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
import CQLParser, { ProgramContext } from "./grammar/CQLParser";
import CQLVisitor from "./grammar/CQLVisitor";

class CustomVisitor<Result> extends CQLVisitor<Result> {
  constructor() {
    super();
  }

  visitProgram: (ctx: ProgramContext) => Result = (ctx: ProgramContext) => {
    console.log("FOOOBARR");
    return "A" as Result;
  };
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
  mounted: () => {},
  methods: {
    showCards() {},
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
        visitor.visit(tree);
      }
    }
  }
};
</script>