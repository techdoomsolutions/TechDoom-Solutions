type TitleLineProps = {
  titleline: string;
};

export default function TitleLine({ titleline }: TitleLineProps) {
  return (
    <>
      <p className="max-w-5xl mx-auto text-lg text-center text-gray-700">
        {titleline}
      </p>
    </>
  );
}
