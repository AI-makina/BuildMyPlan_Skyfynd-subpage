import { create } from 'zustand';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';
import {
  depthOptions,
  researchOptions,
  positioningOptions,
  messagingOptions,
  architectureOptions,
  purposeOptions,
  audienceOptions,
  workshopOptions,
  addOnServices,
  timelineOptions,
  recommendationPresets,
} from '@/data/brandStrategyBuilder';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime: true;
}

interface BrandStrategyBuilderState {
  // Step tracking
  currentStep: number;

  // Step 1: Brand Strategy Goal (info only)
  strategyGoal: string | null;

  // Step 2: Strategy Depth
  depth: string | null;
  depthPrice: number;

  // Step 3: Research & Discovery
  research: string | null;
  researchPrice: number;

  // Step 4: Positioning & Differentiation
  positioning: string | null;
  positioningPrice: number;

  // Step 5: Brand Messaging Framework
  messaging: string | null;
  messagingPrice: number;

  // Step 6: Brand Architecture
  architecture: string | null;
  architecturePrice: number;

  // Step 7: Purpose, Vision & Values
  purpose: string | null;
  purposePrice: number;

  // Step 8: Target Audience & Personas
  audience: string | null;
  audiencePrice: number;

  // Step 9: Workshops & Collaboration
  workshop: string | null;
  workshopPrice: number | null;

  // Step 10: Add-on Services
  selectedAddOns: SelectedAddOn[];

  // Step 11: Timeline
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated totals
  strategySubtotal: number;
  addOnsTotal: number;
  projectSubtotal: number;
  timelinePremium: number;
  totalInvestment: number;
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setStrategyGoal: (goalId: string) => void;
  setDepth: (depthId: string) => void;
  setResearch: (researchId: string) => void;
  setPositioning: (positioningId: string) => void;
  setMessaging: (messagingId: string) => void;
  setArchitecture: (architectureId: string) => void;
  setPurpose: (purposeId: string) => void;
  setAudience: (audienceId: string) => void;
  setWorkshop: (workshopId: string) => void;
  toggleAddOn: (addOnId: string) => void;
  setTimeline: (timelineId: string) => void;

  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;

  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const useBrandStrategyBuilderStore = create<BrandStrategyBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  strategyGoal: null,
  depth: null,
  depthPrice: 0,
  research: null,
  researchPrice: 0,
  positioning: null,
  positioningPrice: 0,
  messaging: null,
  messagingPrice: 0,
  architecture: null,
  architecturePrice: 0,
  purpose: null,
  purposePrice: 0,
  audience: null,
  audiencePrice: 0,
  workshop: null,
  workshopPrice: null,
  selectedAddOns: [],
  timeline: null,
  timelineMultiplier: 1,
  strategySubtotal: 0,
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

  setStrategyGoal: (goalId) => {
    set({ strategyGoal: goalId });
    get().applyRecommendations(goalId);
  },

