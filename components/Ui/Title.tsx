type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="mx-auto text-4xl text-center text-green-500 font-bold">
        {title}
      </h1>
    </>
  );
}

