import { create } from 'zustand';
import {
  recommendationPresets,
  durationOptions,
  styleOptions,
  complexityOptions,
  soundOptions,
  addOnCategories,
  videoFormatOptions,
  aspectRatioOptions,
  sourceFileOptions,
  timelineOptions,
} from '@/data/animationBuilder';
import { useUnifiedQuoteStore, AnimationConfig } from '@/hooks/useUnifiedQuoteStore';

export interface SelectedAddOn {
  categoryId: string;
  tierId: string;
  price: number;
}

export interface SelectedVideoFormat {
  id: string;
  price: number;
}

export interface CustomerInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
}

interface AnimationBuilderState {
  // Current step (1-8, 9 = summary)
  currentStep: number;

  // Step 1: Animation Type (info only)
  animationType: string | null;

  // Step 2: Duration
  duration: string | null;
  durationPrice: number | null;

  // Step 3: Style
  style: string | null;
  stylePrice: number | null;

  // Step 4: Complexity
  complexity: string | null;
  complexityPrice: number;

  // Step 5: Sound
  sound: string | null;
  soundPrice: number;

  // Step 6: Add-ons
  selectedAddOns: SelectedAddOn[];

  // Step 7: Deliverables
  selectedVideoFormats: SelectedVideoFormat[];
  aspectRatio: string;
  aspectRatioPrice: number;
  sourceFiles: string;
  sourceFilesPrice: number;

  // Step 8: Timeline
  timeline: string;
  timelineMultiplier: number;

  // Calculated totals
  subtotal: number;
  rushFee: number;
  total: number;
  hasCustomQuote: boolean;

  // Customer info
  customerInfo: CustomerInfo;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setAnimationType: (type: string) => void;
  setDuration: (durationId: string) => void;
  setStyle: (styleId: string) => void;
  setComplexity: (complexityId: string) => void;
  setSound: (soundId: string) => void;

  toggleAddOn: (categoryId: string) => void;
  setAddOnTier: (categoryId: string, tierId: string) => void;
  isAddOnSelected: (categoryId: string) => boolean;
  getAddOnTier: (categoryId: string) => string | null;

  toggleVideoFormat: (formatId: string) => void;
  isVideoFormatSelected: (formatId: string) => boolean;
  setAspectRatio: (ratioId: string) => void;
  setSourceFiles: (optionId: string) => void;

  setTimeline: (timelineId: string) => void;
  setCustomerInfo: (info: Partial<CustomerInfo>) => void;

