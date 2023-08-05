import React from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

type Props = {
  codeEditorInput: string;
  setCodeEditorInput: (codeEditorInput: string) => void;
};

export default function CodeEditor({
  codeEditorInput,
  setCodeEditorInput,
}: Props) {
  return (
    <div className="h-16 w-1/2">
      <CodeMirror
        value={codeEditorInput}
        onChange={(value) => setCodeEditorInput(value)}
        height="300px"
        width="100%"
        extensions={[keymap.of(defaultKeymap)]}
        theme={vscodeDark}
      />
    </div>
  );
}
