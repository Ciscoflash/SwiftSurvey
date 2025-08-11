export default function MobileStatusBar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full">
      <div className="flex justify-between items-center px-6 py-2 text-white text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
          <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
          <div className="w-4 h-2 bg-white rounded-sm"></div>
          <div className="w-5 h-3 border border-white rounded-sm">
            <div className="w-full h-full bg-white rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
