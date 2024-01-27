export function Idea({ title, description, subDescription }): JSX.Element {
  return (
    <div className="flex flex-col w-96 justify-start items-start my-52 gap-y-2">
      <div className="flex flex-row items-center">
        <hr className="w-10 border-2 border-white" />
        <hr className="w-96 border-1 border-zinc-800" />
      </div>
      <h1 className="text-4xl mt-10 font-semibold"> {title}</h1>
      <p>{description}</p>
      <p className="mt-5 w-52 text-zinc-400 text-sm">{subDescription}</p>
    </div>
  );
}
