import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  scrollRef?: React.RefObject<HTMLElement | null>;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollRef }) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Reset main window scroll
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });

    // Reset container element scroll if passed
    if (scrollRef?.current) {
      scrollRef.current.scrollTop = 0;
      scrollRef.current.scrollLeft = 0;
    }
  }, [pathname, search, scrollRef]);

  return null;
};
