interface HeaderProps {
  title: string;
  subtitle: string;
  center?: string;
}

const HeadingC: React.FC<HeaderProps> = ({ subtitle, title, center }) => {
  return (
    <div>
      <div className={`${center ? "text-center" : "text-start"}`}>
        <div className="text2xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
    </div>
  );
};
export default HeadingC;
