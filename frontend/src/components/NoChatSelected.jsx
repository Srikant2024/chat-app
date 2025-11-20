import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gray-50">
      <div className="max-w-md text-center space-y-6">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center animate-bounce">
            <MessageSquare className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-900">Welcome to Chatty!</h2>
        <p className="text-gray-500">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
