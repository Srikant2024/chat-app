const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`flex items-start gap-3 ${
            idx % 2 === 0 ? "justify-start" : "justify-end flex-row-reverse"
          }`}
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />

          {/* Message block */}
          <div className="flex flex-col gap-2">
            {/* Name skeleton */}
            <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-md" />

            {/* Bubble skeleton */}
            <div className="h-16 w-[200px] bg-gray-300 animate-pulse rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
