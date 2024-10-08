const Title = ({ title, className, icon}) => {
  return (
    <div className={`${className} font-cSemibold text-clamp_title`}>
      <h1 className="text-start w-fit relative leading-0">
        {title}
        <img src={icon} alt="group" className="absolute top-1/3 right-0 object-contain"/>
      </h1>
    </div>
  );
};

export default Title;
