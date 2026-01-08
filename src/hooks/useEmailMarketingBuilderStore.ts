import { create } from 'zustand';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';
import {
  volumeOptions,
  designOptions,
  automationOptions,
  sequenceOptions,
  listOptions,
  copyOptions,
  reportingOptions,
  testingOptions,
  platformOptions,
  additionalServicesOptions,
  durationOptions,
  recommendationPresets,
} from '@/data/emailMarketingBuilder';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime?: boolean;
  recurring?: 'monthly';
}

interface EmailMarketingBuilderState {
  // Step tracking
  currentStep: number;

  // Step 1: Email Marketing Goal (info only)
  emailGoal: string | null;

  // Step 2: Email Volume
  volume: string | null;
  volumePrice: number | null;
  emailsPerMonth: number | null;

  // Step 3: Email Design & Templates
  design: string | null;
  designPrice: number;

  // Step 4: Automation & Sequences
  automation: string | null;
  automationPrice: number;

  // Step 5: Automation Sequences
  sequences: string | null;
  sequencesPrice: number | null;

  // Step 6: List Management & Segmentation
  list: string | null;
  listPrice: number;

  // Step 7: Copywriting & Content
  copy: string | null;
  copyPrice: number;

  // Step 8: Reporting & Analytics
  reporting: string | null;
  reportingPrice: number;

  // Step 9: Add-on Services
  testing: string;
  testingPrice: number;
  platform: string;
  platformPrice: number;
  selectedAdditionalServices: SelectedAddOn[];

  // Step 10: Contract Duration
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

