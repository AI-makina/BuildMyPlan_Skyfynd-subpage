import { create } from 'zustand';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';
import {
  stationeryOptions,
  digitalOptions,
  socialOptions,
  presentationOptions,
  marketingOptions,
  signageOptions,
  packagingOptions,
  eventsOptions,
  addOnServices,
  timelineOptions,
  recommendationPresets,
} from '@/data/brandApplicationsBuilder';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime: true;
}

interface BrandApplicationsBuilderState {
  // Step tracking
  currentStep: number;

  // Step 1: Application Goal (info only)
  applicationGoal: string | null;

  // Step 2: Stationery & Business Essentials
  stationery: string | null;
  stationeryPrice: number;

  // Step 3: Digital Assets & Templates
  digital: string | null;
  digitalPrice: number;

  // Step 4: Social Media Assets
  social: string | null;
  socialPrice: number;

  // Step 5: Presentation Templates
  presentations: string | null;
  presentationsPrice: number;

  // Step 6: Marketing Collateral
  marketing: string | null;
  marketingPrice: number;

  // Step 7: Signage & Environmental
  signage: string | null;
  signagePrice: number;

  // Step 8: Packaging & Product
  packaging: string | null;
  packagingPrice: number;

  // Step 9: Events & Experiential
  events: string | null;
  eventsPrice: number;

  // Step 10: Add-on Services
  selectedAddOns: SelectedAddOn[];

