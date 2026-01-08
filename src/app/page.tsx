'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { categories, getServicesByCategory } from '@/data/services';
import { usePlanStore } from '@/hooks/usePlanStore';
import { useUnifiedQuoteStore, serviceMetadata } from '@/hooks/useUnifiedQuoteStore';
import CategoryTabs from '@/components/CategoryTabs';
import ServiceCard from '@/components/ServiceCard';
import PlanSummary from '@/components/PlanSummary';
import QuoteForm from '@/components/QuoteForm';
import { Sparkles, ArrowRight, Percent, FileText } from 'lucide-react';
import Link from 'next/link';

export default function BuildMyPlan() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const { itemCount, discountPercentage, total } = usePlanStore();
  const { getAllConfiguredServices } = useUnifiedQuoteStore();

  const configuredServices = getAllConfiguredServices();
  const hasConfiguredServices = configuredServices.length > 0;
  const firstConfiguredService = configuredServices[0];

  const filteredServices = useMemo(() => {
    return getServicesByCategory(activeCategory);
  }, [activeCategory]);

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] bg-particles">
      {/* Header - More generous spacing */}
      <header className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-center overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[600px] bg-gradient-to-b from-[var(--accent-purple)]/8 via-[var(--accent-fuchsia)]/5 to-transparent rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Top Badge - Refined */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--border-subtle)] rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[var(--accent-orange)]" />
            <span className="text-sm text-[var(--text-secondary)] tracking-wide">13 Services • 3 Tiers • Unlimited Possibilities</span>
          </motion.div>

          {/* Title - Larger, more impactful */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 tracking-tight">
            Build Your{' '}
            <span className="gradient-text">Perfect Plan</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Select services, choose your tier, and build a custom package tailored to your needs.
            Bundle more to save more.
          </p>

          {/* Discount Badges - Sophisticated, subtle */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-2.5 px-5 py-3 bg-[var(--bg-card)]/40 backdrop-blur-sm rounded-2xl border border-[var(--border-subtle)]"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--accent-purple)]/10 flex items-center justify-center">
                <Percent className="w-3.5 h-3.5 text-[var(--accent-purple)]" />
              </div>
              <div className="text-left">
                <span className="text-xs text-[var(--text-muted)] block">3+ services</span>
                <span className="text-sm font-semibold text-[var(--accent-purple)]">10% OFF</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2.5 px-5 py-3 bg-[var(--bg-card)]/40 backdrop-blur-sm rounded-2xl border border-[var(--border-subtle)]"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--accent-pink)]/10 flex items-center justify-center">
                <Percent className="w-3.5 h-3.5 text-[var(--accent-pink)]" />
              </div>
              <div className="text-left">
                <span className="text-xs text-[var(--text-muted)] block">5+ services</span>
                <span className="text-sm font-semibold text-[var(--accent-pink)]">15% OFF</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2.5 px-5 py-3 bg-gradient-to-r from-[var(--accent-orange)]/10 to-[var(--accent-gold)]/10 backdrop-blur-sm rounded-2xl border border-[var(--accent-orange)]/20"
            >
              <div className="w-7 h-7 rounded-full bg-[var(--accent-orange)]/15 flex items-center justify-center">
                <Percent className="w-3.5 h-3.5 text-[var(--accent-orange)]" />
              </div>
              <div className="text-left">
                <span className="text-xs text-[var(--text-muted)] block">7+ services</span>
                <span className="text-sm font-semibold text-[var(--accent-orange)]">20% OFF</span>
              </div>
            </motion.div>
          </div>

          {/* Quote Summary Button - Only visible when services are configured */}
          {hasConfiguredServices && firstConfiguredService && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href={`${serviceMetadata[firstConfiguredService.type].builderPath}?summary=true`}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] text-white font-semibold rounded-xl hover:shadow-[0_8px_32px_rgba(167,139,250,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                View Quote Summary
                <span className="px-2.5 py-0.5 bg-white/20 rounded-full text-sm">
                  {configuredServices.length} {configuredServices.length === 1 ? 'service' : 'services'}
                </span>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </header>

      {/* Main Content - More breathing room */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Category Description */}
        {currentCategory && (
          <motion.p
            key={currentCategory.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto"
          >
            {currentCategory.description}
          </motion.p>
        )}

        {/* Grid Layout - Better proportions */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 xl:gap-12">
          {/* Services Grid */}
          <div>
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-6 lg:gap-8 items-start"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ServiceCard
                    service={service}
                    isExpanded={expandedServiceId === service.id}
                    onToggleExpand={() => setExpandedServiceId(
                      expandedServiceId === service.id ? null : service.id
                    )}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Plan Summary Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <PlanSummary onRequestQuote={() => setIsQuoteFormOpen(true)} />
          </div>
        </div>
      </section>

      {/* Floating CTA (Mobile) - Refined glass effect */}
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 p-5 glass border-t border-[var(--border-subtle)] lg:hidden z-40"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[var(--text-secondary)] text-sm">{itemCount} services selected</span>
              {discountPercentage > 0 && (
                <span className="ml-2 px-2.5 py-1 bg-[var(--accent-purple)]/15 text-[var(--accent-purple)] text-xs font-medium rounded-full">
                  {discountPercentage}% OFF
                </span>
              )}
            </div>
            <div className="text-2xl font-bold gradient-text">
              ${total.toLocaleString()}
            </div>
          </div>
          <button
            onClick={() => setIsQuoteFormOpen(true)}
            className="w-full btn-primary flex items-center justify-center gap-2 py-4"
          >
            Request Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />

      {/* Footer - Subtle, minimal */}
      <footer className="border-t border-[var(--border-subtle)] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--text-muted)] text-sm">
            &copy; {new Date().getFullYear()} SkyFynd. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs mt-3 opacity-70">
            Prices are starting points. Final pricing may vary based on project scope.
          </p>
        </div>
      </footer>
    </main>
  );
}
