import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  messagingOptions,
  voiceOptions,
  websiteOptions,
  marketingOptions,
  salesOptions,
  productOptions,
  contentOptions,
  uxOptions,
  retainerOptions,
  addOnServices,
  timelineOptions,
  recommendationPresets,
} from '@/data/messagingCopywritingBuilder';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime: true;
}

interface MessagingCopywritingBuilderState {
  // Current step (1-13: Goal, Messaging, Voice, Website, Marketing, Sales, Product, Content, UX, Retainer, Add-ons, Timeline, Summary)
  currentStep: number;

  // Step 1: Messaging Goal (info only, no price)
  messagingGoal: string | null;

  // Step 2: Messaging Framework (one-time)
  messaging: string | null;
  messagingPrice: number;

  // Step 3: Brand Voice & Tone (one-time)
  voice: string | null;
  voicePrice: number;

  // Step 4: Website Copy (one-time)
  website: string | null;
  websitePrice: number;

  // Step 5: Marketing & Advertising Copy (one-time)
  marketing: string | null;
  marketingPrice: number;

  // Step 6: Sales Enablement Copy (one-time)
  sales: string | null;
  salesPrice: number;

  // Step 7: Product Copy (one-time)
  product: string | null;
  productPrice: number;

  // Step 8: Content Writing (one-time)
  content: string | null;
  contentPrice: number;

  // Step 9: UX Writing (one-time)
  ux: string | null;
  uxPrice: number;

  // Step 10: Ongoing Copy Retainer (MONTHLY - timeline multiplier does NOT apply)
  retainer: string | null;
  retainerPrice: number;

  // Step 11: Add-ons (one-time)
  selectedAddOns: SelectedAddOn[];

  // Step 12: Timeline (multiplier applies to ONE-TIME work only, not monthly retainer)
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated values - MIXED PRICING MODEL: One-time costs + Monthly retainer
  messagingFoundationSubtotal: number; // messaging + voice (one-time)
  copyProductionSubtotal: number; // website + marketing + sales + product + content + ux (one-time)
  addOnsTotal: number; // sum of add-ons (one-time)
  oneTimeSubtotal: number; // foundation + production + addOns (before timeline)
  timelinePremium: number; // oneTimeSubtotal * (multiplier - 1) - applies ONLY to one-time
  oneTimeTotal: number; // oneTimeSubtotal + timelinePremium
  monthlyTotal: number; // just retainer price (NOT affected by timeline)
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setMessagingGoal: (goal: string) => void;
  setMessaging: (messaging: string) => void;
  setVoice: (voice: string) => void;
  setWebsite: (website: string) => void;
  setMarketing: (marketing: string) => void;
  setSales: (sales: string) => void;
  setProduct: (product: string) => void;
  setContent: (content: string) => void;
  setUx: (ux: string) => void;
  setRetainer: (retainer: string) => void;
  toggleAddOn: (addOnId: string) => void;
  setTimeline: (timeline: string) => void;
  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;
  saveToUnifiedQuote: () => void;
}

const initialState = {
  currentStep: 1,
  messagingGoal: null,
  messaging: null,
  messagingPrice: 0,
  voice: null,
  voicePrice: 0,
  website: null,
  websitePrice: 0,
  marketing: null,
  marketingPrice: 0,
  sales: null,
  salesPrice: 0,
  product: null,
  productPrice: 0,
  content: null,
  contentPrice: 0,
  ux: null,
  uxPrice: 0,
  retainer: null,
  retainerPrice: 0,
  selectedAddOns: [] as SelectedAddOn[],
  timeline: null,
  timelineMultiplier: 1.0,
  messagingFoundationSubtotal: 0,
  copyProductionSubtotal: 0,
  addOnsTotal: 0,
  oneTimeSubtotal: 0,
  timelinePremium: 0,
  oneTimeTotal: 0,
  monthlyTotal: 0,
  hasCustomQuote: false,
};

