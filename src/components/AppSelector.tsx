import { createElement, useState } from "react";

interface Props {
  apps: (() => JSX.Element)[];
}

function AppSelector({ apps }: Props) {
  console.log("AppSelector render");
  const [appNr, setAppNr] = useState(0);
  return (
    <>
      <div>
        {apps.map((app, i) => (
          <button
            key={i}
            onClick={() => setAppNr(i)}
            style={{ fontWeight: i === appNr ? "800" : "normal" }}
          >
            {app.name}
          </button>
        ))}
      </div>
      <div>{createElement(apps[appNr])}</div>
    </>
  );
}

export default AppSelector;
