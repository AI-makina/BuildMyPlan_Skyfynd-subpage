import { create } from 'zustand';
import { useUnifiedQuoteStore, PaidMediaConfig } from './useUnifiedQuoteStore';
import {
  campaignTypeOptions,
  platformOptions,
  budgetOptions,
  durationOptions,
  managementOptions,
  creativeOptions,
  landingPageOptions,
  trackingOptions,
  reportingOptions,
  addOnOptions,
  recommendationPresets,
} from '@/data/paidMediaBuilder';

export interface SelectedAddOn {
  id: string;
  price: number;
  oneTime?: boolean;
  recurring?: 'monthly';
}

interface PaidMediaBuilderState {
  // Navigation
  currentStep: number;

  // Step 1: Campaign Type (info only)
  campaignType: string | null;

  // Step 2: Platforms
  platforms: string | null;
  platformsPrice: number | null;

  // Step 3: Budget (informational only)
  budget: string | null;
  adSpendRange: [number, number] | null;

  // Step 4: Duration
  duration: string | null;
  durationMultiplier: number;
  durationMonths: number;

  // Step 5: Management
  management: string | null;
  managementPrice: number;
  managementOneTime: boolean;

  // Step 6: Creatives
  creatives: string | null;
  creativesPrice: number;
  landingPage: string | null;
  landingPagePrice: number;

  // Step 7: Tracking
  tracking: string | null;
  trackingPrice: number;

  // Step 8: Reporting
  reporting: string | null;
  reportingPrice: number;

  // Step 9: Add-ons
  selectedAddOns: SelectedAddOn[];

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
  setCampaignType: (type: string) => void;
  setPlatforms: (platformId: string) => void;
  setBudget: (budgetId: string) => void;
  setDuration: (durationId: string) => void;
  setManagement: (managementId: string) => void;
  setCreatives: (creativesId: string) => void;
  setLandingPage: (landingPageId: string) => void;
  setTracking: (trackingId: string) => void;
  setReporting: (reportingId: string) => void;
  toggleAddOn: (addOnId: string) => void;
  applyRecommendations: (campaignType: string) => void;
  calculateTotals: () => void;
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const usePaidMediaBuilderStore = create<PaidMediaBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  campaignType: null,
  platforms: null,
  platformsPrice: null,
  budget: null,
  adSpendRange: null,
  duration: null,
  durationMultiplier: 1.0,
  durationMonths: 3,
  management: null,
  managementPrice: 0,
  managementOneTime: false,
  creatives: null,
  creativesPrice: 0,
  landingPage: null,
  landingPagePrice: 0,
  tracking: null,
  trackingPrice: 0,
  reporting: null,
  reportingPrice: 0,
  selectedAddOns: [],
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

  setCampaignType: (type) => {
    set({ campaignType: type });
    // Apply recommendations after setting campaign type
    get().applyRecommendations(type);
  },

  setPlatforms: (platformId) => {
    const platform = platformOptions.find((p) => p.id === platformId);
    set({
      platforms: platformId,
      platformsPrice: platform?.price ?? null,
    });
    get().calculateTotals();
  },

