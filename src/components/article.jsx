function Article({img, imgAlt, title, desc, tags, date}) {
  return (
    <div className="flex justify-center items-center gap-8 w-full my-6">
      <img src={img} alt={imgAlt} className="w-1/12 h-full" />
      <div className="flex flex-col justify-between text-left w-3/5">
        <div>
          <div className="text-xl font-medium">{title}</div>
          <div className="">{desc}</div>
        </div>
        <div className="flex justify-between">
          <div className="">Tags : {tags.join(", ")}</div>
          <div className="text-right">Date : {date}</div>
        </div>
      </div>
    </div>
  );
}

export default Article;
