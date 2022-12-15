type FX = () => JSX.Element;

type Props = {
  apps: FX[];
  onClick: (_: number) => void;
};

function AppSelect({ apps, onClick }: Props) {
  console.log("AppSelect render");
  return (
    <div>
      {apps.map((app, i) => (
        <button key={i} onClick={() => onClick(i)}>
          {app.name}
        </button>
      ))}
    </div>
  );
}

export default AppSelect;
