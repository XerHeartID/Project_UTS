function Article({img, imgAlt, title, desc, tags, date}) {
  return (
    <div className="flex flex-row justify-center items-center gap-8 w-full mx-auto my-6">
      <img src={img} alt={imgAlt} className="w-2/6 tm:w-3/12  md:w-1/6 h-full" />
      <div className="flex flex-col justify-between text-left w-4/6 md:3/5">
        <div>
          <div className="text-base md:text-xl font-medium">{title}</div>
          <div className="hidden tm:block text-sm md:text-base">{desc}</div>
        </div>
        <div className="flex justify-between text-sm md:text-base">
          <div className="">Tags : {tags.join(", ")}</div>
          <div className="text-right">Date : {date}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