  setBudget: (budgetId) => {
    const budget = budgetOptions.find((b) => b.id === budgetId);
    set({
      budget: budgetId,
      adSpendRange: budget?.adSpendRange ?? null,
    });
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

  setManagement: (managementId) => {
    const management = managementOptions.find((m) => m.id === managementId);
    set({
      management: managementId,
      managementPrice: management?.price ?? 0,
      managementOneTime: management?.oneTime ?? false,
    });
    get().calculateTotals();
  },

  setCreatives: (creativesId) => {
    const creative = creativeOptions.find((c) => c.id === creativesId);
    set({
      creatives: creativesId,
      creativesPrice: creative?.price ?? 0,
    });
    get().calculateTotals();
  },

  setLandingPage: (landingPageId) => {
    const landing = landingPageOptions.find((l) => l.id === landingPageId);
    set({
      landingPage: landingPageId,
      landingPagePrice: landing?.price ?? 0,
    });
    get().calculateTotals();
  },

  setTracking: (trackingId) => {
    const tracking = trackingOptions.find((t) => t.id === trackingId);
    set({
      tracking: trackingId,
      trackingPrice: tracking?.price ?? 0,
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

  toggleAddOn: (addOnId) => {
    const state = get();
    const addOn = addOnOptions.find((a) => a.id === addOnId);
    if (!addOn) return;

    const isSelected = state.selectedAddOns.some((a) => a.id === addOnId);
    if (isSelected) {
      set({
        selectedAddOns: state.selectedAddOns.filter((a) => a.id !== addOnId),
      });
    } else {
      set({
        selectedAddOns: [
          ...state.selectedAddOns,
          {
            id: addOnId,
            price: addOn.price,
            oneTime: addOn.oneTime,
            recurring: addOn.recurring,
          },
        ],
      });
    }
    get().calculateTotals();
  },

  applyRecommendations: (campaignType) => {
    const preset = recommendationPresets[campaignType];
    if (!preset) return;

    // Apply platform
    const platform = platformOptions.find((p) => p.id === preset.platforms);

    // Apply duration
    const duration = durationOptions.find((d) => d.id === preset.duration);

    // Apply management
    const management = managementOptions.find((m) => m.id === preset.management);

    // Apply creatives
    const creative = creativeOptions.find((c) => c.id === preset.creatives);

    // Apply landing page
    const landing = landingPageOptions.find((l) => l.id === preset.landingPage);

    // Apply tracking
    const tracking = trackingOptions.find((t) => t.id === preset.tracking);

    // Apply reporting
    const reporting = reportingOptions.find((r) => r.id === preset.reporting);

    // Apply add-ons
    const selectedAddOns = (preset.addOns || [])
      .map((addOnId) => {
        const addOn = addOnOptions.find((a) => a.id === addOnId);
        if (!addOn) return null;
        return {
          id: addOnId,
          price: addOn.price,
          oneTime: addOn.oneTime,
          recurring: addOn.recurring,
        } as SelectedAddOn;
      })
      .filter((a): a is SelectedAddOn => a !== null);

    // Set default budget
    const defaultBudget = budgetOptions.find((b) => b.id === 'growth');

    set({
      platforms: preset.platforms,
      platformsPrice: platform?.price ?? null,
      budget: 'growth',
      adSpendRange: defaultBudget?.adSpendRange ?? null,
      duration: preset.duration,
      durationMultiplier: duration?.multiplier ?? 1.0,
      durationMonths: duration?.months ?? 3,
      management: preset.management,
      managementPrice: management?.price ?? 0,
      managementOneTime: management?.oneTime ?? false,
      creatives: preset.creatives,
      creativesPrice: creative?.price ?? 0,
      landingPage: preset.landingPage,
      landingPagePrice: landing?.price ?? 0,
      tracking: preset.tracking,
      trackingPrice: tracking?.price ?? 0,
      reporting: preset.reporting,
      reportingPrice: reporting?.price ?? 0,
      selectedAddOns,
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

    // Budget - check for custom quote (enterprise-plus)
    const budgetOption = budgetOptions.find((b) => b.id === state.budget);
    if (budgetOption?.customQuote) {
      hasCustomQuote = true;
    }

    // Management
    if (state.managementOneTime) {
      oneTimeTotal += state.managementPrice;
    } else {
      monthlySubtotal += state.managementPrice;
    }

    // Creatives (one-time)
    oneTimeTotal += state.creativesPrice;

    // Landing Page (one-time)
    oneTimeTotal += state.landingPagePrice;

    // Tracking (one-time)
    oneTimeTotal += state.trackingPrice;

    // Reporting (monthly)
    monthlySubtotal += state.reportingPrice;

    // Add-ons
    state.selectedAddOns.forEach((addOn) => {
      if (addOn.oneTime) {
        oneTimeTotal += addOn.price;
      } else {
        monthlySubtotal += addOn.price;
      }
    });

    // Duration discount (applies to monthly only)
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
    useUnifiedQuoteStore.getState().saveServiceConfig('paid-media', {
      campaignType: state.campaignType,
      platforms: state.platforms,
      platformsPrice: state.platformsPrice,
      budget: state.budget,
      adSpendRange: state.adSpendRange,
      duration: state.duration,
      durationMultiplier: state.durationMultiplier,
      durationMonths: state.durationMonths,
      management: state.management,
      managementPrice: state.managementPrice,
      managementOneTime: state.managementOneTime,
      creatives: state.creatives,
      creativesPrice: state.creativesPrice,
      landingPage: state.landingPage,
      landingPagePrice: state.landingPagePrice,
      tracking: state.tracking,
      trackingPrice: state.trackingPrice,
      reporting: state.reporting,
      reportingPrice: state.reportingPrice,
      selectedAddOns: state.selectedAddOns,
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
    const service = useUnifiedQuoteStore.getState().configuredServices['paid-media'];
    if (service) {
      const config = service.config as PaidMediaConfig;
      set({
        campaignType: config.campaignType,
        platforms: config.platforms,
        platformsPrice: config.platformsPrice,
        budget: config.budget,
        adSpendRange: config.adSpendRange,
        duration: config.duration,
        durationMultiplier: config.durationMultiplier,
        durationMonths: config.durationMonths,
        management: config.management,
        managementPrice: config.managementPrice,
        managementOneTime: config.managementOneTime,
        creatives: config.creatives,
        creativesPrice: config.creativesPrice,
        landingPage: config.landingPage,
        landingPagePrice: config.landingPagePrice,
        tracking: config.tracking,
        trackingPrice: config.trackingPrice,
        reporting: config.reporting,
        reportingPrice: config.reportingPrice,
        selectedAddOns: config.selectedAddOns,
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
    useUnifiedQuoteStore.getState().clearServiceConfig('paid-media');
    set({
      currentStep: 1,
      campaignType: null,
      platforms: null,
      platformsPrice: null,
      budget: null,
      adSpendRange: null,
      duration: null,
      durationMultiplier: 1.0,
      durationMonths: 3,
      management: null,
      managementPrice: 0,
      managementOneTime: false,
      creatives: null,
      creativesPrice: 0,
      landingPage: null,
      landingPagePrice: 0,
      tracking: null,
      trackingPrice: 0,
      reporting: null,
      reportingPrice: 0,
      selectedAddOns: [],
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
