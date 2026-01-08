import { create } from 'zustand';
import { useUnifiedQuoteStore, SocialMediaConfig } from './useUnifiedQuoteStore';
import {
  managementGoalOptions,
  platformOptions,
  frequencyOptions,
  contentOptions,
  engagementOptions,
  strategyOptions,
  reportingOptions,
  storiesOptions,
  reelsOptions,
  additionalServicesOptions,
  durationOptions,
  recommendationPresets,
} from '@/data/socialMediaBuilder';

export interface SelectedAddOn {
  id: string;
  price: number;
  oneTime?: boolean;
  recurring?: 'monthly';
  category: 'stories' | 'reels' | 'additional';
}

interface SocialMediaBuilderState {
  // Navigation
  currentStep: number;

  // Step 1: Management Goal (info only)
  managementGoal: string | null;

  // Step 2: Platforms
  platforms: string | null;
  platformsPrice: number | null;

  // Step 3: Posting Frequency
  frequency: string | null;
  frequencyPrice: number | null;
  postsPerMonth: number | null;

  // Step 4: Content Creation
  content: string | null;
  contentPrice: number;

  // Step 5: Engagement
  engagement: string | null;
  engagementPrice: number | null;

  // Step 6: Strategy
  strategy: string | null;
  strategyPrice: number;

  // Step 7: Reporting
  reporting: string | null;
  reportingPrice: number;

  // Step 8: Add-ons
  stories: string;
  storiesPrice: number;
  reels: string;
  reelsPrice: number | null;
  selectedAdditionalAddOns: SelectedAddOn[];

  // Step 9: Duration
  duration: string | null;
  durationMultiplier: number;
  durationMonths: number;