  setEmailGoal: (goalId: string) => void;
  setVolume: (volumeId: string) => void;
  setDesign: (designId: string) => void;
  setAutomation: (automationId: string) => void;
  setSequences: (sequencesId: string) => void;
  setList: (listId: string) => void;
  setCopy: (copyId: string) => void;
  setReporting: (reportingId: string) => void;
  setTesting: (testingId: string) => void;
  setPlatform: (platformId: string) => void;
  toggleAdditionalService: (serviceId: string) => void;
  setDuration: (durationId: string) => void;

  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;

  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const useEmailMarketingBuilderStore = create<EmailMarketingBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  emailGoal: null,
  volume: null,
  volumePrice: null,
  emailsPerMonth: null,
  design: null,
  designPrice: 0,
  automation: null,
  automationPrice: 0,
  sequences: null,
  sequencesPrice: null,
  list: null,
  listPrice: 0,
  copy: null,
  copyPrice: 0,
  reporting: null,
  reportingPrice: 0,
  testing: 'none',
  testingPrice: 0,
  platform: 'client',
  platformPrice: 0,
  selectedAdditionalServices: [],
  duration: null,
  durationMultiplier: 1,
  durationMonths: 1,
  monthlySubtotal: 0,
  durationDiscount: 0,
  monthlyTotal: 0,
  oneTimeTotal: 0,
  totalMonthlyOverTerm: 0,
  totalInvestment: 0,
  hasCustomQuote: false,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < 11) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setEmailGoal: (goalId) => {
    set({ emailGoal: goalId });
    get().applyRecommendations(goalId);
  },

  setVolume: (volumeId) => {
    const option = volumeOptions.find((v) => v.id === volumeId);
    set({
      volume: volumeId,
      volumePrice: option?.price ?? null,
      emailsPerMonth: option?.emailsPerMonth ?? null,
    });
    get().calculateTotals();
  },

  setDesign: (designId) => {
    const option = designOptions.find((d) => d.id === designId);
    set({
      design: designId,
      designPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setAutomation: (automationId) => {
    const option = automationOptions.find((a) => a.id === automationId);
    set({
      automation: automationId,
      automationPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSequences: (sequencesId) => {
    const option = sequenceOptions.find((s) => s.id === sequencesId);
    set({
      sequences: sequencesId,
      sequencesPrice: option?.price ?? null,
    });
    get().calculateTotals();
  },

  setList: (listId) => {
    const option = listOptions.find((l) => l.id === listId);
    set({
      list: listId,
      listPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setCopy: (copyId) => {
    const option = copyOptions.find((c) => c.id === copyId);
    set({
      copy: copyId,
      copyPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setReporting: (reportingId) => {
    const option = reportingOptions.find((r) => r.id === reportingId);
    set({
      reporting: reportingId,
      reportingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setTesting: (testingId) => {
    const option = testingOptions.find((t) => t.id === testingId);
    set({
      testing: testingId,
      testingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPlatform: (platformId) => {
    const option = platformOptions.find((p) => p.id === platformId);
    set({
      platform: platformId,
      platformPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  toggleAdditionalService: (serviceId) => {
    const { selectedAdditionalServices } = get();
    const existing = selectedAdditionalServices.find((s) => s.id === serviceId);

    if (existing) {
      set({
        selectedAdditionalServices: selectedAdditionalServices.filter((s) => s.id !== serviceId),
      });
    } else {
      const service = additionalServicesOptions.find((s) => s.id === serviceId);
      if (service) {
        set({
          selectedAdditionalServices: [
            ...selectedAdditionalServices,
            {
              id: service.id,
              price: service.price,
              oneTime: service.oneTime,
              recurring: service.recurring,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  setDuration: (durationId) => {
    const option = durationOptions.find((d) => d.id === durationId);
    set({
      duration: durationId,
      durationMultiplier: option?.multiplier ?? 1,
      durationMonths: option?.months ?? 1,
    });
    get().calculateTotals();
  },

  applyRecommendations: (goalId) => {
    const preset = recommendationPresets[goalId];
    if (!preset) return;

    const state = get();

    // Apply volume recommendation
    if (preset.volume) {
      const volumeOpt = volumeOptions.find((v) => v.id === preset.volume);
      if (volumeOpt) {
        set({
          volume: preset.volume,
          volumePrice: volumeOpt.price,
          emailsPerMonth: volumeOpt.emailsPerMonth,
        });
      }
    }

    // Apply design recommendation
    if (preset.design) {
      const designOpt = designOptions.find((d) => d.id === preset.design);
      if (designOpt) {
        set({
          design: preset.design,
          designPrice: designOpt.price,
        });
      }
    }

    // Apply automation recommendation
    if (preset.automation) {
      const automationOpt = automationOptions.find((a) => a.id === preset.automation);
      if (automationOpt) {
        set({
          automation: preset.automation,
          automationPrice: automationOpt.price,
        });
      }
    }

    // Apply sequences recommendation
    if (preset.sequences) {
      const sequencesOpt = sequenceOptions.find((s) => s.id === preset.sequences);
      if (sequencesOpt) {
        set({
          sequences: preset.sequences,
          sequencesPrice: sequencesOpt.price,
        });
      }
    }

    // Apply list recommendation
    if (preset.list) {
      const listOpt = listOptions.find((l) => l.id === preset.list);
      if (listOpt) {
        set({
          list: preset.list,
          listPrice: listOpt.price,
        });
      }
    }

    // Apply copy recommendation
    if (preset.copy) {
      const copyOpt = copyOptions.find((c) => c.id === preset.copy);
      if (copyOpt) {
        set({
          copy: preset.copy,
          copyPrice: copyOpt.price,
        });
      }
    }

    // Apply reporting recommendation
    if (preset.reporting) {
      const reportingOpt = reportingOptions.find((r) => r.id === preset.reporting);
      if (reportingOpt) {
        set({
          reporting: preset.reporting,
          reportingPrice: reportingOpt.price,
        });
      }
    }

    // Apply add-ons recommendations
    if (preset.addOns && preset.addOns.length > 0) {
      preset.addOns.forEach((addOnId) => {
        // Handle testing add-ons
        if (addOnId === 'testing-advanced') {
          const testingOpt = testingOptions.find((t) => t.id === 'advanced');
          if (testingOpt) {
            set({
              testing: 'advanced',
              testingPrice: testingOpt.price,
            });
          }
        }
        // Handle platform add-ons
        if (addOnId === 'platform-deliverability') {
          const platformOpt = platformOptions.find((p) => p.id === 'deliverability');
          if (platformOpt) {
            set({
              platform: 'deliverability',
              platformPrice: platformOpt.price,
            });
          }
        }
        if (addOnId === 'platform-managed') {
          const platformOpt = platformOptions.find((p) => p.id === 'managed');
          if (platformOpt) {
            set({
              platform: 'managed',
              platformPrice: platformOpt.price,
            });
          }
        }
      });
    }

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let monthlySubtotal = 0;
    let oneTimeTotal = 0;
    let hasCustomQuote = false;

    // Volume (monthly)
    if (state.volumePrice === null && state.volume) {
      hasCustomQuote = true;
    } else if (state.volumePrice !== null) {
      monthlySubtotal += state.volumePrice;
    }

    // Design (monthly)
    monthlySubtotal += state.designPrice;

    // Automation (monthly)
    monthlySubtotal += state.automationPrice;

    // Sequences (one-time)
    if (state.sequencesPrice === null && state.sequences && state.sequences !== 'none') {
      hasCustomQuote = true;
    } else if (state.sequencesPrice !== null) {
      oneTimeTotal += state.sequencesPrice;
    }

    // List (monthly)
    monthlySubtotal += state.listPrice;

    // Copy (monthly)
    monthlySubtotal += state.copyPrice;

    // Reporting (monthly)
    monthlySubtotal += state.reportingPrice;

    // Testing (monthly)
    monthlySubtotal += state.testingPrice;

    // Platform (monthly)
    monthlySubtotal += state.platformPrice;

    // Additional Services
    state.selectedAdditionalServices.forEach((service) => {
      if (service.oneTime) {
        oneTimeTotal += service.price;
      } else if (service.recurring === 'monthly') {
        monthlySubtotal += service.price;
      }
    });

    // Duration multiplier (applies to monthly only)
    const durationDiscount = monthlySubtotal * (1 - state.durationMultiplier);
    const monthlyTotal = monthlySubtotal * state.durationMultiplier;

    // Calculate totals
    const totalMonthlyOverTerm = monthlyTotal * state.durationMonths;
    const totalInvestment = totalMonthlyOverTerm + oneTimeTotal;

    set({
      monthlySubtotal,
      durationDiscount: Math.abs(durationDiscount),
      monthlyTotal,
      oneTimeTotal,
      totalMonthlyOverTerm,
      totalInvestment,
      hasCustomQuote,
    });
  },

  saveToUnifiedQuote: () => {
    const state = get();
    const unifiedStore = useUnifiedQuoteStore.getState();

    unifiedStore.saveServiceConfig('email-marketing', {
      emailGoal: state.emailGoal,
      volume: state.volume,
      volumePrice: state.volumePrice,
      emailsPerMonth: state.emailsPerMonth,
      design: state.design,
      designPrice: state.designPrice,
      automation: state.automation,
      automationPrice: state.automationPrice,
      sequences: state.sequences,
      sequencesPrice: state.sequencesPrice,
      list: state.list,
      listPrice: state.listPrice,
      copy: state.copy,
      copyPrice: state.copyPrice,
      reporting: state.reporting,
      reportingPrice: state.reportingPrice,
      testing: state.testing,
      testingPrice: state.testingPrice,
      platform: state.platform,
      platformPrice: state.platformPrice,
      selectedAdditionalServices: state.selectedAdditionalServices,
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
    const unifiedStore = useUnifiedQuoteStore.getState();
    const config = unifiedStore.getServiceConfig('email-marketing');
    if (config) {
      const emailConfig = config as {
        emailGoal: string | null;
        volume: string | null;
        volumePrice: number | null;
        emailsPerMonth: number | null;
        design: string | null;
        designPrice: number;
        automation: string | null;
        automationPrice: number;
        sequences: string | null;
        sequencesPrice: number | null;
        list: string | null;
        listPrice: number;
        copy: string | null;
        copyPrice: number;
        reporting: string | null;
        reportingPrice: number;
        testing: string;
        testingPrice: number;
        platform: string;
        platformPrice: number;
        selectedAdditionalServices: SelectedAddOn[];
        duration: string | null;
        durationMultiplier: number;
        durationMonths: number;
        monthlySubtotal: number;
        durationDiscount: number;
        monthlyTotal: number;
        oneTimeTotal: number;
        totalMonthlyOverTerm: number;
        totalInvestment: number;
        hasCustomQuote: boolean;
      };
      set({
        emailGoal: emailConfig.emailGoal,
        volume: emailConfig.volume,
        volumePrice: emailConfig.volumePrice,
        emailsPerMonth: emailConfig.emailsPerMonth,
        design: emailConfig.design,
        designPrice: emailConfig.designPrice,
        automation: emailConfig.automation,
        automationPrice: emailConfig.automationPrice,
        sequences: emailConfig.sequences,
        sequencesPrice: emailConfig.sequencesPrice,
        list: emailConfig.list,
        listPrice: emailConfig.listPrice,
        copy: emailConfig.copy,
        copyPrice: emailConfig.copyPrice,
        reporting: emailConfig.reporting,
        reportingPrice: emailConfig.reportingPrice,
        testing: emailConfig.testing,
        testingPrice: emailConfig.testingPrice,
        platform: emailConfig.platform,
        platformPrice: emailConfig.platformPrice,
        selectedAdditionalServices: emailConfig.selectedAdditionalServices,
        duration: emailConfig.duration,
        durationMultiplier: emailConfig.durationMultiplier,
        durationMonths: emailConfig.durationMonths,
        monthlySubtotal: emailConfig.monthlySubtotal,
        durationDiscount: emailConfig.durationDiscount,
        monthlyTotal: emailConfig.monthlyTotal,
        oneTimeTotal: emailConfig.oneTimeTotal,
        totalMonthlyOverTerm: emailConfig.totalMonthlyOverTerm,
        totalInvestment: emailConfig.totalInvestment,
        hasCustomQuote: emailConfig.hasCustomQuote,
      });
    }
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      emailGoal: null,
      volume: null,
      volumePrice: null,
      emailsPerMonth: null,
      design: null,
      designPrice: 0,
      automation: null,
      automationPrice: 0,
      sequences: null,
      sequencesPrice: null,
      list: null,
      listPrice: 0,
      copy: null,
      copyPrice: 0,
      reporting: null,
      reportingPrice: 0,
      testing: 'none',
      testingPrice: 0,
      platform: 'client',
      platformPrice: 0,
      selectedAdditionalServices: [],
      duration: null,
      durationMultiplier: 1,
      durationMonths: 1,
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