  // Step 11: Timeline
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated totals
  businessEssentialsSubtotal: number;
  digitalSocialSubtotal: number;
  marketingSubtotal: number;
  physicalSubtotal: number;
  addOnsTotal: number;
  projectSubtotal: number;
  timelinePremium: number;
  totalInvestment: number;
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setApplicationGoal: (goalId: string) => void;
  setStationery: (stationeryId: string) => void;
  setDigital: (digitalId: string) => void;
  setSocial: (socialId: string) => void;
  setPresentations: (presentationsId: string) => void;
  setMarketing: (marketingId: string) => void;
  setSignage: (signageId: string) => void;
  setPackaging: (packagingId: string) => void;
  setEvents: (eventsId: string) => void;
  toggleAddOn: (addOnId: string) => void;
  setTimeline: (timelineId: string) => void;

  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;

  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const useBrandApplicationsBuilderStore = create<BrandApplicationsBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  applicationGoal: null,
  stationery: null,
  stationeryPrice: 0,
  digital: null,
  digitalPrice: 0,
  social: null,
  socialPrice: 0,
  presentations: null,
  presentationsPrice: 0,
  marketing: null,
  marketingPrice: 0,
  signage: null,
  signagePrice: 0,
  packaging: null,
  packagingPrice: 0,
  events: null,
  eventsPrice: 0,
  selectedAddOns: [],
  timeline: null,
  timelineMultiplier: 1,
  businessEssentialsSubtotal: 0,
  digitalSocialSubtotal: 0,
  marketingSubtotal: 0,
  physicalSubtotal: 0,
  addOnsTotal: 0,
  projectSubtotal: 0,
  timelinePremium: 0,
  totalInvestment: 0,
  hasCustomQuote: false,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < 12) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setApplicationGoal: (goalId) => {
    set({ applicationGoal: goalId });
    get().applyRecommendations(goalId);
  },

  setStationery: (stationeryId) => {
    const option = stationeryOptions.find((s) => s.id === stationeryId);
    set({
      stationery: stationeryId,
      stationeryPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setDigital: (digitalId) => {
    const option = digitalOptions.find((d) => d.id === digitalId);
    set({
      digital: digitalId,
      digitalPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSocial: (socialId) => {
    const option = socialOptions.find((s) => s.id === socialId);
    set({
      social: socialId,
      socialPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPresentations: (presentationsId) => {
    const option = presentationOptions.find((p) => p.id === presentationsId);
    set({
      presentations: presentationsId,
      presentationsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setMarketing: (marketingId) => {
    const option = marketingOptions.find((m) => m.id === marketingId);
    set({
      marketing: marketingId,
      marketingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSignage: (signageId) => {
    const option = signageOptions.find((s) => s.id === signageId);
    set({
      signage: signageId,
      signagePrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPackaging: (packagingId) => {
    const option = packagingOptions.find((p) => p.id === packagingId);
    set({
      packaging: packagingId,
      packagingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setEvents: (eventsId) => {
    const option = eventsOptions.find((e) => e.id === eventsId);
    set({
      events: eventsId,
      eventsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  toggleAddOn: (addOnId) => {
    const { selectedAddOns } = get();
    const existing = selectedAddOns.find((a) => a.id === addOnId);

    if (existing) {
      set({
        selectedAddOns: selectedAddOns.filter((a) => a.id !== addOnId),
      });
    } else {
      const addOn = addOnServices.find((a) => a.id === addOnId);
      if (addOn) {
        set({
          selectedAddOns: [
            ...selectedAddOns,
            {
              id: addOn.id,
              price: addOn.price,
              oneTime: true,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  setTimeline: (timelineId) => {
    const option = timelineOptions.find((t) => t.id === timelineId);
    set({
      timeline: timelineId,
      timelineMultiplier: option?.multiplier ?? 1,
    });
    get().calculateTotals();
  },

  applyRecommendations: (goalId) => {
    const preset = recommendationPresets[goalId];
    if (!preset) return;

    // Apply stationery recommendation
    if (preset.stationery) {
      const stationeryOpt = stationeryOptions.find((s) => s.id === preset.stationery);
      if (stationeryOpt) {
        set({
          stationery: preset.stationery,
          stationeryPrice: stationeryOpt.price,
        });
      }
    }

    // Apply digital recommendation
    if (preset.digital) {
      const digitalOpt = digitalOptions.find((d) => d.id === preset.digital);
      if (digitalOpt) {
        set({
          digital: preset.digital,
          digitalPrice: digitalOpt.price,
        });
      }
    }

    // Apply social recommendation
    if (preset.social) {
      const socialOpt = socialOptions.find((s) => s.id === preset.social);
      if (socialOpt) {
        set({
          social: preset.social,
          socialPrice: socialOpt.price,
        });
      }
    }

    // Apply presentations recommendation
    if (preset.presentations) {
      const presentationsOpt = presentationOptions.find((p) => p.id === preset.presentations);
      if (presentationsOpt) {
        set({
          presentations: preset.presentations,
          presentationsPrice: presentationsOpt.price,
        });
      }
    }

    // Apply marketing recommendation
    if (preset.marketing) {
      const marketingOpt = marketingOptions.find((m) => m.id === preset.marketing);
      if (marketingOpt) {
        set({
          marketing: preset.marketing,
          marketingPrice: marketingOpt.price,
        });
      }
    }

    // Apply signage recommendation
    if (preset.signage) {
      const signageOpt = signageOptions.find((s) => s.id === preset.signage);
      if (signageOpt) {
        set({
          signage: preset.signage,
          signagePrice: signageOpt.price,
        });
      }
    }

    // Apply packaging recommendation
    if (preset.packaging) {
      const packagingOpt = packagingOptions.find((p) => p.id === preset.packaging);
      if (packagingOpt) {
        set({
          packaging: preset.packaging,
          packagingPrice: packagingOpt.price,
        });
      }
    }

    // Apply events recommendation
    if (preset.events) {
      const eventsOpt = eventsOptions.find((e) => e.id === preset.events);
      if (eventsOpt) {
        set({
          events: preset.events,
          eventsPrice: eventsOpt.price,
        });
      }
    }

    // Apply add-ons recommendations
    if (preset.addOns && preset.addOns.length > 0) {
      const newAddOns: SelectedAddOn[] = [];
      preset.addOns.forEach((addOnId) => {
        const addOn = addOnServices.find((a) => a.id === addOnId);
        if (addOn) {
          newAddOns.push({
            id: addOn.id,
            price: addOn.price,
            oneTime: true,
          });
        }
      });
      set({ selectedAddOns: newAddOns });
    }

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let businessEssentialsSubtotal = 0;
    let digitalSocialSubtotal = 0;
    let marketingSubtotal = 0;
    let physicalSubtotal = 0;
    let addOnsTotal = 0;
    let hasCustomQuote = false;

    // Business Essentials: Stationery + Presentations
    businessEssentialsSubtotal += state.stationeryPrice;
    businessEssentialsSubtotal += state.presentationsPrice;

    // Digital & Social: Digital + Social
    digitalSocialSubtotal += state.digitalPrice;
    digitalSocialSubtotal += state.socialPrice;

    // Marketing: Marketing only
    marketingSubtotal += state.marketingPrice;

    // Physical: Signage + Packaging + Events
    physicalSubtotal += state.signagePrice;
    physicalSubtotal += state.packagingPrice;
    physicalSubtotal += state.eventsPrice;

    // Check for custom quote items (startsAt items)
    const stationeryOpt = stationeryOptions.find((s) => s.id === state.stationery);
    const digitalOpt = digitalOptions.find((d) => d.id === state.digital);
    const socialOpt = socialOptions.find((s) => s.id === state.social);
    const presentationsOpt = presentationOptions.find((p) => p.id === state.presentations);
    const marketingOpt = marketingOptions.find((m) => m.id === state.marketing);
    const signageOpt = signageOptions.find((s) => s.id === state.signage);
    const packagingOpt = packagingOptions.find((p) => p.id === state.packaging);
    const eventsOpt = eventsOptions.find((e) => e.id === state.events);

    if (stationeryOpt?.startsAt || digitalOpt?.startsAt || socialOpt?.startsAt ||
        presentationsOpt?.startsAt || marketingOpt?.startsAt || signageOpt?.startsAt ||
        packagingOpt?.startsAt || eventsOpt?.startsAt) {
      hasCustomQuote = true;
    }

    // Add-ons
    state.selectedAddOns.forEach((addOn) => {
      addOnsTotal += addOn.price;
    });

    // Project subtotal
    const projectSubtotal = businessEssentialsSubtotal + digitalSocialSubtotal + marketingSubtotal + physicalSubtotal + addOnsTotal;

    // Timeline multiplier
    const multiplier = state.timelineMultiplier;
    const timelinePremium = projectSubtotal * (multiplier - 1);
    const totalInvestment = projectSubtotal * multiplier;

    set({
      businessEssentialsSubtotal,
      digitalSocialSubtotal,
      marketingSubtotal,
      physicalSubtotal,
      addOnsTotal,
      projectSubtotal,
      timelinePremium,
      totalInvestment,
      hasCustomQuote,
    });
  },

  saveToUnifiedQuote: () => {
    const state = get();
    const unifiedStore = useUnifiedQuoteStore.getState();

    unifiedStore.saveServiceConfig('brand-applications', {
      applicationGoal: state.applicationGoal,
      stationery: state.stationery,
      stationeryPrice: state.stationeryPrice,
      digital: state.digital,
      digitalPrice: state.digitalPrice,
      social: state.social,
      socialPrice: state.socialPrice,
      presentations: state.presentations,
      presentationsPrice: state.presentationsPrice,
      marketing: state.marketing,
      marketingPrice: state.marketingPrice,
      signage: state.signage,
      signagePrice: state.signagePrice,
      packaging: state.packaging,
      packagingPrice: state.packagingPrice,
      events: state.events,
      eventsPrice: state.eventsPrice,
      selectedAddOns: state.selectedAddOns,
      timeline: state.timeline,
      timelineMultiplier: state.timelineMultiplier,
      businessEssentialsSubtotal: state.businessEssentialsSubtotal,
      digitalSocialSubtotal: state.digitalSocialSubtotal,
      marketingSubtotal: state.marketingSubtotal,
      physicalSubtotal: state.physicalSubtotal,
      addOnsTotal: state.addOnsTotal,
      projectSubtotal: state.projectSubtotal,
      timelinePremium: state.timelinePremium,
      totalInvestment: state.totalInvestment,
      hasCustomQuote: state.hasCustomQuote,
    });
  },

  loadFromUnifiedQuote: () => {
    const unifiedStore = useUnifiedQuoteStore.getState();
    const config = unifiedStore.getServiceConfig('brand-applications');
    if (config) {
      const applicationsConfig = config as {
        applicationGoal: string | null;
        stationery: string | null;
        stationeryPrice: number;
        digital: string | null;
        digitalPrice: number;
        social: string | null;
        socialPrice: number;
        presentations: string | null;
        presentationsPrice: number;
        marketing: string | null;
        marketingPrice: number;
        signage: string | null;
        signagePrice: number;
        packaging: string | null;
        packagingPrice: number;
        events: string | null;
        eventsPrice: number;
        selectedAddOns: SelectedAddOn[];
        timeline: string | null;
        timelineMultiplier: number;
        businessEssentialsSubtotal: number;
        digitalSocialSubtotal: number;
        marketingSubtotal: number;
        physicalSubtotal: number;
        addOnsTotal: number;
        projectSubtotal: number;
        timelinePremium: number;
        totalInvestment: number;
        hasCustomQuote: boolean;
      };
      set({
        applicationGoal: applicationsConfig.applicationGoal,
        stationery: applicationsConfig.stationery,
        stationeryPrice: applicationsConfig.stationeryPrice,
        digital: applicationsConfig.digital,
        digitalPrice: applicationsConfig.digitalPrice,
        social: applicationsConfig.social,
        socialPrice: applicationsConfig.socialPrice,
        presentations: applicationsConfig.presentations,
        presentationsPrice: applicationsConfig.presentationsPrice,
        marketing: applicationsConfig.marketing,
        marketingPrice: applicationsConfig.marketingPrice,
        signage: applicationsConfig.signage,
        signagePrice: applicationsConfig.signagePrice,
        packaging: applicationsConfig.packaging,
        packagingPrice: applicationsConfig.packagingPrice,
        events: applicationsConfig.events,
        eventsPrice: applicationsConfig.eventsPrice,
        selectedAddOns: applicationsConfig.selectedAddOns,
        timeline: applicationsConfig.timeline,
        timelineMultiplier: applicationsConfig.timelineMultiplier,
        businessEssentialsSubtotal: applicationsConfig.businessEssentialsSubtotal,
        digitalSocialSubtotal: applicationsConfig.digitalSocialSubtotal,
        marketingSubtotal: applicationsConfig.marketingSubtotal,
        physicalSubtotal: applicationsConfig.physicalSubtotal,
        addOnsTotal: applicationsConfig.addOnsTotal,
        projectSubtotal: applicationsConfig.projectSubtotal,
        timelinePremium: applicationsConfig.timelinePremium,
        totalInvestment: applicationsConfig.totalInvestment,
        hasCustomQuote: applicationsConfig.hasCustomQuote,
      });
    }
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      applicationGoal: null,
      stationery: null,
      stationeryPrice: 0,
      digital: null,
      digitalPrice: 0,
      social: null,
      socialPrice: 0,
      presentations: null,
      presentationsPrice: 0,
      marketing: null,
      marketingPrice: 0,
      signage: null,
      signagePrice: 0,
      packaging: null,
      packagingPrice: 0,
      events: null,
      eventsPrice: 0,
      selectedAddOns: [],
      timeline: null,
      timelineMultiplier: 1,
      businessEssentialsSubtotal: 0,
      digitalSocialSubtotal: 0,
      marketingSubtotal: 0,
      physicalSubtotal: 0,
      addOnsTotal: 0,
      projectSubtotal: 0,
      timelinePremium: 0,
      totalInvestment: 0,
      hasCustomQuote: false,
    });
  },
}));
