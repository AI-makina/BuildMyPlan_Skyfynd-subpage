'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '@/data/services';
import { usePlanStore } from '@/hooks/usePlanStore';
import { Check, Plus, Minus, ChevronDown, ChevronUp, Star, LayoutGrid, Wrench, Smartphone, Film, Image, Music, Megaphone, Share2, Mail, Target, Palette, Layers, FileText, PenTool } from 'lucide-react';
import Link from 'next/link';
import ComparisonModal from './ComparisonModal';

interface ServiceCardProps {
  service: Service;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export default function ServiceCard({ service, isExpanded, onToggleExpand }: ServiceCardProps) {
  const [selectedTier, setSelectedTier] = useState<'essential' | 'pro' | 'enterprise'>('pro');
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const { addItem, removeItem, isServiceInPlan, getItemByServiceId, toggleAddOn } = usePlanStore();

  const isInPlan = isServiceInPlan(service.id);
  const planItem = getItemByServiceId(service.id);
  const currentTier = service.tiers.find(t => t.id === (planItem?.tierId || selectedTier));

  const handleAddToPlan = () => {
    if (isInPlan) {
      removeItem(service.id);
    } else {
      addItem(service.id, selectedTier);
    }
  };

  const handleTierSelect = (tierId: 'essential' | 'pro' | 'enterprise') => {
    setSelectedTier(tierId);
    if (isInPlan) {
      addItem(service.id, tierId);
    }
  };

  // Check if this service has a custom builder
  const hasCustomBuilder = ['websites', 'app-creation', 'animations', 'images', 'ringtones', 'paid-media', 'social-media', 'email-marketing', 'brand-strategy', 'visual-identity', 'brand-applications', 'content-strategy', 'copywriting'].includes(service.id);

  return (
    <motion.div
      layout
      className={`
        relative overflow-hidden rounded-2xl p-6 lg:p-7
        transition-all duration-500 ease-out
        ${isInPlan
          ? 'bg-gradient-to-br from-[var(--bg-card-hover)] to-[var(--bg-card)] border-2 border-[var(--accent-orange)]/40 shadow-[0_0_40px_rgba(212,165,116,0.12)]'
          : 'bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-card-hover)]/50 border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:shadow-[var(--shadow-glow)]'
        }
      `}
    >
      {/* Subtle glow effect when in plan */}
      {isInPlan && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-orange)]/5 to-transparent pointer-events-none" />
      )}

      {/* Header */}
      <div className="relative flex justify-between items-start mb-5">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2.5">
            <h3 className="text-xl font-semibold text-white font-serif tracking-tight">{service.name}</h3>
            {isInPlan && (
              <span className="px-2.5 py-1 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] text-[10px] font-semibold rounded-full uppercase tracking-wide">
                In Plan
              </span>
            )}
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Tier Selection - Premium styling */}
      <div className={`grid gap-2 mb-5 ${hasCustomBuilder ? 'grid-cols-4' : 'grid-cols-3'}`}>
        {service.tiers.map((tier) => {
          const isSelected = (planItem?.tierId || selectedTier) === tier.id;
          return (
            <button
              key={tier.id}
              onClick={() => handleTierSelect(tier.id)}
              className={`
                relative p-3.5 rounded-xl text-center transition-all duration-300
                ${isSelected
                  ? 'bg-gradient-to-br from-[var(--accent-purple)] via-[var(--accent-fuchsia)] to-[var(--accent-pink)] text-white shadow-[0_4px_20px_rgba(167,139,250,0.3)]'
                  : 'bg-[var(--bg-secondary)]/60 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white border border-[var(--border-subtle)] hover:border-[var(--border-accent)]'
                }
              `}
            >
              {tier.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] text-[9px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                  <Star className="w-2.5 h-2.5" fill="currentColor" />
                  Popular
                </div>
              )}
              <div className="text-xs font-semibold mb-0.5 tracking-wide">{tier.name}</div>
              <div className="text-[9px] opacity-60 uppercase tracking-wider mb-0.5">starting at</div>
              <div className="text-lg font-bold">${tier.price.toLocaleString()}</div>
            </button>
          );
        })}

        {/* Build My Button - Premium gold styling */}
        {service.id === 'websites' && (
          <Link
            href="/build-my-site"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Wrench className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Site</div>
          </Link>
        )}

        {service.id === 'app-creation' && (
          <Link
            href="/build-my-app"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Smartphone className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">App</div>
          </Link>
        )}

        {service.id === 'animations' && (
          <Link
            href="/build-my-animation"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Film className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Animation</div>
          </Link>
        )}

        {service.id === 'images' && (
          <Link
            href="/build-my-images"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Image className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Images</div>
          </Link>
        )}

        {service.id === 'ringtones' && (
          <Link
            href="/build-my-sound"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Music className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Sound</div>
          </Link>
        )}

        {service.id === 'paid-media' && (
          <Link
            href="/build-my-media"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Megaphone className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Media</div>
          </Link>
        )}

        {service.id === 'social-media' && (
          <Link
            href="/build-my-social"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Share2 className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Social</div>
          </Link>
        )}

        {service.id === 'email-marketing' && (
          <Link
            href="/build-my-email"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Mail className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Email</div>
          </Link>
        )}

        {service.id === 'brand-strategy' && (
          <Link
            href="/build-my-brand-strategy"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Target className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Strategy</div>
          </Link>
        )}

        {service.id === 'visual-identity' && (
          <Link
            href="/build-my-identity"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Palette className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Identity</div>
          </Link>
        )}

        {service.id === 'brand-applications' && (
          <Link
            href="/build-my-applications"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <Layers className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Apps</div>
          </Link>
        )}

        {service.id === 'content-strategy' && (
          <Link
            href="/build-my-content-strategy"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <FileText className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Content</div>
          </Link>
        )}

        {service.id === 'copywriting' && (
          <Link
            href="/build-my-messaging"
            className="relative p-3.5 rounded-xl text-center transition-all duration-300 bg-gradient-to-br from-[var(--accent-orange)] to-[var(--accent-gold)] text-[#09090b] hover:shadow-[0_4px_24px_rgba(212,165,116,0.4)] flex flex-col items-center justify-center group"
          >
            <PenTool className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" />
            <div className="text-xs font-bold">Build My</div>
            <div className="text-xs font-bold">Messaging</div>
          </Link>
        )}
      </div>

      {/* Current Tier Info - Refined */}
      {currentTier && (
        <div className="mb-5 p-4 bg-[var(--bg-secondary)]/40 rounded-xl border border-[var(--border-subtle)]">
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Best for</span>
            <span className="text-[var(--text-secondary)]">{currentTier.bestFor}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[var(--text-muted)] text-xs uppercase tracking-wide">Outcome</span>
            <span className="text-[var(--accent-purple)] font-medium">{currentTier.outcome}</span>
          </div>
        </div>
      )}

      {/* Action Buttons - Refined */}
      <div className="flex gap-3">
        <motion.button
          onClick={handleAddToPlan}
          className={`
            flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium transition-all duration-300
            ${isInPlan
              ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/15 hover:border-red-500/30'
              : 'btn-primary'
            }
          `}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {isInPlan ? (
            <>
              <Minus className="w-4 h-4" />
              Remove
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Add to Plan
            </>
          )}
        </motion.button>

        <button
          onClick={() => setIsComparisonOpen(true)}
          className="px-4 py-3.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-white hover:bg-[var(--bg-secondary)]/30 transition-all duration-300 flex items-center gap-2"
          title="Compare Plans"
        >
          <LayoutGrid className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Compare</span>
        </button>

        <button
          onClick={onToggleExpand}
          className="px-4 py-3.5 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-white hover:bg-[var(--bg-secondary)]/30 transition-all duration-300"
        >
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Features - Refined */}
      <AnimatePresence>
        {isExpanded && currentTier && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5 mt-5 border-t border-[var(--border-subtle)]">
              <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">Features Included</h4>
              <ul className="space-y-2.5">
                {currentTier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 ${feature.included === true ? 'text-emerald-400' : feature.included === 'addon' ? 'text-[var(--accent-orange)]' : 'text-[var(--text-muted)]'}`}>
                      {feature.included === true ? (
                        <Check className="w-4 h-4" />
                      ) : feature.included === 'addon' ? (
                        <Plus className="w-4 h-4" />
                      ) : (
                        <Minus className="w-4 h-4" />
                      )}
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      <span className="text-white font-medium">{feature.name}:</span>{' '}
                      {typeof feature.value === 'boolean'
                        ? (feature.value ? 'Included' : 'Not included')
                        : feature.value
                      }
                    </span>
                  </li>
                ))}
              </ul>

              {/* Add-ons - Refined */}
              {service.addOns.length > 0 && isInPlan && (
                <div className="mt-5 pt-5 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">Available Add-ons</h4>
                  <div className="space-y-2">
                    {service.addOns.map((addOn) => {
                      const isAdded = planItem?.addOns.includes(addOn.id);
                      return (
                        <button
                          key={addOn.id}
                          onClick={() => toggleAddOn(service.id, addOn.id)}
                          className={`
                            w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-300
                            ${isAdded
                              ? 'bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30'
                              : 'bg-[var(--bg-secondary)]/40 border border-[var(--border-subtle)] hover:border-[var(--border-accent)] hover:bg-[var(--bg-secondary)]/60'
                            }
                          `}
                        >
                          <span className="flex items-center gap-3">
                            {isAdded ? (
                              <Check className="w-4 h-4 text-[var(--accent-orange)]" />
                            ) : (
                              <Plus className="w-4 h-4 text-[var(--text-muted)]" />
                            )}
                            <span className={isAdded ? 'text-white font-medium' : 'text-[var(--text-secondary)]'}>
                              {addOn.name}
                            </span>
                          </span>
                          <span className="text-[var(--accent-purple)] font-semibold">
                            +${addOn.price}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <ComparisonModal
        service={service}
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
      />
    </motion.div>
  );
}
