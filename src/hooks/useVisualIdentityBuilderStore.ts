import { create } from 'zustand';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';
import {
  logoOptions,
  colorOptions,
  typographyOptions,
  photographyOptions,
  iconOptions,
  patternOptions,
  illustrationOptions,
  motionOptions,
  guidelinesOptions,
  addOnServices,
  timelineOptions,
  recommendationPresets,
} from '@/data/visualIdentityBuilder';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime: true;
}

interface VisualIdentityBuilderState {
  // Step tracking
  currentStep: number;

  // Step 1: Visual Identity Goal (info only)
  visualIdentityGoal: string | null;

  // Step 2: Logo Design
  logo: string | null;
  logoPrice: number;

  // Step 3: Color Palette
  colors: string | null;
  colorsPrice: number;

  // Step 4: Typography
  typography: string | null;
  typographyPrice: number;

  // Step 5: Photography & Imagery Direction
  photography: string | null;
  photographyPrice: number;

  // Step 6: Iconography
  icons: string | null;
  iconsPrice: number;

  // Step 7: Patterns & Textures
  patterns: string | null;
  patternsPrice: number;

  // Step 8: Illustration Style
  illustration: string | null;
  illustrationPrice: number;

  // Step 9: Motion & Animation Guidelines
  motion: string | null;
  motionPrice: number;

  // Step 10: Brand Guidelines
  guidelines: string | null;
  guidelinesPrice: number;

  // Step 11: Add-on Services
  selectedAddOns: SelectedAddOn[];

  // Step 12: Timeline
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated totals
  coreIdentitySubtotal: number;
  visualElementsSubtotal: number;
  documentationSubtotal: number;
  addOnsTotal: number;
  projectSubtotal: number;
  timelinePremium: number;
  totalInvestment: number;
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setVisualIdentityGoal: (goalId: string) => void;
  setLogo: (logoId: string) => void;
  setColors: (colorsId: string) => void;
  setTypography: (typographyId: string) => void;
  setPhotography: (photographyId: string) => void;
  setIcons: (iconsId: string) => void;
  setPatterns: (patternsId: string) => void;
  setIllustration: (illustrationId: string) => void;
  setMotion: (motionId: string) => void;
  setGuidelines: (guidelinesId: string) => void;
  toggleAddOn: (addOnId: string) => void;
  setTimeline: (timelineId: string) => void;

  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;

  saveToUnifiedQuote: () => void;
  loadFromUnifiedQuote: () => void;
  resetBuilder: () => void;
}

