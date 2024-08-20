"use client";

import { useState } from "react";

export default function Table() {
  const [row, setRow] = useState<number>(1);
  const [column, setColumn] = useState<number>(1);
  const [textColor, setTextColor] = useState<string>("#000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#fff");
  const [tableWidth, setTableWidth] = useState<number>(100);
  const [tableWidthMode, setTableWidthMode] = useState<string>("%");
  const [borderColor, setBorderColor] = useState<string>("#000");
  const [borderWidth, setBorderWidth] = useState<number>(1);
  const [borderWidthMode, setBorderWidthMode] = useState<string>("px");
  const [borderMode, setBorderMode] = useState<string>("solid");
  const [padding, setPadding] = useState<number>(1);
  const [paddingMode, setPaddingMode] = useState<string>("px");
  const [headerColor, setHeaderColor] = useState<string>("#f00");
  const [collapseBorder, setCollapseBorder] = useState<boolean>(true);
  const [displaySampleText, setDisplaySampleText] = useState<boolean>(true);

  return (
    <div>
      <div>
        <table
          style={{
            color: textColor,
            backgroundColor: backgroundColor,
            width: `${tableWidth}${tableWidthMode}`,
            border: `${borderWidth}${borderWidthMode} ${borderMode} ${borderColor}`,
            borderCollapse: collapseBorder ? "collapse" : undefined,
          }}
        >
          <thead>
            <tr>
              {Array.from({ length: column }, (_, idx) => idx + 1).map(
                (col) => (
                  <th
                    key={`header-${col}`}
                    style={{
                      color: headerColor,
                      border: `${borderWidth}${borderWidthMode} ${borderMode} ${borderColor}`,
                      padding: `${padding}${paddingMode}`,
                    }}
                  >
                    {displaySampleText ? `Header${col}` : null}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: row }, (_, idx) => idx + 1).map((r) => (
              <tr key={`row-${r}`}>
                {Array.from({ length: column }, (_, idx) => idx + 1).map(
                  (c) => (
                    <td
                      key={`column-${c}`}
                      style={{
                        border: `${borderWidth}${borderWidthMode} ${borderMode} ${borderColor}`,
                        padding: `${padding}${paddingMode}`,
                      }}
                    >
                      {displaySampleText ? `Row ${r}, Cell ${c}` : null}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <label htmlFor="row">Rows: </label>
          <input
            id="row"
            type="text"
            value={row}
            onChange={(e) => setRow(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="column">Columns: </label>
          <input
            id="column"
            type="text"
            value={column}
            onChange={(e) => setColumn(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="textColor">Text Color: </label>
          <input
            id="textColor"
            type="text"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color: </label>
          <input
            id="backgroundColor"
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tableWidth">Table Width: </label>
          <input
            id="tableWidth"
            type="text"
            value={tableWidth}
            onChange={(e) => setTableWidth(Number(e.target.value))}
          />
          <select onChange={(e) => setTableWidthMode(e.target.value)}>
            <option value="%">%</option>
            <option value="px">px</option>
          </select>
        </div>
        <div>
          <label htmlFor="borderWidth">Border Width: </label>
          <input
            id="borderWidth"
            type="text"
            value={borderWidth}
            onChange={(e) => setBorderWidth(Number(e.target.value))}
          />
          <select onChange={(e) => setBorderWidthMode(e.target.value)}>
            <option value="cm">Centimetres</option>
            <option value="mm">Milimetres</option>
            <option value="in">Inches</option>
            <option value="pt">Points</option>
            <option value="pc">Picas</option>
            <option value="px">Pixels</option>
            <option value="em">Em</option>
            <option value="ex">Ex</option>
            <option value="ch">Ch</option>
            <option value="rem">Rem</option>
            <option value="vw">Vw</option>
            <option value="vh">Vh</option>
            <option value="vmin">Vmin</option>
            <option value="vmax">Vmax</option>
          </select>
          <select onChange={(e) => setBorderMode(e.target.value)}>
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
            <option value="double">Double</option>
            <option value="groove">Groove</option>
            <option value="ridge">Ridge</option>
            <option value="inset">Inset</option>
            <option value="outset">Outset</option>
          </select>
        </div>
        <div>
          <label htmlFor="borderColor">Border Color: </label>
          <input
            id="borderColor"
            type="text"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="padding">Padding: </label>
          <input
            id="padding"
            type="text"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
          />
          <select onChange={(e) => setPaddingMode(e.target.value)}>
            <option value="cm">Centimetres</option>
            <option value="mm">Milimetres</option>
            <option value="in">Inches</option>
            <option value="pt">Points</option>
            <option value="pc">Picas</option>
            <option value="px">Pixels</option>
            <option value="em">Em</option>
            <option value="ex">Ex</option>
            <option value="ch">Ch</option>
            <option value="rem">Rem</option>
            <option value="vw">Vw</option>
            <option value="vh">Vh</option>
            <option value="vmin">Vmin</option>
            <option value="vmax">Vmax</option>
          </select>
        </div>
        <div>
          <label htmlFor="headerColor">Header Color: </label>
          <input
            id="headerColor"
            type="text"
            value={headerColor}
            onChange={(e) => setHeaderColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="collapseBorder">Collapse Border: </label>
          <select
            onChange={(e) =>
              e.target.value === "yes"
                ? setCollapseBorder(true)
                : setCollapseBorder(false)
            }
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="displaySampleText">Display Sample Text: </label>
          <select
            onChange={(e) =>
              e.target.value === "yes"
                ? setDisplaySampleText(true)
                : setDisplaySampleText(false)
            }
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div>
        <h3>CSS code</h3>
        <p>
          table {`{`}
          color: {textColor}; background-color: {backgroundColor}; width:{" "}
          {tableWidth}
          {tableWidthMode}; border: {borderWidth}
          {borderWidthMode} {borderMode} {borderColor};
          {collapseBorder ? `border-collapse: collapse` : null}
          {`}`}
          th, td {`{`}
          border: {borderWidth}
          {borderWidthMode} {borderMode} {borderColor}; padding: {padding}
          {paddingMode}
          {`}`}
          th {`{`}
          color: {headerColor};{`}`}
        </p>
      </div>
      <div>
        <h3>HTML code</h3>
        <p>
          {`
              <table>
                <thead>
                  <tr>
                    ${Array.from({ length: column }, (_, idx) => idx + 1).map(
                      (col) =>
                        `<th>${displaySampleText ? `Header${col}` : ""}</th>`
                    )}
                  </tr>
                </thead>
                <tbody>
                  ${Array.from({ length: row }, (_, idx) => idx + 1).map(
                    (r) =>
                      `<tr>
                      ${Array.from({ length: column }, (_, idx) => idx + 1).map(
                        (col) =>
                          `<th>${
                            displaySampleText ? `Row ${r}, Cell ${col}` : ""
                          }</th>`
                      )}
                    </tr>`
                  )}
                </tbody>
              </table>
            `}
        </p>
      </div>
    </div>
  );
}