export const useMessagingCopywritingBuilderStore = create<MessagingCopywritingBuilderState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setStep: (step) => set({ currentStep: step }),

      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 13) })),

      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

      setMessagingGoal: (goal) => {
        set({ messagingGoal: goal });
        get().applyRecommendations(goal);
      },

      setMessaging: (messaging) => {
        const option = messagingOptions.find((o) => o.id === messaging);
        set({
          messaging,
          messagingPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setVoice: (voice) => {
        const option = voiceOptions.find((o) => o.id === voice);
        set({
          voice,
          voicePrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setWebsite: (website) => {
        const option = websiteOptions.find((o) => o.id === website);
        set({
          website,
          websitePrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setMarketing: (marketing) => {
        const option = marketingOptions.find((o) => o.id === marketing);
        set({
          marketing,
          marketingPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setSales: (sales) => {
        const option = salesOptions.find((o) => o.id === sales);
        set({
          sales,
          salesPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setProduct: (product) => {
        const option = productOptions.find((o) => o.id === product);
        set({
          product,
          productPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setContent: (content) => {
        const option = contentOptions.find((o) => o.id === content);
        set({
          content,
          contentPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setUx: (ux) => {
        const option = uxOptions.find((o) => o.id === ux);
        set({
          ux,
          uxPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setRetainer: (retainer) => {
        const option = retainerOptions.find((o) => o.id === retainer);
        set({
          retainer,
          retainerPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      toggleAddOn: (addOnId) => {
        const state = get();
        const existing = state.selectedAddOns.find((a) => a.id === addOnId);
        if (existing) {
          set({
            selectedAddOns: state.selectedAddOns.filter((a) => a.id !== addOnId),
          });
        } else {
          const addOn = addOnServices.find((a) => a.id === addOnId);
          if (addOn) {
            set({
              selectedAddOns: [
                ...state.selectedAddOns,
                { id: addOnId, price: addOn.price, oneTime: true },
              ],
            });
          }
        }
        get().calculateTotals();
      },

      setTimeline: (timeline) => {
        const option = timelineOptions.find((o) => o.id === timeline);
        set({
          timeline,
          timelineMultiplier: option?.multiplier || 1.0,
        });
        get().calculateTotals();
      },

      applyRecommendations: (goalId) => {
        const preset = recommendationPresets[goalId];
        if (!preset) return;

        // Apply messaging
        if (preset.messaging) {
          const messagingOption = messagingOptions.find((o) => o.id === preset.messaging);
          set({
            messaging: preset.messaging,
            messagingPrice: messagingOption?.price || 0,
          });
        }

        // Apply voice
        if (preset.voice) {
          const voiceOption = voiceOptions.find((o) => o.id === preset.voice);
          set({
            voice: preset.voice,
            voicePrice: voiceOption?.price || 0,
          });
        }

        // Apply website
        if (preset.website) {
          const websiteOption = websiteOptions.find((o) => o.id === preset.website);
          set({
            website: preset.website,
            websitePrice: websiteOption?.price || 0,
          });
        }

        // Apply marketing
        if (preset.marketing) {
          const marketingOption = marketingOptions.find((o) => o.id === preset.marketing);
          set({
            marketing: preset.marketing,
            marketingPrice: marketingOption?.price || 0,
          });
        }

        // Apply sales
        if (preset.sales) {
          const salesOption = salesOptions.find((o) => o.id === preset.sales);
          set({
            sales: preset.sales,
            salesPrice: salesOption?.price || 0,
          });
        }

        // Apply product
        if (preset.product) {
          const productOption = productOptions.find((o) => o.id === preset.product);
          set({
            product: preset.product,
            productPrice: productOption?.price || 0,
          });
        }

        // Apply content
        if (preset.content) {
          const contentOption = contentOptions.find((o) => o.id === preset.content);
          set({
            content: preset.content,
            contentPrice: contentOption?.price || 0,
          });
        }

        // Apply ux
        if (preset.ux) {
          const uxOption = uxOptions.find((o) => o.id === preset.ux);
          set({
            ux: preset.ux,
            uxPrice: uxOption?.price || 0,
          });
        }

        // Apply retainer
        if (preset.retainer) {
          const retainerOption = retainerOptions.find((o) => o.id === preset.retainer);
          set({
            retainer: preset.retainer,
            retainerPrice: retainerOption?.price || 0,
          });
        }

        // Clear add-ons
        set({ selectedAddOns: [] });

        // Set default timeline
        set({
          timeline: 'flexible',
          timelineMultiplier: 1.0,
        });

        get().calculateTotals();
      },

      calculateTotals: () => {
        const state = get();

        // Messaging Foundation (messaging framework + brand voice)
        const messagingFoundationSubtotal = state.messagingPrice + state.voicePrice;

        // Copy Production (website, marketing, sales, product, content, ux)
        const copyProductionSubtotal =
          state.websitePrice +
          state.marketingPrice +
          state.salesPrice +
          state.productPrice +
          state.contentPrice +
          state.uxPrice;

        // Add-ons
        const addOnsTotal = state.selectedAddOns.reduce((sum, a) => sum + a.price, 0);

        // One-time subtotal (before timeline premium)
        const oneTimeSubtotal = messagingFoundationSubtotal + copyProductionSubtotal + addOnsTotal;

        // Timeline premium (only applies to one-time costs)
        const timelinePremium = Math.round(oneTimeSubtotal * (state.timelineMultiplier - 1));

        // One-time total
        const oneTimeTotal = oneTimeSubtotal + timelinePremium;

        // Monthly total (retainer)
        const monthlyTotal = state.retainerPrice;

        // Check for custom quote (startsAt options)
        const messagingOption = messagingOptions.find((o) => o.id === state.messaging);
        const voiceOption = voiceOptions.find((o) => o.id === state.voice);
        const websiteOption = websiteOptions.find((o) => o.id === state.website);
        const marketingOption = marketingOptions.find((o) => o.id === state.marketing);
        const salesOption = salesOptions.find((o) => o.id === state.sales);
        const productOption = productOptions.find((o) => o.id === state.product);
        const contentOption = contentOptions.find((o) => o.id === state.content);
        const uxOption = uxOptions.find((o) => o.id === state.ux);
        const retainerOption = retainerOptions.find((o) => o.id === state.retainer);

        const hasCustomQuote =
          messagingOption?.startsAt ||
          voiceOption?.startsAt ||
          websiteOption?.startsAt ||
          marketingOption?.startsAt ||
          salesOption?.startsAt ||
          productOption?.startsAt ||
          contentOption?.startsAt ||
          uxOption?.startsAt ||
          retainerOption?.startsAt ||
          false;

        set({
          messagingFoundationSubtotal,
          copyProductionSubtotal,
          addOnsTotal,
          oneTimeSubtotal,
          timelinePremium,
          oneTimeTotal,
          monthlyTotal,
          hasCustomQuote,
        });
      },

      resetBuilder: () => {
        set(initialState);
        // Clear from unified store
        useUnifiedQuoteStore.getState().clearServiceConfig('messaging-copywriting');
      },

      saveToUnifiedQuote: () => {
        const state = get();
        useUnifiedQuoteStore.getState().saveServiceConfig('messaging-copywriting', {
          messagingGoal: state.messagingGoal,
          messaging: state.messaging,
          messagingPrice: state.messagingPrice,
          voice: state.voice,
          voicePrice: state.voicePrice,
          website: state.website,
          websitePrice: state.websitePrice,
          marketing: state.marketing,
          marketingPrice: state.marketingPrice,
          sales: state.sales,
          salesPrice: state.salesPrice,
          product: state.product,
          productPrice: state.productPrice,
          content: state.content,
          contentPrice: state.contentPrice,
          ux: state.ux,
          uxPrice: state.uxPrice,
          retainer: state.retainer,
          retainerPrice: state.retainerPrice,
          selectedAddOns: state.selectedAddOns,
          timeline: state.timeline,
          timelineMultiplier: state.timelineMultiplier,
          messagingFoundationSubtotal: state.messagingFoundationSubtotal,
          copyProductionSubtotal: state.copyProductionSubtotal,
          addOnsTotal: state.addOnsTotal,
          oneTimeSubtotal: state.oneTimeSubtotal,
          timelinePremium: state.timelinePremium,
          oneTimeTotal: state.oneTimeTotal,
          monthlyTotal: state.monthlyTotal,
          hasCustomQuote: state.hasCustomQuote,
        });
      },
    }),
    {
      name: 'messaging-copywriting-builder-storage',
    }
  )
);
