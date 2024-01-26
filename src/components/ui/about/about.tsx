import { Idea } from "@/components/ui/about/idea-presentation";

export function About(): JSX.Element {
  return (
    <div className="gap-y-34">
      <Idea
        title="Our vision"
        description="vision du penki"
        subDescription="annotation sur la vision du penki"
      />

      <Idea
        title="Our members"
        description="goats"
        subDescription="annotation sur les "
      />
    </div>
  );
}
