import React, { Dispatch, SetStateAction } from "react";

type Props = {
  handleReset: () => void;
  setFontSize: Dispatch<SetStateAction<string>>;
  fontSize: string;
};
const EDITOR_FONT_SIZES = [
  "12px",
  "13px",
  "14px",
  "15px",
  "16px",
  "17px",
  "18px",
  "20px",
  "22px",
  "26px",
];

function CodeEditorOptions({ handleReset, setFontSize, fontSize }: Props) {
  return (
    <div className="flex w-full justify-between">
      <div>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
      <div>
        Font Size:
        <select
          placeholder={fontSize}
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          {EDITOR_FONT_SIZES.map((size) => (
            <option value={size} key={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CodeEditorOptions;
