import { create } from 'zustand';
import {
  recommendationPresets,
  quantityOptions,
  styleOptions,
  creationMethodOptions,
  editingOptions,
  backgroundOptions,
  overlayOptions,
  sizeOptions,
  revisionOptions,
  formatOptions,
  sourceOptions,
  licenseOptions,
  timelineOptions,
} from '@/data/imageBuilder';
import { useUnifiedQuoteStore, ImageConfig } from '@/hooks/useUnifiedQuoteStore';

export interface CustomerInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
  notes: string;
}

interface ImageBuilderState {
  // Current step (1-8, 9 = summary)
  currentStep: number;

  // Step 1: Image Type (info only)
  imageType: string | null;

  // Step 2: Quantity
  quantity: string | null;
  quantityPrice: number | null;

  // Step 3: Style
  style: string | null;
  stylePrice: number | null;

  // Step 4: Creation Method
  creation: string | null;
  creationPrice: number;

  // Step 5: Editing Level
  editing: string | null;
  editingPrice: number;

  // Step 6: Add-ons
  background: string;
  backgroundPrice: number;
  overlay: string;
  overlayPrice: number;
  sizes: string;
  sizesPrice: number;
  revisions: string;
  revisionsPrice: number;

  // Step 7: Deliverables
  formats: string;
  formatsPrice: number;
  source: string;
  sourcePrice: number;
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

  setImageType: (type: string) => void;
  setQuantity: (quantityId: string) => void;
  setStyle: (styleId: string) => void;
  setCreation: (creationId: string) => void;
  setEditing: (editingId: string) => void;

  setBackground: (backgroundId: string) => void;
  setOverlay: (overlayId: string) => void;
  setSizes: (sizesId: string) => void;
  setRevisions: (revisionsId: string) => void;

  setFormats: (formatsId: string) => void;
  setSource: (sourceId: string) => void;
  setLicense: (licenseId: string) => void;

  setTimeline: (timelineId: string) => void;
  setCustomerInfo: (info: Partial<CustomerInfo>) => void;

