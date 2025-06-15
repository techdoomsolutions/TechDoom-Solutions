type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl text-center  font-bold text-green-500 uppercase">{title}</h1>
    </>
  );
}
