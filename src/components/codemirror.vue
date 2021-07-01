<template>
  <div>
    <codemirror
      ref="cmEditor"
      v-model="currentFileContent"
      :options="cmOptions"
    />
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import CodeMirror from "codemirror";
import "codemirror/mode/meta.js";
import "codemirror/addon/mode/simple.js";
import "codemirror/lib/codemirror.css";
import "codemirror/lib/codemirror.js";
import "../themes/darcula.css";
import defaultCode from "!raw-loader!../default-code.txt";
import { defineSkriptMode } from "../modes/skript.js";

export default {
  name: "CodeMirror",
  components: {
    codemirror,
  },
  data() {
    return {
      currentFileContent: "",
      cmOptions: {
        theme: "darcula",
        lineNumbers: true,
        lineWrapping: true,
      },
    };
  },
  computed: {
    editor() {
      return this.$refs["cmEditor"].codemirror;
    },
  },
  methods: {},
  mounted() {
    this.currentFileContent = defaultCode;

    // If you make a new syntax mode, import the new defining function and change the mode here to test
    defineSkriptMode(CodeMirror);
    this.editor.setOption("mode", "skript");

    this.editor.setSize(null, 800);
  },
};
</script>

<style>
</style>