  // Calculated totals
  monthlySubtotal: number;
  durationDiscount: number;
  monthlyTotal: number;
  oneTimeTotal: number;
  totalMonthlyOverTerm: number;
  totalInvestment: number;
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setManagementGoal: (goal: string) => void;
  setPlatforms: (platformId: string) => void;
  setFrequency: (frequencyId: string) => void;
  setContent: (contentId: string) => void;
  setEngagement: (engagementId: string) => void;
  setStrategy: (strategyId: string) => void;
  setReporting: (reportingId: string) => void;
  setStories: (storiesId: string) => void;
  setReels: (reelsId: string) => void;
  toggleAdditionalAddOn: (addOnId: string) => void;
  setDuration: (durationId: string) => void;
  applyRecommendations: (managementGoal: string) => void;
  calculateTotals: () => void;
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const useSocialMediaBuilderStore = create<SocialMediaBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  managementGoal: null,
  platforms: null,
  platformsPrice: null,
  frequency: null,
  frequencyPrice: null,
  postsPerMonth: null,
  content: null,
  contentPrice: 0,
  engagement: null,
  engagementPrice: null,
  strategy: null,
  strategyPrice: 0,
  reporting: null,
  reportingPrice: 0,
  stories: 'none',
  storiesPrice: 0,
  reels: 'none',
  reelsPrice: 0,
  selectedAdditionalAddOns: [],
  duration: null,
  durationMultiplier: 1.0,
  durationMonths: 3,
  monthlySubtotal: 0,
  durationDiscount: 0,
  monthlyTotal: 0,
  oneTimeTotal: 0,
  totalMonthlyOverTerm: 0,
  totalInvestment: 0,
  hasCustomQuote: false,

  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 10) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

  setManagementGoal: (goal) => {
    set({ managementGoal: goal });
    // Apply recommendations after setting management goal
    get().applyRecommendations(goal);
  },

  setPlatforms: (platformId) => {
    const platform = platformOptions.find((p) => p.id === platformId);
    set({
      platforms: platformId,
      platformsPrice: platform?.price ?? null,
    });
    get().calculateTotals();
  },

  setFrequency: (frequencyId) => {
    const frequency = frequencyOptions.find((f) => f.id === frequencyId);
    set({
      frequency: frequencyId,
      frequencyPrice: frequency?.price ?? null,
      postsPerMonth: frequency?.postsPerMonth ?? null,
    });
    get().calculateTotals();
  },

  setContent: (contentId) => {
    const content = contentOptions.find((c) => c.id === contentId);
    set({
      content: contentId,
      contentPrice: content?.price ?? 0,
    });
    get().calculateTotals();
  },

  setEngagement: (engagementId) => {
    const engagement = engagementOptions.find((e) => e.id === engagementId);
    set({
      engagement: engagementId,
      engagementPrice: engagement?.price ?? null,
    });
    get().calculateTotals();
  },

  setStrategy: (strategyId) => {
    const strategy = strategyOptions.find((s) => s.id === strategyId);
    set({
      strategy: strategyId,
      strategyPrice: strategy?.price ?? 0,
    });
    get().calculateTotals();
  },

  setReporting: (reportingId) => {
    const reporting = reportingOptions.find((r) => r.id === reportingId);
    set({
      reporting: reportingId,
      reportingPrice: reporting?.price ?? 0,
    });
    get().calculateTotals();
  },

  setStories: (storiesId) => {
    const stories = storiesOptions.find((s) => s.id === storiesId);
    set({
      stories: storiesId,
      storiesPrice: stories?.price ?? 0,
    });
    get().calculateTotals();
  },

  setReels: (reelsId) => {
    const reels = reelsOptions.find((r) => r.id === reelsId);
    set({
      reels: reelsId,
      reelsPrice: reels?.price ?? null,
    });
    get().calculateTotals();
  },

  toggleAdditionalAddOn: (addOnId) => {
    const state = get();
    const addOn = additionalServicesOptions.find((a) => a.id === addOnId);
    if (!addOn) return;

    const isSelected = state.selectedAdditionalAddOns.some((a) => a.id === addOnId);
    if (isSelected) {
      set({
        selectedAdditionalAddOns: state.selectedAdditionalAddOns.filter((a) => a.id !== addOnId),
      });
    } else {
      set({
        selectedAdditionalAddOns: [
          ...state.selectedAdditionalAddOns,
          {
            id: addOnId,
            price: addOn.price ?? 0,
            oneTime: addOn.oneTime,
            recurring: addOn.recurring,
            category: 'additional' as const,
          },
        ],
      });
    }
    get().calculateTotals();
  },

  setDuration: (durationId) => {
    const duration = durationOptions.find((d) => d.id === durationId);
    set({
      duration: durationId,
      durationMultiplier: duration?.multiplier ?? 1.0,
      durationMonths: duration?.months ?? 3,
    });
    get().calculateTotals();
  },

  applyRecommendations: (managementGoal) => {
    const preset = recommendationPresets[managementGoal];
    if (!preset) return;

    // Apply platform
    const platform = platformOptions.find((p) => p.id === preset.platforms);

    // Apply frequency
    const frequency = frequencyOptions.find((f) => f.id === preset.frequency);

    // Apply content
    const content = contentOptions.find((c) => c.id === preset.content);

    // Apply engagement
    const engagement = engagementOptions.find((e) => e.id === preset.engagement);

    // Apply strategy
    const strategy = strategyOptions.find((s) => s.id === preset.strategy);

    // Apply reporting
    const reporting = reportingOptions.find((r) => r.id === preset.reporting);

    // Set default duration to 3 months
    const defaultDuration = durationOptions.find((d) => d.id === '3-months');

    // Handle add-on presets
    let stories = 'none';
    let storiesPrice = 0;
    let reels = 'none';
    let reelsPrice: number | null = 0;
    const selectedAdditionalAddOns: SelectedAddOn[] = [];

    if (preset.addOns) {
      preset.addOns.forEach((addOnId) => {
        if (addOnId.startsWith('stories-')) {
          const storiesId = addOnId.replace('stories-', '');
          const storiesOption = storiesOptions.find((s) => s.id === storiesId);
          if (storiesOption) {
            stories = storiesId;
            storiesPrice = storiesOption.price ?? 0;
          }
        } else if (addOnId.startsWith('reels-')) {
          const reelsId = addOnId.replace('reels-', '');
          const reelsOption = reelsOptions.find((r) => r.id === reelsId);
          if (reelsOption) {
            reels = reelsId;
            reelsPrice = reelsOption.price ?? null;
          }
        } else {
          const additionalAddOn = additionalServicesOptions.find((a) => a.id === addOnId);
          if (additionalAddOn) {
            selectedAdditionalAddOns.push({
              id: addOnId,
              price: additionalAddOn.price ?? 0,
              oneTime: additionalAddOn.oneTime,
              recurring: additionalAddOn.recurring,
              category: 'additional' as const,
            });
          }
        }
      });
    }

    set({
      platforms: preset.platforms,
      platformsPrice: platform?.price ?? null,
      frequency: preset.frequency,
      frequencyPrice: frequency?.price ?? null,
      postsPerMonth: frequency?.postsPerMonth ?? null,
      content: preset.content,
      contentPrice: content?.price ?? 0,
      engagement: preset.engagement,
      engagementPrice: engagement?.price ?? null,
      strategy: preset.strategy,
      strategyPrice: strategy?.price ?? 0,
      reporting: preset.reporting,
      reportingPrice: reporting?.price ?? 0,
      stories,
      storiesPrice,
      reels,
      reelsPrice,
      selectedAdditionalAddOns,
      duration: '3-months',
      durationMultiplier: defaultDuration?.multiplier ?? 1.0,
      durationMonths: defaultDuration?.months ?? 3,
    });

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let monthlySubtotal = 0;
    let oneTimeTotal = 0;
    let hasCustomQuote = false;

    // Platforms (monthly) - check for custom quote
    if (state.platformsPrice === null) {
      hasCustomQuote = true;
    } else {
      monthlySubtotal += state.platformsPrice;
    }

    // Frequency (monthly) - check for custom quote
    if (state.frequencyPrice === null) {
      hasCustomQuote = true;
    } else {
      monthlySubtotal += state.frequencyPrice;
    }

    // Content (monthly)
    monthlySubtotal += state.contentPrice;

    // Engagement (monthly) - check for custom quote
    if (state.engagementPrice === null) {
      hasCustomQuote = true;
    } else {
      monthlySubtotal += state.engagementPrice;
    }

    // Strategy (monthly)
    monthlySubtotal += state.strategyPrice;

    // Reporting (monthly)
    monthlySubtotal += state.reportingPrice;

    // Stories (monthly)
    monthlySubtotal += state.storiesPrice;

    // Reels (monthly) - check for custom quote (startsAt options)
    if (state.reelsPrice === null) {
      hasCustomQuote = true;
    } else {
      monthlySubtotal += state.reelsPrice;
    }

    // Additional Add-ons
    state.selectedAdditionalAddOns.forEach((addOn) => {
      if (addOn.oneTime) {
        oneTimeTotal += addOn.price;
      } else {
        monthlySubtotal += addOn.price;
      }
    });

    // Duration multiplier (applies to monthly only)
    const durationDiscount = monthlySubtotal * (1 - state.durationMultiplier);
    const monthlyTotal = monthlySubtotal * state.durationMultiplier;

    // Calculate term totals
    const totalMonthlyOverTerm = monthlyTotal * state.durationMonths;
    const totalInvestment = totalMonthlyOverTerm + oneTimeTotal;

    set({
      monthlySubtotal,
      durationDiscount,
      monthlyTotal,
      oneTimeTotal,
      totalMonthlyOverTerm,
      totalInvestment,
      hasCustomQuote,
    });
  },

  saveToUnifiedQuote: () => {
    const state = get();
    useUnifiedQuoteStore.getState().saveServiceConfig('social-media', {
      managementGoal: state.managementGoal,
      platforms: state.platforms,
      platformsPrice: state.platformsPrice,
      frequency: state.frequency,
      frequencyPrice: state.frequencyPrice,
      postsPerMonth: state.postsPerMonth,
      content: state.content,
      contentPrice: state.contentPrice,
      engagement: state.engagement,
      engagementPrice: state.engagementPrice,
      strategy: state.strategy,
      strategyPrice: state.strategyPrice,
      reporting: state.reporting,
      reportingPrice: state.reportingPrice,
      stories: state.stories,
      storiesPrice: state.storiesPrice,
      reels: state.reels,
      reelsPrice: state.reelsPrice,
      selectedAdditionalAddOns: state.selectedAdditionalAddOns,
      duration: state.duration,
      durationMultiplier: state.durationMultiplier,
      durationMonths: state.durationMonths,
      monthlySubtotal: state.monthlySubtotal,
      durationDiscount: state.durationDiscount,
      monthlyTotal: state.monthlyTotal,
      oneTimeTotal: state.oneTimeTotal,
      totalMonthlyOverTerm: state.totalMonthlyOverTerm,
      totalInvestment: state.totalInvestment,
      hasCustomQuote: state.hasCustomQuote,
    });
  },

  loadFromUnifiedQuote: () => {
    const service = useUnifiedQuoteStore.getState().configuredServices['social-media'];
    if (service) {
      const config = service.config as SocialMediaConfig;
      set({
        managementGoal: config.managementGoal,
        platforms: config.platforms,
        platformsPrice: config.platformsPrice,
        frequency: config.frequency,
        frequencyPrice: config.frequencyPrice,
        postsPerMonth: config.postsPerMonth,
        content: config.content,
        contentPrice: config.contentPrice,
        engagement: config.engagement,
        engagementPrice: config.engagementPrice,
        strategy: config.strategy,
        strategyPrice: config.strategyPrice,
        reporting: config.reporting,
        reportingPrice: config.reportingPrice,
        stories: config.stories,
        storiesPrice: config.storiesPrice,
        reels: config.reels,
        reelsPrice: config.reelsPrice,
        selectedAdditionalAddOns: config.selectedAdditionalAddOns,
        duration: config.duration,
        durationMultiplier: config.durationMultiplier,
        durationMonths: config.durationMonths,
        monthlySubtotal: config.monthlySubtotal,
        durationDiscount: config.durationDiscount,
        monthlyTotal: config.monthlyTotal,
        oneTimeTotal: config.oneTimeTotal,
        totalMonthlyOverTerm: config.totalMonthlyOverTerm,
        totalInvestment: config.totalInvestment,
        hasCustomQuote: config.hasCustomQuote,
      });
    }
  },

  resetBuilder: () => {
    useUnifiedQuoteStore.getState().clearServiceConfig('social-media');
    set({
      currentStep: 1,
      managementGoal: null,
      platforms: null,
      platformsPrice: null,
      frequency: null,
      frequencyPrice: null,
      postsPerMonth: null,
      content: null,
      contentPrice: 0,
      engagement: null,
      engagementPrice: null,
      strategy: null,
      strategyPrice: 0,
      reporting: null,
      reportingPrice: 0,
      stories: 'none',
      storiesPrice: 0,
      reels: 'none',
      reelsPrice: 0,
      selectedAdditionalAddOns: [],
      duration: null,
      durationMultiplier: 1.0,
      durationMonths: 3,
      monthlySubtotal: 0,
      durationDiscount: 0,
      monthlyTotal: 0,
      oneTimeTotal: 0,
      totalMonthlyOverTerm: 0,
      totalInvestment: 0,
      hasCustomQuote: false,
    });
  },
}));
