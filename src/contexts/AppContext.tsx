import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

interface AppContextType {
  completedTopics: string[];
  toggleTopicCompletion: (topicId: string) => void;
  isTopicCompleted: (topicId: string) => boolean;
  onlineStatus: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  useEffect(() => {
    // Load initial completed topics
    const saved = storageService.getCompletedTopicIds();
    setCompletedTopics(saved);

    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toggleTopicCompletion = (topicId: string) => {
    const updated = storageService.toggleTopicCompleted(topicId);
    setCompletedTopics(updated);
  };

  const isTopicCompleted = (topicId: string) => completedTopics.includes(topicId);

  return (
    <AppContext.Provider
      value={{
        completedTopics,
        toggleTopicCompletion,
        isTopicCompleted,
        onlineStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
