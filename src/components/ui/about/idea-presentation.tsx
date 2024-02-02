export function Idea({
  title,
  description,
  subDescription,
}: Readonly<{
  title: string;
  description: string;
  subDescription: string;
}>): JSX.Element {
  return (
    <div className="flex flex-col w-96 justify-start items-start my-52 gap-y-2">
      <div className="flex flex-row items-center">
        <hr className="w-4 md:w-10 border-2 border-white" />
        <hr className="w-48 md:w-96 border-1 border-zinc-800" />
      </div>
      <h1 className="text-xl md:text-4xl mt-10 font-semibold"> {title}</h1>
      <p>{description}</p>
      <p className="mt-5 w-52 text-zinc-400 text-xs md:text-sm">
        {subDescription}
      </p>
    </div>
  );
}