  applyRecommendations: (animationType: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;

  // Unified quote store integration
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => boolean;
  getCurrentConfig: () => AnimationConfig;
}

const initialCustomerInfo: CustomerInfo = {
  name: '',
  email: '',
  company: '',
  phone: '',
  notes: '',
};

export const useAnimationBuilderStore = create<AnimationBuilderState>((set, get) => ({
  currentStep: 1,
  animationType: null,
  duration: null,
  durationPrice: null,
  style: null,
  stylePrice: null,
  complexity: null,
  complexityPrice: 0,
  sound: null,
  soundPrice: 0,
  selectedAddOns: [
    { categoryId: 'revisions', tierId: 'standard', price: 0 }, // Default included
  ],
  selectedVideoFormats: [
    { id: 'mp4', price: 0 }, // Default included
  ],
  aspectRatio: 'single',
  aspectRatioPrice: 0,
  sourceFiles: 'final',
  sourceFilesPrice: 0,
  timeline: 'standard',
  timelineMultiplier: 1.0,
  subtotal: 0,
  rushFee: 0,
  total: 0,
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

  setAnimationType: (type) => {
    set({ animationType: type });
    get().applyRecommendations(type);
  },

  setDuration: (durationId) => {
    const option = durationOptions.find(d => d.id === durationId);
    set({
      duration: durationId,
      durationPrice: option?.price ?? null,
    });
    get().calculateTotals();
  },

  setStyle: (styleId) => {
    const option = styleOptions.find(s => s.id === styleId);
    set({
      style: styleId,
      stylePrice: option?.price ?? null,
    });
    get().calculateTotals();
  },

  setComplexity: (complexityId) => {
    const option = complexityOptions.find(c => c.id === complexityId);
    set({
      complexity: complexityId,
      complexityPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSound: (soundId) => {
    const option = soundOptions.find(s => s.id === soundId);
    set({
      sound: soundId,
      soundPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  toggleAddOn: (categoryId) => {
    const { selectedAddOns } = get();
    const isSelected = selectedAddOns.some(a => a.categoryId === categoryId);

    if (isSelected) {
      // Don't allow removing revisions if it's the only option
      if (categoryId === 'revisions') {
        return;
      }
      set({
        selectedAddOns: selectedAddOns.filter(a => a.categoryId !== categoryId),
      });
    } else {
      const category = addOnCategories.find(c => c.id === categoryId);
      if (category) {
        const defaultTier = category.tiers.find(t => t.id === category.defaultTier);
        set({
          selectedAddOns: [
            ...selectedAddOns,
            {
              categoryId,
              tierId: category.defaultTier,
              price: defaultTier?.price ?? 0,
            },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  setAddOnTier: (categoryId, tierId) => {
    const { selectedAddOns } = get();
    const category = addOnCategories.find(c => c.id === categoryId);
    const tier = category?.tiers.find(t => t.id === tierId);

    set({
      selectedAddOns: selectedAddOns.map(a =>
        a.categoryId === categoryId
          ? { ...a, tierId, price: tier?.price ?? 0 }
          : a
      ),
    });
    get().calculateTotals();
  },

  isAddOnSelected: (categoryId) => {
    return get().selectedAddOns.some(a => a.categoryId === categoryId);
  },

  getAddOnTier: (categoryId) => {
    const addOn = get().selectedAddOns.find(a => a.categoryId === categoryId);
    return addOn?.tierId ?? null;
  },

  toggleVideoFormat: (formatId) => {
    const { selectedVideoFormats } = get();
    const isSelected = selectedVideoFormats.some(f => f.id === formatId);

    if (isSelected) {
      // Don't allow removing MP4 (always included)
      if (formatId === 'mp4') {
        return;
      }
      set({
        selectedVideoFormats: selectedVideoFormats.filter(f => f.id !== formatId),
      });
    } else {
      const format = videoFormatOptions.find(f => f.id === formatId);
      if (format) {
        set({
          selectedVideoFormats: [
            ...selectedVideoFormats,
            { id: formatId, price: format.price },
          ],
        });
      }
    }
    get().calculateTotals();
  },

  isVideoFormatSelected: (formatId) => {
    return get().selectedVideoFormats.some(f => f.id === formatId);
  },

  setAspectRatio: (ratioId) => {
    const option = aspectRatioOptions.find(a => a.id === ratioId);
    set({
      aspectRatio: ratioId,
      aspectRatioPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSourceFiles: (optionId) => {
    const option = sourceFileOptions.find(s => s.id === optionId);
    set({
      sourceFiles: optionId,
      sourceFilesPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setTimeline: (timelineId) => {
    const option = timelineOptions.find(t => t.id === timelineId);
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

  applyRecommendations: (animationType) => {
    const preset = recommendationPresets[animationType];
    if (!preset) return;

    // Duration
    const durationOption = durationOptions.find(d => d.id === preset.duration);

    // Style
    const styleOption = styleOptions.find(s => s.id === preset.style);

    // Complexity
    const complexityOption = complexityOptions.find(c => c.id === preset.complexity);

    // Sound
    const soundOption = soundOptions.find(s => s.id === preset.sound);

    // Aspect Ratios
    const aspectOption = aspectRatioOptions.find(a => a.id === preset.aspectRatios);

    // Video Formats - build based on preset
    const videoFormats: SelectedVideoFormat[] = preset.deliverables.map(formatId => {
      const format = videoFormatOptions.find(f => f.id === formatId);
      return { id: formatId, price: format?.price ?? 0 };
    });

    // Add-ons - start with default revisions
    const addOns: SelectedAddOn[] = [
      { categoryId: 'revisions', tierId: 'standard', price: 0 },
    ];

    // Add recommended add-ons from preset
    if (preset.addOns) {
      preset.addOns.forEach(addOnId => {
        // Parse the addOn id (e.g., 'storyboard-basic' => categoryId: 'storyboard', tierId: 'basic')
        const parts = addOnId.split('-');
        const categoryId = parts[0];
        const tierId = parts.slice(1).join('-') || parts[1];

        const category = addOnCategories.find(c => c.id === categoryId);
        const tier = category?.tiers.find(t => t.id === tierId);

        if (category && tier) {
          addOns.push({
            categoryId,
            tierId,
            price: tier.price,
          });
        }
      });
    }

    set({
      duration: preset.duration,
      durationPrice: durationOption?.price ?? null,
      style: preset.style,
      stylePrice: styleOption?.price ?? null,
      complexity: preset.complexity,
      complexityPrice: complexityOption?.price ?? 0,
      sound: preset.sound,
      soundPrice: soundOption?.price ?? 0,
      selectedVideoFormats: videoFormats,
      aspectRatio: preset.aspectRatios,
      aspectRatioPrice: aspectOption?.price ?? 0,
      selectedAddOns: addOns,
    });

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let subtotal = 0;
    let hasCustomQuote = false;

    // Duration
    if (state.durationPrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.durationPrice;
    }

    // Style
    if (state.stylePrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.stylePrice;
    }

    // Complexity
    subtotal += state.complexityPrice;

    // Sound
    subtotal += state.soundPrice;

    // Add-ons
    state.selectedAddOns.forEach(addOn => {
      subtotal += addOn.price;
    });

    // Video Formats
    state.selectedVideoFormats.forEach(format => {
      subtotal += format.price;
    });

    // Aspect Ratios
    subtotal += state.aspectRatioPrice;

    // Source Files
    subtotal += state.sourceFilesPrice;

    // Timeline multiplier
    const rushFee = Math.round(subtotal * (state.timelineMultiplier - 1));
    const total = Math.round(subtotal * state.timelineMultiplier);

    set({
      subtotal,
      rushFee,
      total,
      hasCustomQuote,
    });
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      animationType: null,
      duration: null,
      durationPrice: null,
      style: null,
      stylePrice: null,
      complexity: null,
      complexityPrice: 0,
      sound: null,
      soundPrice: 0,
      selectedAddOns: [
        { categoryId: 'revisions', tierId: 'standard', price: 0 },
      ],
      selectedVideoFormats: [
        { id: 'mp4', price: 0 },
      ],
      aspectRatio: 'single',
      aspectRatioPrice: 0,
      sourceFiles: 'final',
      sourceFilesPrice: 0,
      timeline: 'standard',
      timelineMultiplier: 1.0,
      subtotal: 0,
      rushFee: 0,
      total: 0,
      hasCustomQuote: false,
      customerInfo: initialCustomerInfo,
    });
    // Also clear from unified store
    useUnifiedQuoteStore.getState().clearServiceConfig('animation');
  },

  getCurrentConfig: (): AnimationConfig => {
    const state = get();
    return {
      animationType: state.animationType,
      duration: state.duration,
      durationPrice: state.durationPrice,
      style: state.style,
      stylePrice: state.stylePrice,
      complexity: state.complexity,
      complexityPrice: state.complexityPrice,
      sound: state.sound,
      soundPrice: state.soundPrice,
      selectedAddOns: state.selectedAddOns,
      selectedVideoFormats: state.selectedVideoFormats,
      aspectRatio: state.aspectRatio,
      aspectRatioPrice: state.aspectRatioPrice,
      sourceFiles: state.sourceFiles,
      sourceFilesPrice: state.sourceFilesPrice,
      timeline: state.timeline,
      timelineMultiplier: state.timelineMultiplier,
      subtotal: state.subtotal,
      rushFee: state.rushFee,
      total: state.total,
      hasCustomQuote: state.hasCustomQuote,
    };
  },

  saveToUnifiedQuote: () => {
    const config = get().getCurrentConfig();
    useUnifiedQuoteStore.getState().saveServiceConfig('animation', config);
  },

  loadFromUnifiedQuote: () => {
    const config = useUnifiedQuoteStore.getState().getServiceConfig<AnimationConfig>('animation');
    if (config) {
      set({
        animationType: config.animationType,
        duration: config.duration,
        durationPrice: config.durationPrice,
        style: config.style,
        stylePrice: config.stylePrice,
        complexity: config.complexity,
        complexityPrice: config.complexityPrice,
        sound: config.sound,
        soundPrice: config.soundPrice,
        selectedAddOns: config.selectedAddOns,
        selectedVideoFormats: config.selectedVideoFormats,
        aspectRatio: config.aspectRatio,
        aspectRatioPrice: config.aspectRatioPrice,
        sourceFiles: config.sourceFiles,
        sourceFilesPrice: config.sourceFilesPrice,
        timeline: config.timeline,
        timelineMultiplier: config.timelineMultiplier,
        subtotal: config.subtotal,
        rushFee: config.rushFee,
        total: config.total,
        hasCustomQuote: config.hasCustomQuote,
      });
      return true;
    }
    return false;
  },
}));