  setDepth: (depthId) => {
    const option = depthOptions.find((d) => d.id === depthId);
    set({
      depth: depthId,
      depthPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setResearch: (researchId) => {
    const option = researchOptions.find((r) => r.id === researchId);
    set({
      research: researchId,
      researchPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPositioning: (positioningId) => {
    const option = positioningOptions.find((p) => p.id === positioningId);
    set({
      positioning: positioningId,
      positioningPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setMessaging: (messagingId) => {
    const option = messagingOptions.find((m) => m.id === messagingId);
    set({
      messaging: messagingId,
      messagingPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setArchitecture: (architectureId) => {
    const option = architectureOptions.find((a) => a.id === architectureId);
    set({
      architecture: architectureId,
      architecturePrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPurpose: (purposeId) => {
    const option = purposeOptions.find((p) => p.id === purposeId);
    set({
      purpose: purposeId,
      purposePrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setAudience: (audienceId) => {
    const option = audienceOptions.find((a) => a.id === audienceId);
    set({
      audience: audienceId,
      audiencePrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setWorkshop: (workshopId) => {
    const option = workshopOptions.find((w) => w.id === workshopId);
    set({
      workshop: workshopId,
      workshopPrice: option?.price ?? null,
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

    // Apply depth recommendation
    if (preset.depth) {
      const depthOpt = depthOptions.find((d) => d.id === preset.depth);
      if (depthOpt) {
        set({
          depth: preset.depth,
          depthPrice: depthOpt.price,
        });
      }
    }

    // Apply research recommendation
    if (preset.research) {
      const researchOpt = researchOptions.find((r) => r.id === preset.research);
      if (researchOpt) {
        set({
          research: preset.research,
          researchPrice: researchOpt.price,
        });
      }
    }

    // Apply positioning recommendation
    if (preset.positioning) {
      const positioningOpt = positioningOptions.find((p) => p.id === preset.positioning);
      if (positioningOpt) {
        set({
          positioning: preset.positioning,
          positioningPrice: positioningOpt.price,
        });
      }
    }

    // Apply messaging recommendation
    if (preset.messaging) {
      const messagingOpt = messagingOptions.find((m) => m.id === preset.messaging);
      if (messagingOpt) {
        set({
          messaging: preset.messaging,
          messagingPrice: messagingOpt.price,
        });
      }
    }

    // Apply architecture recommendation
    if (preset.architecture) {
      const architectureOpt = architectureOptions.find((a) => a.id === preset.architecture);
      if (architectureOpt) {
        set({
          architecture: preset.architecture,
          architecturePrice: architectureOpt.price,
        });
      }
    }

    // Apply purpose recommendation
    if (preset.purpose) {
      const purposeOpt = purposeOptions.find((p) => p.id === preset.purpose);
      if (purposeOpt) {
        set({
          purpose: preset.purpose,
          purposePrice: purposeOpt.price,
        });
      }
    }

    // Apply audience recommendation
    if (preset.audience) {
      const audienceOpt = audienceOptions.find((a) => a.id === preset.audience);
      if (audienceOpt) {
        set({
          audience: preset.audience,
          audiencePrice: audienceOpt.price,
        });
      }
    }

    // Apply workshop recommendation
    if (preset.workshop) {
      const workshopOpt = workshopOptions.find((w) => w.id === preset.workshop);
      if (workshopOpt) {
        set({
          workshop: preset.workshop,
          workshopPrice: workshopOpt.price,
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
    let strategySubtotal = 0;
    let addOnsTotal = 0;
    let hasCustomQuote = false;

    // Depth
    strategySubtotal += state.depthPrice;

    // Research
    strategySubtotal += state.researchPrice;

    // Positioning
    strategySubtotal += state.positioningPrice;

    // Messaging
    strategySubtotal += state.messagingPrice;

    // Architecture
    strategySubtotal += state.architecturePrice;

    // Purpose
    strategySubtotal += state.purposePrice;

    // Audience
    strategySubtotal += state.audiencePrice;

    // Workshop
    if (state.workshopPrice === null && state.workshop && state.workshop !== 'none') {
      hasCustomQuote = true;
    } else if (state.workshopPrice !== null) {
      strategySubtotal += state.workshopPrice;
    }

    // Add-ons
    state.selectedAddOns.forEach((addOn) => {
      addOnsTotal += addOn.price;
    });

    // Project subtotal
    const projectSubtotal = strategySubtotal + addOnsTotal;

    // Timeline multiplier
    const multiplier = state.timelineMultiplier;
    const timelinePremium = projectSubtotal * (multiplier - 1);
    const totalInvestment = projectSubtotal * multiplier;

    set({
      strategySubtotal,
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

    unifiedStore.saveServiceConfig('brand-strategy', {
      strategyGoal: state.strategyGoal,
      depth: state.depth,
      depthPrice: state.depthPrice,
      research: state.research,
      researchPrice: state.researchPrice,
      positioning: state.positioning,
      positioningPrice: state.positioningPrice,
      messaging: state.messaging,
      messagingPrice: state.messagingPrice,
      architecture: state.architecture,
      architecturePrice: state.architecturePrice,
      purpose: state.purpose,
      purposePrice: state.purposePrice,
      audience: state.audience,
      audiencePrice: state.audiencePrice,
      workshop: state.workshop,
      workshopPrice: state.workshopPrice,
      selectedAddOns: state.selectedAddOns,
      timeline: state.timeline,
      timelineMultiplier: state.timelineMultiplier,
      strategySubtotal: state.strategySubtotal,
      addOnsTotal: state.addOnsTotal,
      projectSubtotal: state.projectSubtotal,
      timelinePremium: state.timelinePremium,
      totalInvestment: state.totalInvestment,
      hasCustomQuote: state.hasCustomQuote,
    });
  },

  loadFromUnifiedQuote: () => {
    const unifiedStore = useUnifiedQuoteStore.getState();
    const config = unifiedStore.getServiceConfig('brand-strategy');
    if (config) {
      const strategyConfig = config as {
        strategyGoal: string | null;
        depth: string | null;
        depthPrice: number;
        research: string | null;
        researchPrice: number;
        positioning: string | null;
        positioningPrice: number;
        messaging: string | null;
        messagingPrice: number;
        architecture: string | null;
        architecturePrice: number;
        purpose: string | null;
        purposePrice: number;
        audience: string | null;
        audiencePrice: number;
        workshop: string | null;
        workshopPrice: number | null;
        selectedAddOns: SelectedAddOn[];
        timeline: string | null;
        timelineMultiplier: number;
        strategySubtotal: number;
        addOnsTotal: number;
        projectSubtotal: number;
        timelinePremium: number;
        totalInvestment: number;
        hasCustomQuote: boolean;
      };
      set({
        strategyGoal: strategyConfig.strategyGoal,
        depth: strategyConfig.depth,
        depthPrice: strategyConfig.depthPrice,
        research: strategyConfig.research,
        researchPrice: strategyConfig.researchPrice,
        positioning: strategyConfig.positioning,
        positioningPrice: strategyConfig.positioningPrice,
        messaging: strategyConfig.messaging,
        messagingPrice: strategyConfig.messagingPrice,
        architecture: strategyConfig.architecture,
        architecturePrice: strategyConfig.architecturePrice,
        purpose: strategyConfig.purpose,
        purposePrice: strategyConfig.purposePrice,
        audience: strategyConfig.audience,
        audiencePrice: strategyConfig.audiencePrice,
        workshop: strategyConfig.workshop,
        workshopPrice: strategyConfig.workshopPrice,
        selectedAddOns: strategyConfig.selectedAddOns,
        timeline: strategyConfig.timeline,
        timelineMultiplier: strategyConfig.timelineMultiplier,
        strategySubtotal: strategyConfig.strategySubtotal,
        addOnsTotal: strategyConfig.addOnsTotal,
        projectSubtotal: strategyConfig.projectSubtotal,
        timelinePremium: strategyConfig.timelinePremium,
        totalInvestment: strategyConfig.totalInvestment,
        hasCustomQuote: strategyConfig.hasCustomQuote,
      });
    }
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      strategyGoal: null,
      depth: null,
      depthPrice: 0,
      research: null,
      researchPrice: 0,
      positioning: null,
      positioningPrice: 0,
      messaging: null,
      messagingPrice: 0,
      architecture: null,
      architecturePrice: 0,
      purpose: null,
      purposePrice: 0,
      audience: null,
      audiencePrice: 0,
      workshop: null,
      workshopPrice: null,
      selectedAddOns: [],
      timeline: null,
      timelineMultiplier: 1,
      strategySubtotal: 0,
      addOnsTotal: 0,
      projectSubtotal: 0,
      timelinePremium: 0,
      totalInvestment: 0,
      hasCustomQuote: false,
    });
  },
}));
