import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-gray-800">Theme</h2>
          <p className="text-sm text-gray-500">
            Choose a theme for your chat interface
          </p>
        </div>

        {/* Theme List */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition 
                ${theme === t ? "bg-gray-200" : "hover:bg-gray-100"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden border"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-blue-600"></div>
                  <div className="rounded bg-purple-600"></div>
                  <div className="rounded bg-green-600"></div>
                  <div className="rounded bg-gray-700"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center text-gray-700">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Preview</h3>

        <div className="rounded-xl border border-gray-300 overflow-hidden bg-white shadow-lg">
          <div className="p-4 bg-gray-100">
            <div className="max-w-lg mx-auto">

              {/* Chat Preview Box */}
              <div className="bg-white rounded-xl shadow border border-gray-300 overflow-hidden">

                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-300 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-800">John Doe</h3>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-white">
                  {PREVIEW_MESSAGES.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${msg.isSent ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}
                        `}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p
                          className={`text-[10px] mt-1.5 ${
                            msg.isSent ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-300 bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />

                    <button className="px-4 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm h-10 hover:bg-blue-700 transition">
                      <Send size={18} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
