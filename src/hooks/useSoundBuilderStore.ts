import { create } from 'zustand';
import {
  recommendationPresets,
  durationOptions,
  styleOptions,
  complexityOptions,
  quantityOptions,
  voiceoverOptions,
  lyricsOptions,
  soundDesignAddOns,
  revisionOptions,
  formatOptions,
  projectFileOptions,
  licenseOptions,
  timelineOptions,
} from '@/data/soundBuilder';
import { useUnifiedQuoteStore, SoundConfig } from '@/hooks/useUnifiedQuoteStore';

export interface CustomerInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
}

interface SoundBuilderState {
  // Current step (1-8, 9 = summary)
  currentStep: number;

  // Step 1: Sound Type (info only)
  soundType: string | null;

  // Step 2: Duration
  duration: string | null;
  durationPrice: number | null;

  // Step 3: Style
  style: string | null;
  stylePrice: number | null;

  // Step 4: Complexity
  complexity: string | null;
  complexityPrice: number;

  // Step 5: Quantity
  quantity: string | null;
  quantityPrice: number | null;

  // Step 6: Add-ons (Voiceover, Lyrics, Sound Design, Revisions)
  voiceover: string;
  voiceoverPrice: number;
  lyrics: string;
  lyricsPrice: number;
  selectedSoundDesignAddOns: string[];
  soundDesignAddOnsPrice: number;
  revisions: string;
  revisionsPrice: number;

  // Step 7: Deliverables (Formats, Project Files, License)
  formats: string;
  formatsPrice: number;
  projectFiles: string;
  projectFilesPrice: number;
  license: string;
  licensePrice: number;

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

  setSoundType: (type: string) => void;
  setDuration: (durationId: string) => void;
  setStyle: (styleId: string) => void;
  setComplexity: (complexityId: string) => void;
  setQuantity: (quantityId: string) => void;

  setVoiceover: (voiceoverId: string) => void;
  setLyrics: (lyricsId: string) => void;
  toggleSoundDesignAddOn: (addOnId: string) => void;
  setRevisions: (revisionsId: string) => void;

  setFormats: (formatsId: string) => void;
  setProjectFiles: (projectFilesId: string) => void;
  setLicense: (licenseId: string) => void;

  setTimeline: (timelineId: string) => void;
  setCustomerInfo: (info: Partial<CustomerInfo>) => void;

