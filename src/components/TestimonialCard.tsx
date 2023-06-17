function TestimonialCard({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: string;
}) {
  return (
    <div
      className="min-h-[136px] p-5 bg-white text-[#19191A] rounded-xl
      snap-start select-none cursor-grab
      shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),0px_1px_1px_rgba(0,_0,_0,_0.04)]
    "
    >
      <div className="whitespace-nowrap min-w-[350px]">
        <span className="font-semibold">{title}</span>
        &nbsp;&nbsp;
        <span className="text-sm text-[#96979A]">{subtitle}</span>
      </div>
      <p className="mt-5 line-clamp-3"> {content}</p>
    </div>
  );
}

export default TestimonialCard;
