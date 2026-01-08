'use client';

import { motion } from 'framer-motion';
import { Category } from '@/data/services';
import { Palette, Megaphone, Sparkles, FileText } from 'lucide-react';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'design-development': <Palette className="w-4 h-4" />,
  'marketing': <Megaphone className="w-4 h-4" />,
  'branding': <Sparkles className="w-4 h-4" />,
  'content': <FileText className="w-4 h-4" />,
};

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              relative flex items-center gap-2.5 px-6 py-3.5 rounded-full
              font-medium text-sm transition-all duration-400
              ${isActive
                ? 'text-[#09090b]'
                : 'bg-transparent text-[var(--text-secondary)] hover:text-white hover:bg-[var(--bg-card)]/60'
              }
            `}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-gold)] rounded-full"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? 'text-[#09090b]' : ''}`}>
              {categoryIcons[category.id]}
            </span>
            <span className="relative z-10">{category.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