export const useVisualIdentityBuilderStore = create<VisualIdentityBuilderState>((set, get) => ({
  // Initial state
  currentStep: 1,
  visualIdentityGoal: null,
  logo: null,
  logoPrice: 0,
  colors: null,
  colorsPrice: 0,
  typography: null,
  typographyPrice: 0,
  photography: null,
  photographyPrice: 0,
  icons: null,
  iconsPrice: 0,
  patterns: null,
  patternsPrice: 0,
  illustration: null,
  illustrationPrice: 0,
  motion: null,
  motionPrice: 0,
  guidelines: null,
  guidelinesPrice: 0,
  selectedAddOns: [],
  timeline: null,
  timelineMultiplier: 1,
  coreIdentitySubtotal: 0,
  visualElementsSubtotal: 0,
  documentationSubtotal: 0,
  addOnsTotal: 0,
  projectSubtotal: 0,
  timelinePremium: 0,
  totalInvestment: 0,
  hasCustomQuote: false,

  setStep: (step) => set({ currentStep: step }),

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < 13) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setVisualIdentityGoal: (goalId) => {
    set({ visualIdentityGoal: goalId });
    get().applyRecommendations(goalId);
  },

  setLogo: (logoId) => {
    const option = logoOptions.find((l) => l.id === logoId);
    set({
      logo: logoId,
      logoPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setColors: (colorsId) => {
    const option = colorOptions.find((c) => c.id === colorsId);
    set({
      colors: colorsId,
      colorsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setTypography: (typographyId) => {
    const option = typographyOptions.find((t) => t.id === typographyId);
    set({
      typography: typographyId,
      typographyPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPhotography: (photographyId) => {
    const option = photographyOptions.find((p) => p.id === photographyId);
    set({
      photography: photographyId,
      photographyPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setIcons: (iconsId) => {
    const option = iconOptions.find((i) => i.id === iconsId);
    set({
      icons: iconsId,
      iconsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setPatterns: (patternsId) => {
    const option = patternOptions.find((p) => p.id === patternsId);
    set({
      patterns: patternsId,
      patternsPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setIllustration: (illustrationId) => {
    const option = illustrationOptions.find((i) => i.id === illustrationId);
    set({
      illustration: illustrationId,
      illustrationPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setMotion: (motionId) => {
    const option = motionOptions.find((m) => m.id === motionId);
    set({
      motion: motionId,
      motionPrice: option?.price ?? 0,
    });
    get().calculateTotals();
  },

  setGuidelines: (guidelinesId) => {
    const option = guidelinesOptions.find((g) => g.id === guidelinesId);
    set({
      guidelines: guidelinesId,
      guidelinesPrice: option?.price ?? 0,
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

    // Apply logo recommendation
    if (preset.logo) {
      const logoOpt = logoOptions.find((l) => l.id === preset.logo);
      if (logoOpt) {
        set({
          logo: preset.logo,
          logoPrice: logoOpt.price,
        });
      }
    }

    // Apply colors recommendation
    if (preset.colors) {
      const colorsOpt = colorOptions.find((c) => c.id === preset.colors);
      if (colorsOpt) {
        set({
          colors: preset.colors,
          colorsPrice: colorsOpt.price,
        });
      }
    }

    // Apply typography recommendation
    if (preset.typography) {
      const typographyOpt = typographyOptions.find((t) => t.id === preset.typography);
      if (typographyOpt) {
        set({
          typography: preset.typography,
          typographyPrice: typographyOpt.price,
        });
      }
    }

    // Apply photography recommendation
    if (preset.photography) {
      const photographyOpt = photographyOptions.find((p) => p.id === preset.photography);
      if (photographyOpt) {
        set({
          photography: preset.photography,
          photographyPrice: photographyOpt.price,
        });
      }
    }

    // Apply icons recommendation
    if (preset.icons) {
      const iconsOpt = iconOptions.find((i) => i.id === preset.icons);
      if (iconsOpt) {
        set({
          icons: preset.icons,
          iconsPrice: iconsOpt.price,
        });
      }
    }

    // Apply patterns recommendation
    if (preset.patterns) {
      const patternsOpt = patternOptions.find((p) => p.id === preset.patterns);
      if (patternsOpt) {
        set({
          patterns: preset.patterns,
          patternsPrice: patternsOpt.price,
        });
      }
    }

    // Apply illustration recommendation
    if (preset.illustration) {
      const illustrationOpt = illustrationOptions.find((i) => i.id === preset.illustration);
      if (illustrationOpt) {
        set({
          illustration: preset.illustration,
          illustrationPrice: illustrationOpt.price,
        });
      }
    }

    // Apply motion recommendation
    if (preset.motion) {
      const motionOpt = motionOptions.find((m) => m.id === preset.motion);
      if (motionOpt) {
        set({
          motion: preset.motion,
          motionPrice: motionOpt.price,
        });
      }
    }

    // Apply guidelines recommendation
    if (preset.guidelines) {
      const guidelinesOpt = guidelinesOptions.find((g) => g.id === preset.guidelines);
      if (guidelinesOpt) {
        set({
          guidelines: preset.guidelines,
          guidelinesPrice: guidelinesOpt.price,
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
    let coreIdentitySubtotal = 0;
    let visualElementsSubtotal = 0;
    let documentationSubtotal = 0;
    let addOnsTotal = 0;
    let hasCustomQuote = false;

    // Core Identity: Logo, Colors, Typography, Photography
    coreIdentitySubtotal += state.logoPrice;
    coreIdentitySubtotal += state.colorsPrice;
    coreIdentitySubtotal += state.typographyPrice;
    coreIdentitySubtotal += state.photographyPrice;

    // Check for custom quote items (startsAt items)
    const logoOpt = logoOptions.find((l) => l.id === state.logo);
    const colorOpt = colorOptions.find((c) => c.id === state.colors);
    const typographyOpt = typographyOptions.find((t) => t.id === state.typography);
    const photographyOpt = photographyOptions.find((p) => p.id === state.photography);
    const iconsOpt = iconOptions.find((i) => i.id === state.icons);
    const patternsOpt = patternOptions.find((p) => p.id === state.patterns);
    const illustrationOpt = illustrationOptions.find((i) => i.id === state.illustration);
    const motionOpt = motionOptions.find((m) => m.id === state.motion);
    const guidelinesOpt = guidelinesOptions.find((g) => g.id === state.guidelines);

    if (logoOpt?.startsAt || colorOpt?.startsAt || typographyOpt?.startsAt ||
        photographyOpt?.startsAt || iconsOpt?.startsAt || patternsOpt?.startsAt ||
        illustrationOpt?.startsAt || motionOpt?.startsAt || guidelinesOpt?.startsAt) {
      hasCustomQuote = true;
    }

    // Visual Elements: Icons, Patterns, Illustration, Motion
    visualElementsSubtotal += state.iconsPrice;
    visualElementsSubtotal += state.patternsPrice;
    visualElementsSubtotal += state.illustrationPrice;
    visualElementsSubtotal += state.motionPrice;

    // Documentation: Guidelines
    documentationSubtotal += state.guidelinesPrice;

    // Add-ons
    state.selectedAddOns.forEach((addOn) => {
      addOnsTotal += addOn.price;
    });

    // Project subtotal
    const projectSubtotal = coreIdentitySubtotal + visualElementsSubtotal + documentationSubtotal + addOnsTotal;

    // Timeline multiplier
    const multiplier = state.timelineMultiplier;
    const timelinePremium = projectSubtotal * (multiplier - 1);
    const totalInvestment = projectSubtotal * multiplier;

    set({
      coreIdentitySubtotal,
      visualElementsSubtotal,
      documentationSubtotal,
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

    unifiedStore.saveServiceConfig('visual-identity', {
      visualIdentityGoal: state.visualIdentityGoal,
      logo: state.logo,
      logoPrice: state.logoPrice,
      colors: state.colors,
      colorsPrice: state.colorsPrice,
      typography: state.typography,
      typographyPrice: state.typographyPrice,
      photography: state.photography,
      photographyPrice: state.photographyPrice,
      icons: state.icons,
      iconsPrice: state.iconsPrice,
      patterns: state.patterns,
      patternsPrice: state.patternsPrice,
      illustration: state.illustration,
      illustrationPrice: state.illustrationPrice,
      motion: state.motion,
      motionPrice: state.motionPrice,
      guidelines: state.guidelines,
      guidelinesPrice: state.guidelinesPrice,
      selectedAddOns: state.selectedAddOns,
      timeline: state.timeline,
      timelineMultiplier: state.timelineMultiplier,
      coreIdentitySubtotal: state.coreIdentitySubtotal,
      visualElementsSubtotal: state.visualElementsSubtotal,
      documentationSubtotal: state.documentationSubtotal,
      addOnsTotal: state.addOnsTotal,
      projectSubtotal: state.projectSubtotal,
      timelinePremium: state.timelinePremium,
      totalInvestment: state.totalInvestment,
      hasCustomQuote: state.hasCustomQuote,
    });
  },

  loadFromUnifiedQuote: () => {
    const unifiedStore = useUnifiedQuoteStore.getState();
    const config = unifiedStore.getServiceConfig('visual-identity');
    if (config) {
      const identityConfig = config as {
        visualIdentityGoal: string | null;
        logo: string | null;
        logoPrice: number;
        colors: string | null;
        colorsPrice: number;
        typography: string | null;
        typographyPrice: number;
        photography: string | null;
        photographyPrice: number;
        icons: string | null;
        iconsPrice: number;
        patterns: string | null;
        patternsPrice: number;
        illustration: string | null;
        illustrationPrice: number;
        motion: string | null;
        motionPrice: number;
        guidelines: string | null;
        guidelinesPrice: number;
        selectedAddOns: SelectedAddOn[];
        timeline: string | null;
        timelineMultiplier: number;
        coreIdentitySubtotal: number;
        visualElementsSubtotal: number;
        documentationSubtotal: number;
        addOnsTotal: number;
        projectSubtotal: number;
        timelinePremium: number;
        totalInvestment: number;
        hasCustomQuote: boolean;
      };
      set({
        visualIdentityGoal: identityConfig.visualIdentityGoal,
        logo: identityConfig.logo,
        logoPrice: identityConfig.logoPrice,
        colors: identityConfig.colors,
        colorsPrice: identityConfig.colorsPrice,
        typography: identityConfig.typography,
        typographyPrice: identityConfig.typographyPrice,
        photography: identityConfig.photography,
        photographyPrice: identityConfig.photographyPrice,
        icons: identityConfig.icons,
        iconsPrice: identityConfig.iconsPrice,
        patterns: identityConfig.patterns,
        patternsPrice: identityConfig.patternsPrice,
        illustration: identityConfig.illustration,
        illustrationPrice: identityConfig.illustrationPrice,
        motion: identityConfig.motion,
        motionPrice: identityConfig.motionPrice,
        guidelines: identityConfig.guidelines,
        guidelinesPrice: identityConfig.guidelinesPrice,
        selectedAddOns: identityConfig.selectedAddOns,
        timeline: identityConfig.timeline,
        timelineMultiplier: identityConfig.timelineMultiplier,
        coreIdentitySubtotal: identityConfig.coreIdentitySubtotal,
        visualElementsSubtotal: identityConfig.visualElementsSubtotal,
        documentationSubtotal: identityConfig.documentationSubtotal,
        addOnsTotal: identityConfig.addOnsTotal,
        projectSubtotal: identityConfig.projectSubtotal,
        timelinePremium: identityConfig.timelinePremium,
        totalInvestment: identityConfig.totalInvestment,
        hasCustomQuote: identityConfig.hasCustomQuote,
      });
    }
  },

  resetBuilder: () => {
    set({
      currentStep: 1,
      visualIdentityGoal: null,
      logo: null,
      logoPrice: 0,
      colors: null,
      colorsPrice: 0,
      typography: null,
      typographyPrice: 0,
      photography: null,
      photographyPrice: 0,
      icons: null,
      iconsPrice: 0,
      patterns: null,
      patternsPrice: 0,
      illustration: null,
      illustrationPrice: 0,
      motion: null,
      motionPrice: 0,
      guidelines: null,
      guidelinesPrice: 0,
      selectedAddOns: [],
      timeline: null,
      timelineMultiplier: 1,
      coreIdentitySubtotal: 0,
      visualElementsSubtotal: 0,
      documentationSubtotal: 0,
      addOnsTotal: 0,
      projectSubtotal: 0,
      timelinePremium: 0,
      totalInvestment: 0,
      hasCustomQuote: false,
    });
  },
}));
