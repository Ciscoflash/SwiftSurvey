import { useState } from "react";
import { motion } from "framer-motion";
import { useScreenNavigation } from "@/hooks/use-screen-navigation";

// Mock friend data for the UI
const friendsData = [
  { id: 1, name: "Liam Johnson", handle: "@liamjohnson", avatar: "👨‍💼" },
  { id: 2, name: "Ava Brown", handle: "@avabrown.com", avatar: "👩‍🦱" },
  { id: 3, name: "Noah Williams", handle: "@noahwilliams", avatar: "👨‍🎨" },
  { id: 4, name: "Zoe Davis", handle: "@zoedavis", avatar: "👩‍💻" }
];

const contactsData = [
  { id: 5, name: "Liam Johnson", phone: "+1234567890", avatar: "👨‍💼" },
  { id: 6, name: "Emma Brown", phone: "+1234567891", avatar: "👩‍🦰" },
  { id: 7, name: "Oliver Smith", phone: "+1234567892", avatar: "👨‍🚀" },
  { id: 8, name: "Noah Williams", phone: "+1234567893", avatar: "👨‍🎨" },
  { id: 9, name: "Ava Martinez", phone: "+1234567894", avatar: "👩‍🎤" }
];

export default function FriendsScreen() {
  const { navigateToScreen } = useScreenNavigation();
  const [currentStep, setCurrentStep] = useState<'main' | 'contacts' | 'invite'>('main');
  const [showContactsPermission, setShowContactsPermission] = useState(false);
  const [addedFriends, setAddedFriends] = useState<number[]>([]);
  const [invitedContacts, setInvitedContacts] = useState<number[]>([]);

  const handleAddFriend = (friendId: number) => {
    setAddedFriends(prev => 
      prev.includes(friendId) 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  const handleInviteContact = (contactId: number) => {
    setInvitedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleAllowContacts = () => {
    setShowContactsPermission(false);
    setCurrentStep('contacts');
  };

  const handleInvite = () => {
    if (currentStep === 'main') {
      setShowContactsPermission(true);
    } else if (currentStep === 'contacts') {
      setCurrentStep('invite');
    } else {
      // Navigate to photo capture screen
      navigateToScreen("/photo-capture");
    }
  };

  const renderMainScreen = () => (
    <>
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-responsive-xl font-bold text-white mb-2"
        >
          Events are more fun
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-responsive-xl font-bold text-white mb-4"
        >
          with your crew! 🎉
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-sm"
        >
          Find friends already on Tempo or invite new ones to tag along.
        </motion.p>
      </div>

      {/* Friends Grid */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          {friendsData.map((friend, index) => (
            <motion.div
              key={friend.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="relative bg-white/5 border border-white/20 rounded-xl p-4"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">{friend.avatar}</span>
                </div>
                <h3 className="text-white text-sm font-medium mb-1">{friend.name}</h3>
                <p className="text-gray-400 text-xs mb-3">{friend.handle}</p>
                <button
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    addedFriends.includes(friend.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-tempo-orange text-white hover:bg-tempo-orange-light'
                  }`}
                  onClick={() => handleAddFriend(friend.id)}
                >
                  {addedFriends.includes(friend.id) ? 'Added' : 'Add'}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center text-gray-400 text-sm mb-4">
          view 22 more
        </div>
      </div>
    </>
  );

  const renderContactsScreen = () => (
    <>
      {/* Header */}
      <div className="mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search for your friends"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-tempo-orange"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg width="16" height="16" fill="currentColor" className="text-gray-400">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
        </div>
        <div className="text-white text-sm font-medium mb-4">
          3 friends using tempo in your contact
        </div>
      </div>

      {/* Friends List */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="space-y-3 mb-6">
          {friendsData.slice(0, 4).map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center">
                  <span className="text-sm">{friend.avatar}</span>
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{friend.name}</div>
                  <div className="text-gray-400 text-xs">{friend.handle}</div>
                </div>
              </div>
              <button
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  addedFriends.includes(friend.id)
                    ? 'bg-green-600 text-white'
                    : 'bg-tempo-orange text-white hover:bg-tempo-orange-light'
                }`}
                onClick={() => handleAddFriend(friend.id)}
              >
                {addedFriends.includes(friend.id) ? 'Added' : 'Add'}
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-4">
          <div className="text-white text-sm font-medium mb-4">Invite Friends From Contacts</div>
          <div className="space-y-3">
            {contactsData.slice(0, 5).map((contact) => (
              <div key={contact.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-tempo-orange to-tempo-orange-light rounded-full flex items-center justify-center">
                    <span className="text-sm">{contact.avatar}</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{contact.name}</div>
                    <div className="text-gray-400 text-xs">{contact.phone}</div>
                  </div>
                </div>
                <button
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    invitedContacts.includes(contact.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-tempo-orange text-white hover:bg-tempo-orange-light'
                  }`}
                  onClick={() => handleInviteContact(contact.id)}
                >
                  {invitedContacts.includes(contact.id) ? 'Invited' : 'Invite'}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="text-tempo-orange text-sm hover:text-tempo-orange-light">
              All contact
            </button>
          </div>
          <div className="mt-4 p-3 bg-white/5 rounded-xl">
            <div className="text-white text-sm font-medium mb-1">Share your Tempo Link</div>
            <div className="text-gray-400 text-xs">Share your link with friends to connect</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="gradient-bg-alt min-h-screen min-h-[100dvh] relative"
    >
      <div className="mobile-content min-h-[100dvh] flex flex-col">
        {/* Skip Button */}
        <div className="flex justify-end mb-4">
          <button 
            className="text-white/70 text-sm hover:text-white transition-colors"
            onClick={() => navigateToScreen("/photo-capture")}
          >
            Skip
          </button>
        </div>

        {currentStep === 'main' ? renderMainScreen() : renderContactsScreen()}

        {/* Invite Button */}
        <div className="mt-auto pt-4 pb-safe">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="tempo-button w-full btn-responsive rounded-full text-white font-semibold shadow-lg"
            onClick={handleInvite}
          >
            {currentStep === 'invite' ? 'Done' : 'Invite'}
          </motion.button>
        </div>

        {/* Contacts Permission Modal */}
        {showContactsPermission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-sm w-full"
            >
              <div className="text-center mb-6">
                <div className="text-white font-semibold mb-2">"Tempo" Would Like to Access Your Contacts</div>
                <div className="text-gray-400 text-sm">
                  This app needs your Contacts to Find and Invite Friends
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  className="flex-1 py-3 bg-gray-600 rounded-xl text-white font-medium"
                  onClick={() => setShowContactsPermission(false)}
                >
                  Don't Allow
                </button>
                <button
                  className="flex-1 py-3 bg-tempo-orange rounded-xl text-white font-medium"
                  onClick={handleAllowContacts}
                >
                  Allow
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}