  applyRecommendations: (imageType: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;

  // Unified quote store integration
  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => boolean;
  getCurrentConfig: () => ImageConfig;
}

const initialCustomerInfo: CustomerInfo = {
  name: '',
  email: '',
  company: '',
  phone: '',
  notes: '',
};

export const useImageBuilderStore = create<ImageBuilderState>((set, get) => ({
  currentStep: 1,
  imageType: null,
  quantity: null,
  quantityPrice: null,
  style: null,
  stylePrice: null,
  creation: null,
  creationPrice: 0,
  editing: null,
  editingPrice: 0,
  background: 'natural',
  backgroundPrice: 0,
  overlay: 'none',
  overlayPrice: 0,
  sizes: 'single',
  sizesPrice: 0,
  revisions: 'standard',
  revisionsPrice: 0,
  formats: 'web',
  formatsPrice: 0,
  source: 'final',
  sourcePrice: 0,
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

  setImageType: (type) => {
    set({ imageType: type });
    get().applyRecommendations(type);
  },

  setQuantity: (quantityId) => {
    const option = quantityOptions.find(q => q.id === quantityId);
    set({
      quantity: quantityId,
      quantityPrice: option?.price ?? null,
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

  setCreation: (creationId) => {
    const option = creationMethodOptions.find(c => c.id === creationId);
    set({
      creation: creationId,
      creationPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setEditing: (editingId) => {
    const option = editingOptions.find(e => e.id === editingId);
    set({
      editing: editingId,
      editingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setBackground: (backgroundId) => {
    const option = backgroundOptions.find(b => b.id === backgroundId);
    set({
      background: backgroundId,
      backgroundPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setOverlay: (overlayId) => {
    const option = overlayOptions.find(o => o.id === overlayId);
    set({
      overlay: overlayId,
      overlayPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setSizes: (sizesId) => {
    const option = sizeOptions.find(s => s.id === sizesId);
    set({
      sizes: sizesId,
      sizesPrice: option?.price ?? 0,
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

  setSource: (sourceId) => {
    const option = sourceOptions.find(s => s.id === sourceId);
    set({
      source: sourceId,
      sourcePrice: option?.price ?? 0,
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

  applyRecommendations: (imageType) => {
    const preset = recommendationPresets[imageType];
    if (!preset) return;

    // Quantity
    const quantityOption = quantityOptions.find(q => q.id === preset.quantity);

    // Style
    const styleOption = styleOptions.find(s => s.id === preset.style);

    // Creation
    const creationOption = creationMethodOptions.find(c => c.id === preset.creation);

    // Editing
    const editingOption = editingOptions.find(e => e.id === preset.editing);

    // Background
    const backgroundOption = backgroundOptions.find(b => b.id === preset.background);

    // Overlay
    const overlayOption = overlayOptions.find(o => o.id === preset.overlay);

    // Sizes
    const sizesOption = sizeOptions.find(s => s.id === preset.sizes);

    // Formats
    const formatsOption = formatOptions.find(f => f.id === (preset.formats || 'web'));

    // Source
    const sourceOption = sourceOptions.find(s => s.id === (preset.source || 'final'));

    set({
      quantity: preset.quantity,
      quantityPrice: quantityOption?.price ?? null,
      style: preset.style,
      stylePrice: styleOption?.price ?? null,
      creation: preset.creation,
      creationPrice: creationOption?.price ?? 0,
      editing: preset.editing,
      editingPrice: editingOption?.price ?? 0,
      background: preset.background,
      backgroundPrice: backgroundOption?.price ?? 0,
      overlay: preset.overlay,
      overlayPrice: overlayOption?.price ?? 0,
      sizes: preset.sizes,
      sizesPrice: sizesOption?.price ?? 0,
      formats: preset.formats || 'web',
      formatsPrice: formatsOption?.price ?? 0,
      source: preset.source || 'final',
      sourcePrice: sourceOption?.price ?? 0,
    });

    get().calculateTotals();
  },

  calculateTotals: () => {
    const state = get();
    let subtotal = 0;
    let hasCustomQuote = false;

    // Quantity
    if (state.quantityPrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.quantityPrice;
    }

    // Style
    if (state.stylePrice === null) {
      hasCustomQuote = true;
    } else {
      subtotal += state.stylePrice;
    }

    // Creation Method
    subtotal += state.creationPrice;

    // Editing Level
    subtotal += state.editingPrice;

    // Add-ons
    subtotal += state.backgroundPrice;
    subtotal += state.overlayPrice;
    subtotal += state.sizesPrice;
    subtotal += state.revisionsPrice;

    // Deliverables
    subtotal += state.formatsPrice;
    subtotal += state.sourcePrice;
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
      imageType: null,
      quantity: null,
      quantityPrice: null,
      style: null,
      stylePrice: null,
      creation: null,
      creationPrice: 0,
      editing: null,
      editingPrice: 0,
      background: 'natural',
      backgroundPrice: 0,
      overlay: 'none',
      overlayPrice: 0,
      sizes: 'single',
      sizesPrice: 0,
      revisions: 'standard',
      revisionsPrice: 0,
      formats: 'web',
      formatsPrice: 0,
      source: 'final',
      sourcePrice: 0,
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
    useUnifiedQuoteStore.getState().clearServiceConfig('image');
  },

  getCurrentConfig: (): ImageConfig => {
    const state = get();
    return {
      imageType: state.imageType,
      quantity: state.quantity,
      quantityPrice: state.quantityPrice,
      style: state.style,
      stylePrice: state.stylePrice,
      creation: state.creation,
      creationPrice: state.creationPrice,
      editing: state.editing,
      editingPrice: state.editingPrice,
      background: state.background,
      backgroundPrice: state.backgroundPrice,
      overlay: state.overlay,
      overlayPrice: state.overlayPrice,
      sizes: state.sizes,
      sizesPrice: state.sizesPrice,
      revisions: state.revisions,
      revisionsPrice: state.revisionsPrice,
      formats: state.formats,
      formatsPrice: state.formatsPrice,
      source: state.source,
      sourcePrice: state.sourcePrice,
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
    useUnifiedQuoteStore.getState().saveServiceConfig('image', config);
  },

  loadFromUnifiedQuote: () => {
    const config = useUnifiedQuoteStore.getState().getServiceConfig<ImageConfig>('image');
    if (config) {
      set({
        imageType: config.imageType,
        quantity: config.quantity,
        quantityPrice: config.quantityPrice,
        style: config.style,
        stylePrice: config.stylePrice,
        creation: config.creation,
        creationPrice: config.creationPrice,
        editing: config.editing,
        editingPrice: config.editingPrice,
        background: config.background,
        backgroundPrice: config.backgroundPrice,
        overlay: config.overlay,
        overlayPrice: config.overlayPrice,
        sizes: config.sizes,
        sizesPrice: config.sizesPrice,
        revisions: config.revisions,
        revisionsPrice: config.revisionsPrice,
        formats: config.formats,
        formatsPrice: config.formatsPrice,
        source: config.source,
        sourcePrice: config.sourcePrice,
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