  applyRecommendations: (soundType: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;

  // Unified quote store integration
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => boolean;
  getCurrentConfig: () => SoundConfig;
}

const initialCustomerInfo: CustomerInfo = {
  name: '',
  email: '',
  company: '',
  phone: '',
  notes: '',
};

export const useSoundBuilderStore = create<SoundBuilderState>((set, get) => ({
  currentStep: 1,
  soundType: null,
  duration: null,
  durationPrice: null,
  style: null,
  stylePrice: null,
  complexity: null,
  complexityPrice: 0,
  quantity: null,
  quantityPrice: null,
  voiceover: 'none',
  voiceoverPrice: 0,
  lyrics: 'none',
  lyricsPrice: 0,
  selectedSoundDesignAddOns: [],
  soundDesignAddOnsPrice: 0,
  revisions: 'standard',
  revisionsPrice: 0,
  formats: 'standard',
  formatsPrice: 0,
  projectFiles: 'final',
  projectFilesPrice: 0,
  license: 'standard',
  licensePrice: 0,
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

  setSoundType: (type) => {
    set({ soundType: type });
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

  setQuantity: (quantityId) => {
    const option = quantityOptions.find(q => q.id === quantityId);
    set({
      quantity: quantityId,
      quantityPrice: option?.price ?? null,
    });
    get().calculateTotals();
  },

  setVoiceover: (voiceoverId) => {
    const option = voiceoverOptions.find(v => v.id === voiceoverId);
    set({
      voiceover: voiceoverId,
      voiceoverPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setLyrics: (lyricsId) => {
    const option = lyricsOptions.find(l => l.id === lyricsId);
    set({
      lyrics: lyricsId,
      lyricsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  toggleSoundDesignAddOn: (addOnId) => {
    const { selectedSoundDesignAddOns } = get();
    let newAddOns: string[];

    if (selectedSoundDesignAddOns.includes(addOnId)) {
      newAddOns = selectedSoundDesignAddOns.filter(id => id !== addOnId);
    } else {
      newAddOns = [...selectedSoundDesignAddOns, addOnId];
    }

    // Calculate total price for selected add-ons
    const totalPrice = newAddOns.reduce((sum, id) => {
      const addOn = soundDesignAddOns.find(a => a.id === id);
      return sum + (addOn?.price ?? 0);
    }, 0);

    set({
      selectedSoundDesignAddOns: newAddOns,
      soundDesignAddOnsPrice: totalPrice,
    });
    get().calculateTotals();
  },

  setRevisions: (revisionsId) => {
    const option = revisionOptions.find(r => r.id === revisionsId);
    set({
      revisions: revisionsId,
      revisionsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setFormats: (formatsId) => {
    const option = formatOptions.find(f => f.id === formatsId);
    set({
      formats: formatsId,
      formatsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setProjectFiles: (projectFilesId) => {
    const option = projectFileOptions.find(p => p.id === projectFilesId);
    set({
      projectFiles: projectFilesId,
      projectFilesPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setLicense: (licenseId) => {
    const option = licenseOptions.find(l => l.id === licenseId);
    set({
      license: licenseId,
      licensePrice: option?.price ?? 0,
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

  applyRecommendations: (soundType) => {
    const preset = recommendationPresets[soundType];
    if (!preset) return;

    // Duration
    const durationOption = durationOptions.find(d => d.id === preset.duration);

    // Style
    const styleOption = styleOptions.find(s => s.id === preset.style);

    // Complexity
    const complexityOption = complexityOptions.find(c => c.id === preset.complexity);

    // Quantity
    const quantityOption = quantityOptions.find(q => q.id === preset.quantity);

    // Voiceover
    const voiceoverOption = voiceoverOptions.find(v => v.id === preset.voiceover);

    // Lyrics
    const lyricsOption = lyricsOptions.find(l => l.id === preset.lyrics);

    // Formats
    const formatsOption = formatOptions.find(f => f.id === preset.formats);

    // Sound Design Add-ons
    const recommendedAddOns = preset.addOns || [];
    const addOnsPrice = recommendedAddOns.reduce((sum, id) => {
      const addOn = soundDesignAddOns.find(a => a.id === id);
      return sum + (addOn?.price ?? 0);
    }, 0);

    set({
      duration: preset.duration,
      durationPrice: durationOption?.price ?? null,
      style: preset.style,
      stylePrice: styleOption?.price ?? null,
      complexity: preset.complexity,
      complexityPrice: complexityOption?.price ?? 0,
      quantity: preset.quantity,
      quantityPrice: quantityOption?.price ?? null,
      voiceover: preset.voiceover,
      voiceoverPrice: voiceoverOption?.price ?? 0,
      lyrics: preset.lyrics,
      lyricsPrice: lyricsOption?.price ?? 0,
      selectedSoundDesignAddOns: recommendedAddOns,
      soundDesignAddOnsPrice: addOnsPrice,
      formats: preset.formats,
      formatsPrice: formatsOption?.price ?? 0,
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

    // Quantity
    if (state.quantityPrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.quantityPrice;
    }

    // Add-ons
    subtotal += state.voiceoverPrice;
    subtotal += state.lyricsPrice;
    subtotal += state.soundDesignAddOnsPrice;
    subtotal += state.revisionsPrice;

    // Deliverables
    subtotal += state.formatsPrice;
    subtotal += state.projectFilesPrice;
    subtotal += state.licensePrice;

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
      soundType: null,
      duration: null,
      durationPrice: null,
      style: null,
      stylePrice: null,
      complexity: null,
      complexityPrice: 0,
      quantity: null,
      quantityPrice: null,
      voiceover: 'none',
      voiceoverPrice: 0,
      lyrics: 'none',
      lyricsPrice: 0,
      selectedSoundDesignAddOns: [],
      soundDesignAddOnsPrice: 0,
      revisions: 'standard',
      revisionsPrice: 0,
      formats: 'standard',
      formatsPrice: 0,
      projectFiles: 'final',
      projectFilesPrice: 0,
      license: 'standard',
      licensePrice: 0,
      timeline: 'standard',
      timelineMultiplier: 1.0,
      subtotal: 0,
      rushFee: 0,
      total: 0,
      hasCustomQuote: false,
      customerInfo: initialCustomerInfo,
    });
    // Also clear from unified store
    useUnifiedQuoteStore.getState().clearServiceConfig('sound');
  },

  getCurrentConfig: (): SoundConfig => {
    const state = get();
    return {
      soundType: state.soundType,
      duration: state.duration,
      durationPrice: state.durationPrice,
      style: state.style,
      stylePrice: state.stylePrice,
      complexity: state.complexity,
      complexityPrice: state.complexityPrice,
      quantity: state.quantity,
      quantityPrice: state.quantityPrice,
      voiceover: state.voiceover,
      voiceoverPrice: state.voiceoverPrice,
      lyrics: state.lyrics,
      lyricsPrice: state.lyricsPrice,
      selectedSoundDesignAddOns: state.selectedSoundDesignAddOns,
      soundDesignAddOnsPrice: state.soundDesignAddOnsPrice,
      revisions: state.revisions,
      revisionsPrice: state.revisionsPrice,
      formats: state.formats,
      formatsPrice: state.formatsPrice,
      projectFiles: state.projectFiles,
      projectFilesPrice: state.projectFilesPrice,
      license: state.license,
      licensePrice: state.licensePrice,
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
    useUnifiedQuoteStore.getState().saveServiceConfig('sound', config);
  },

  loadFromUnifiedQuote: () => {
    const config = useUnifiedQuoteStore.getState().getServiceConfig<SoundConfig>('sound');
    if (config) {
      set({
        soundType: config.soundType,
        duration: config.duration,
        durationPrice: config.durationPrice,
        style: config.style,
        stylePrice: config.stylePrice,
        complexity: config.complexity,
        complexityPrice: config.complexityPrice,
        quantity: config.quantity,
        quantityPrice: config.quantityPrice,
        voiceover: config.voiceover,
        voiceoverPrice: config.voiceoverPrice,
        lyrics: config.lyrics,
        lyricsPrice: config.lyricsPrice,
        selectedSoundDesignAddOns: config.selectedSoundDesignAddOns,
        soundDesignAddOnsPrice: config.soundDesignAddOnsPrice,
        revisions: config.revisions,
        revisionsPrice: config.revisionsPrice,
        formats: config.formats,
        formatsPrice: config.formatsPrice,
        projectFiles: config.projectFiles,
        projectFilesPrice: config.projectFilesPrice,
        license: config.license,
        licensePrice: config.licensePrice,
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
