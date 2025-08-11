export default function MobileStatusBar() {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: false 
  });

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[430px]">
      <div className="flex justify-between items-center px-4 sm:px-6 py-2 text-white text-sm font-medium">
        <span>{currentTime}</span>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white rounded-sm opacity-60"></div>
          <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white rounded-sm opacity-80"></div>
          <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-white rounded-sm"></div>
          <div className="w-4 h-2 sm:w-5 sm:h-3 border border-white rounded-sm">
            <div className="w-full h-full bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
