import { create } from 'zustand';
import {
  recommendationPresets,
  siteSizeOptions,
  designOptions,
  cmsOptions,
  features,
  websiteAIFeatures,
  additionalServices,
  timelineOptions,
  getFeatureOptionPrice,
  getWebsiteAISetupPrice,
  getWebsiteAIUsagePrice,
} from '@/data/websiteBuilder';
import { useUnifiedQuoteStore, WebsiteConfig } from './useUnifiedQuoteStore';

export interface SelectedFeature {
  id: string;
  optionId: string;
  price: number | null;
}

export interface SelectedService {
  id: string;
  price: number;
  recurring?: 'monthly';
}

export interface SelectedAIFeature {
  id: string;
  setupOptionId: string;
  setupPrice: number | null;
  usageOptionId: string | null;
  usagePrice: number | null;
}

export interface CustomerInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
}

interface BuilderState {
  // Current step (1-8, 9 = summary)
  currentStep: number;

  // Step 1: Project Type (info only)
  projectType: string | null;

  // Step 2: Site Size
  siteSize: string | null;
  siteSizePrice: number | null;

  // Step 3: Design Complexity
  designComplexity: string | null;
  designPrice: number;

  // Step 4: CMS
  cms: string | null;
  cmsPrice: number;

  // Step 5: Features
  selectedFeatures: SelectedFeature[];

  // Step 6: AI Features
  selectedAIFeatures: SelectedAIFeature[];

  // Step 7: Additional Services
  selectedServices: SelectedService[];

  // Step 8: Timeline
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated totals
  subtotal: number;
  rushFee: number;
  total: number;
  monthlyRecurring: number;
  hasCustomQuote: boolean;

  // Customer info (for quote)
  customerInfo: CustomerInfo;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setProjectType: (type: string) => void;
  setSiteSize: (sizeId: string) => void;
  setDesignComplexity: (designId: string) => void;
  setCMS: (cmsId: string) => void;

  toggleFeature: (featureId: string) => void;
  setFeatureOption: (featureId: string, optionId: string) => void;
  isFeatureSelected: (featureId: string) => boolean;
  getFeatureOption: (featureId: string) => string | null;

  toggleAIFeature: (featureId: string) => void;
  setAISetupOption: (featureId: string, optionId: string) => void;
  setAIUsageOption: (featureId: string, optionId: string) => void;
  isAIFeatureSelected: (featureId: string) => boolean;
  getAIFeatureSetup: (featureId: string) => string | null;
  getAIFeatureUsage: (featureId: string) => string | null;

  toggleService: (serviceId: string) => void;
  isServiceSelected: (serviceId: string) => boolean;

  setTimeline: (timelineId: string) => void;

  setCustomerInfo: (info: Partial<CustomerInfo>) => void;

