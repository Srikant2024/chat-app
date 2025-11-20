import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-gray-300 flex flex-col transition-all duration-200">
      
      {/* Header */}
      <div className="border-b border-gray-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-gray-700" />
          <span className="font-medium hidden lg:block text-gray-800">Contacts</span>
        </div>
      </div>

      {/* Contacts List */}
      <div className="overflow-y-auto w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            
            {/* Avatar Skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
            </div>

            {/* Text Skeleton (Hidden on small screens) */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="h-4 w-32 bg-gray-300 animate-pulse rounded-md mb-2" />
              <div className="h-3 w-16 bg-gray-300 animate-pulse rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
