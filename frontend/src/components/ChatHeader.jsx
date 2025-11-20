import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-gray-300 bg-white">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt={selectedUser.fullName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-medium text-gray-900">{selectedUser.fullName}</h3>
            <p className="text-sm text-gray-500">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>

        </div>

        {/* Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-2 rounded hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