  applyRecommendations: (projectType: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;

  // Unified quote integration
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => boolean;
  getCurrentConfig: () => WebsiteConfig;
}

const initialCustomerInfo: CustomerInfo = {
  name: '',
  email: '',
  company: '',
  phone: '',
  notes: '',
};

export const useBuilderStore = create<BuilderState>((set, get) => ({
  currentStep: 1,
  projectType: null,
  siteSize: null,
  siteSizePrice: null,
  designComplexity: null,
  designPrice: 0,
  cms: null,
  cmsPrice: 0,
  selectedFeatures: [],
  selectedAIFeatures: [],
  selectedServices: [],
  timeline: 'flexible',
  timelineMultiplier: 1.0,
  subtotal: 0,
  rushFee: 0,
  total: 0,
  monthlyRecurring: 0,
  hasCustomQuote: false,
  customerInfo: initialCustomerInfo,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < 9) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setProjectType: (type) => {
    set({ projectType: type });
    get().applyRecommendations(type);
  },

  setSiteSize: (sizeId) => {
    const option = siteSizeOptions.find((o) => o.id === sizeId);
    set({
      siteSize: sizeId,
      siteSizePrice: option?.price ?? null,
    });
    get().calculateTotals();
  },

  setDesignComplexity: (designId) => {
    const option = designOptions.find((o) => o.id === designId);
    set({
      designComplexity: designId,
      designPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setCMS: (cmsId) => {
    const option = cmsOptions.find((o) => o.id === cmsId);
    set({
      cms: cmsId,
      cmsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  toggleFeature: (featureId) => {
    const { selectedFeatures } = get();
    const isSelected = selectedFeatures.some((f) => f.id === featureId);

    if (isSelected) {
      set({
        selectedFeatures: selectedFeatures.filter((f) => f.id !== featureId),
      });
    } else {
      const feature = features.find((f) => f.id === featureId);
      if (feature) {
        const defaultOption = feature.options.find((o) => o.id === feature.defaultTier);
        set({
          selectedFeatures: [
            ...selectedFeatures,
            {
              id: featureId,
              optionId: feature.defaultTier,
              price: defaultOption?.price ?? null,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  setFeatureOption: (featureId, optionId) => {
    const { selectedFeatures } = get();
    const price = getFeatureOptionPrice(featureId, optionId);

    set({
      selectedFeatures: selectedFeatures.map((f) =>
        f.id === featureId ? { ...f, optionId, price } : f
      ),
    });
    get().calculateTotals();
  },

  isFeatureSelected: (featureId) => {
    return get().selectedFeatures.some((f) => f.id === featureId);
  },

  getFeatureOption: (featureId) => {
    const feature = get().selectedFeatures.find((f) => f.id === featureId);
    return feature?.optionId ?? null;
  },

  toggleAIFeature: (featureId) => {
    const { selectedAIFeatures } = get();
    const isSelected = selectedAIFeatures.some((f) => f.id === featureId);

    if (isSelected) {
      set({
        selectedAIFeatures: selectedAIFeatures.filter((f) => f.id !== featureId),
      });
    } else {
      const feature = websiteAIFeatures.find((f) => f.id === featureId);
      if (feature) {
        const defaultSetup = feature.setupOptions.find((o) => o.id === feature.defaultSetupTier);
        const defaultUsage = feature.usageOptions.find((o) => o.id === feature.defaultUsageTier);
        set({
          selectedAIFeatures: [
            ...selectedAIFeatures,
            {
              id: featureId,
              setupOptionId: feature.defaultSetupTier,
              setupPrice: defaultSetup?.price ?? null,
              usageOptionId: feature.defaultUsageTier,
              usagePrice: defaultUsage?.price ?? null,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  setAISetupOption: (featureId, optionId) => {
    const { selectedAIFeatures } = get();
    const price = getWebsiteAISetupPrice(featureId, optionId);

    set({
      selectedAIFeatures: selectedAIFeatures.map((f) =>
        f.id === featureId ? { ...f, setupOptionId: optionId, setupPrice: price } : f
      ),
    });
    get().calculateTotals();
  },

  setAIUsageOption: (featureId, optionId) => {
    const { selectedAIFeatures } = get();
    const price = getWebsiteAIUsagePrice(featureId, optionId);

    set({
      selectedAIFeatures: selectedAIFeatures.map((f) =>
        f.id === featureId ? { ...f, usageOptionId: optionId, usagePrice: price } : f
      ),
    });
    get().calculateTotals();
  },

  isAIFeatureSelected: (featureId) => {
    return get().selectedAIFeatures.some((f) => f.id === featureId);
  },

  getAIFeatureSetup: (featureId) => {
    const feature = get().selectedAIFeatures.find((f) => f.id === featureId);
    return feature?.setupOptionId ?? null;
  },

  getAIFeatureUsage: (featureId) => {
    const feature = get().selectedAIFeatures.find((f) => f.id === featureId);
    return feature?.usageOptionId ?? null;
  },

  toggleService: (serviceId) => {
    const { selectedServices } = get();
    const isSelected = selectedServices.some((s) => s.id === serviceId);

    if (isSelected) {
      set({
        selectedServices: selectedServices.filter((s) => s.id !== serviceId),
      });
    } else {
      const service = additionalServices.find((s) => s.id === serviceId);
      if (service) {
        set({
          selectedServices: [
            ...selectedServices,
            {
              id: serviceId,
              price: service.price,
              recurring: service.recurring,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  isServiceSelected: (serviceId) => {
    return get().selectedServices.some((s) => s.id === serviceId);
  },

  setTimeline: (timelineId) => {
    const option = timelineOptions.find((o) => o.id === timelineId);
    set({
      timeline: timelineId,
      timelineMultiplier: option?.multiplier ?? 1.0,
    });
    get().calculateTotals();
  },

  setCustomerInfo: (info) => {
    set((state) => ({
      customerInfo: { ...state.customerInfo, ...info },
    }));
  },

  applyRecommendations: (projectType) => {
    const preset = recommendationPresets[projectType];
    if (!preset) return;

    // Set site size
    const sizeOption = siteSizeOptions.find((o) => o.id === preset.siteSize);

    // Set design
    const designOption = designOptions.find((o) => o.id === preset.designComplexity);

    // Set CMS
    const cmsOption = cmsOptions.find((o) => o.id === preset.cms);

    // Set features
    const selectedFeatures: SelectedFeature[] = preset.features.map((featureId) => {
      const feature = features.find((f) => f.id === featureId);
      if (!feature) return null;
      const defaultOption = feature.options.find((o) => o.id === feature.defaultTier);
      return {
        id: featureId,
        optionId: feature.defaultTier,
        price: defaultOption?.price ?? null,
      };
    }).filter((f): f is SelectedFeature => f !== null);

    set({
      siteSize: preset.siteSize,
      siteSizePrice: sizeOption?.price ?? null,
      designComplexity: preset.designComplexity,
      designPrice: designOption?.price ?? 0,
      cms: preset.cms,
      cmsPrice: cmsOption?.price ?? 0,
      selectedFeatures,
    });

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let subtotal = 0;
    let monthlyRecurring = 0;
    let hasCustomQuote = false;

    // Site Size
    if (state.siteSizePrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.siteSizePrice;
    }

    // Design Complexity
    subtotal += state.designPrice;

    // CMS
    subtotal += state.cmsPrice;

    // Features
    state.selectedFeatures.forEach((feature) => {
      if (feature.price === null) {
        hasCustomQuote = true;
      } else {
        subtotal += feature.price;
      }
    });

    // AI Features
    state.selectedAIFeatures.forEach((ai) => {
      // Setup (one-time)
      if (ai.setupPrice === null) {
        hasCustomQuote = true;
      } else {
        subtotal += ai.setupPrice;
      }
      // Usage (monthly)
      if (ai.usagePrice === null) {
        hasCustomQuote = true;
      } else if (ai.usagePrice) {
        monthlyRecurring += ai.usagePrice;
      }
    });

    // Additional Services (one-time only)
    state.selectedServices.forEach((service) => {
      if (!service.recurring) {
        subtotal += service.price;
      }
    });

    // Timeline multiplier
    const rushFee = Math.round(subtotal * (state.timelineMultiplier - 1));
    const total = Math.round(subtotal * state.timelineMultiplier);

    // Monthly recurring from services
    monthlyRecurring += state.selectedServices
      .filter((s) => s.recurring === 'monthly')
      .reduce((sum, s) => sum + s.price, 0);

    set({
      subtotal,
      rushFee,
      total,
      monthlyRecurring,
      hasCustomQuote,
    });
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      projectType: null,
      siteSize: null,
      siteSizePrice: null,
      designComplexity: null,
      designPrice: 0,
      cms: null,
      cmsPrice: 0,
      selectedFeatures: [],
      selectedAIFeatures: [],
      selectedServices: [],
      timeline: 'flexible',
      timelineMultiplier: 1.0,
      subtotal: 0,
      rushFee: 0,
      total: 0,
      monthlyRecurring: 0,
      hasCustomQuote: false,
      customerInfo: initialCustomerInfo,
    });
    // Also clear from unified quote
    useUnifiedQuoteStore.getState().clearServiceConfig('website');
  },

  getCurrentConfig: (): WebsiteConfig => {
    const state = get();
    return {
      projectType: state.projectType,
      siteSize: state.siteSize,
      siteSizePrice: state.siteSizePrice,
      designComplexity: state.designComplexity,
      designPrice: state.designPrice,
      cms: state.cms,
      cmsPrice: state.cmsPrice,
      selectedFeatures: state.selectedFeatures,
      selectedAIFeatures: state.selectedAIFeatures,
      selectedServices: state.selectedServices,
      timeline: state.timeline,
      timelineMultiplier: state.timelineMultiplier,
      subtotal: state.subtotal,
      rushFee: state.rushFee,
      total: state.total,
      monthlyRecurring: state.monthlyRecurring,
      hasCustomQuote: state.hasCustomQuote,
    };
  },

  saveToUnifiedQuote: () => {
    const config = get().getCurrentConfig();
    useUnifiedQuoteStore.getState().saveServiceConfig('website', config);
  },

  loadFromUnifiedQuote: () => {
    const config = useUnifiedQuoteStore.getState().getServiceConfig<WebsiteConfig>('website');
    if (config) {
      set({
        projectType: config.projectType,
        siteSize: config.siteSize,
        siteSizePrice: config.siteSizePrice,
        designComplexity: config.designComplexity,
        designPrice: config.designPrice,
        cms: config.cms,
        cmsPrice: config.cmsPrice,
        selectedFeatures: config.selectedFeatures,
        selectedAIFeatures: config.selectedAIFeatures || [],
        selectedServices: config.selectedServices,
        timeline: config.timeline,
        timelineMultiplier: config.timelineMultiplier,
        subtotal: config.subtotal,
        rushFee: config.rushFee,
        total: config.total,
        monthlyRecurring: config.monthlyRecurring,
        hasCustomQuote: config.hasCustomQuote,
      });
      return true;
    }
    return false;
  },
}));
