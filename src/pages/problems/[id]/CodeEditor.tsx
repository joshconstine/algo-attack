import React from "react";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

type Props = {
  codeEditorInput: string;
  setCodeEditorInput: (codeEditorInput: string) => void;
  fontSize: string;
};

export default function CodeEditor({
  fontSize,
  codeEditorInput,
  setCodeEditorInput,
}: Props) {
  return (
    <div className="h-full w-full overflow-auto">
      <CodeMirror
        value={codeEditorInput}
        onChange={(value) => setCodeEditorInput(value)}
        width="100%"
        height="1000px"
        extensions={[keymap.of(defaultKeymap), javascript()]}
        theme={vscodeDark}
        style={{ fontSize: fontSize }}
      />
    </div>
  );
}
