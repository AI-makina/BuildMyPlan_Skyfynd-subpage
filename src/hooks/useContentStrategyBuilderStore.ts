import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  depthOptions,
  auditOptions,
  audienceOptions,
  channelOptions,
  editorialOptions,
  seoOptions,
  governanceOptions,
  measurementOptions,
  addOnServices,
  timelineOptions,
  recommendationPresets,
} from '@/data/contentStrategyBuilder';
import { useUnifiedQuoteStore } from './useUnifiedQuoteStore';

interface SelectedAddOn {
  id: string;
  price: number;
  oneTime: true;
}

interface ContentStrategyBuilderState {
  // Current step
  currentStep: number;

  // Step 1: Content Strategy Goal (info only)
  contentGoal: string | null;

  // Step 2: Strategy Depth
  depth: string | null;
  depthPrice: number;

  // Step 3: Content Audit
  audit: string | null;
  auditPrice: number;

  // Step 4: Audience & Personas
  audience: string | null;
  audiencePrice: number;

  // Step 5: Channel Strategy
  channels: string | null;
  channelsPrice: number;

  // Step 6: Editorial Planning
  editorial: string | null;
  editorialPrice: number;

  // Step 7: SEO Strategy
  seo: string | null;
  seoPrice: number;

  // Step 8: Content Governance
  governance: string | null;
  governancePrice: number;

  // Step 9: Measurement & Analytics
  measurement: string | null;
  measurementPrice: number;

  // Step 10: Add-ons
  selectedAddOns: SelectedAddOn[];

  // Step 11: Timeline
  timeline: string | null;
  timelineMultiplier: number;

  // Calculated values
  strategyFoundationSubtotal: number;
  planningOperationsSubtotal: number;
  addOnsTotal: number;
  projectSubtotal: number;
  timelinePremium: number;
  totalInvestment: number;
  hasCustomQuote: boolean;

  // Actions
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setContentGoal: (goal: string) => void;
  setDepth: (depth: string) => void;
  setAudit: (audit: string) => void;
  setAudience: (audience: string) => void;
  setChannels: (channels: string) => void;
  setEditorial: (editorial: string) => void;
  setSeo: (seo: string) => void;
  setGovernance: (governance: string) => void;
  setMeasurement: (measurement: string) => void;
  toggleAddOn: (addOnId: string) => void;
  setTimeline: (timeline: string) => void;
  applyRecommendations: (goalId: string) => void;
  calculateTotals: () => void;
  resetBuilder: () => void;
  saveToUnifiedQuote: () => void;
}

const initialState = {
  currentStep: 1,
  contentGoal: null,
  depth: null,
  depthPrice: 0,
  audit: null,
  auditPrice: 0,
  audience: null,
  audiencePrice: 0,
  channels: null,
  channelsPrice: 0,
  editorial: null,
  editorialPrice: 0,
  seo: null,
  seoPrice: 0,
  governance: null,
  governancePrice: 0,
  measurement: null,
  measurementPrice: 0,
  selectedAddOns: [] as SelectedAddOn[],
  timeline: null,
  timelineMultiplier: 1.0,
  strategyFoundationSubtotal: 0,
  planningOperationsSubtotal: 0,
  addOnsTotal: 0,
  projectSubtotal: 0,
  timelinePremium: 0,
  totalInvestment: 0,
  hasCustomQuote: false,
};

export const useContentStrategyBuilderStore = create<ContentStrategyBuilderState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setStep: (step) => set({ currentStep: step }),

      nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 12) })),

      prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

      setContentGoal: (goal) => {
        set({ contentGoal: goal });
        get().applyRecommendations(goal);
      },

      setDepth: (depth) => {
        const option = depthOptions.find((o) => o.id === depth);
        set({
          depth,
          depthPrice: option?.price || 0,
          hasCustomQuote: option?.startsAt || false,
        });
        get().calculateTotals();
      },

      setAudit: (audit) => {
        const option = auditOptions.find((o) => o.id === audit);
        set({
          audit,
          auditPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setAudience: (audience) => {
        const option = audienceOptions.find((o) => o.id === audience);
        set({
          audience,
          audiencePrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setChannels: (channels) => {
        const option = channelOptions.find((o) => o.id === channels);
        set({
          channels,
          channelsPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setEditorial: (editorial) => {
        const option = editorialOptions.find((o) => o.id === editorial);
        set({
          editorial,
          editorialPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setSeo: (seo) => {
        const option = seoOptions.find((o) => o.id === seo);
        set({
          seo,
          seoPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setGovernance: (governance) => {
        const option = governanceOptions.find((o) => o.id === governance);
        set({
          governance,
          governancePrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      setMeasurement: (measurement) => {
        const option = measurementOptions.find((o) => o.id === measurement);
        set({
          measurement,
          measurementPrice: option?.price || 0,
        });
        get().calculateTotals();
      },

      toggleAddOn: (addOnId) => {
        const state = get();
        const existing = state.selectedAddOns.find((a) => a.id === addOnId);
        if (existing) {
          set({
            selectedAddOns: state.selectedAddOns.filter((a) => a.id !== addOnId),
          });
        } else {
          const addOn = addOnServices.find((a) => a.id === addOnId);
          if (addOn) {
            set({
              selectedAddOns: [
                ...state.selectedAddOns,
                { id: addOnId, price: addOn.price, oneTime: true },
              ],
            });
          }
        }
        get().calculateTotals();
      },

      setTimeline: (timeline) => {
        const option = timelineOptions.find((o) => o.id === timeline);
        set({
          timeline,
          timelineMultiplier: option?.multiplier || 1.0,
        });
        get().calculateTotals();
      },

      applyRecommendations: (goalId) => {
        const preset = recommendationPresets[goalId];
        if (!preset) return;

        const state = get();

        // Apply depth
        if (preset.depth) {
          const depthOption = depthOptions.find((o) => o.id === preset.depth);
          set({
            depth: preset.depth,
            depthPrice: depthOption?.price || 0,
          });
        }

        // Apply audit
        if (preset.audit) {
          const auditOption = auditOptions.find((o) => o.id === preset.audit);
          set({
            audit: preset.audit,
            auditPrice: auditOption?.price || 0,
          });
        }

        // Apply audience
        if (preset.audience) {
          const audienceOption = audienceOptions.find((o) => o.id === preset.audience);
          set({
            audience: preset.audience,
            audiencePrice: audienceOption?.price || 0,
          });
        }

        // Apply channels
        if (preset.channels) {
          const channelsOption = channelOptions.find((o) => o.id === preset.channels);
          set({
            channels: preset.channels,
            channelsPrice: channelsOption?.price || 0,
          });
        }

        // Apply editorial
        if (preset.editorial) {
          const editorialOption = editorialOptions.find((o) => o.id === preset.editorial);
          set({
            editorial: preset.editorial,
            editorialPrice: editorialOption?.price || 0,
          });
        }

        // Apply seo
        if (preset.seo) {
          const seoOption = seoOptions.find((o) => o.id === preset.seo);
          set({
            seo: preset.seo,
            seoPrice: seoOption?.price || 0,
          });
        }

        // Apply governance
        if (preset.governance) {
          const governanceOption = governanceOptions.find((o) => o.id === preset.governance);
          set({
            governance: preset.governance,
            governancePrice: governanceOption?.price || 0,
          });
        }

        // Apply measurement
        if (preset.measurement) {
          const measurementOption = measurementOptions.find((o) => o.id === preset.measurement);
          set({
            measurement: preset.measurement,
            measurementPrice: measurementOption?.price || 0,
          });
        }

        // Apply add-ons
        if (preset.addOns && preset.addOns.length > 0) {
          const addOns: SelectedAddOn[] = preset.addOns
            .map((id) => {
              const addOn = addOnServices.find((a) => a.id === id);
              return addOn ? { id, price: addOn.price, oneTime: true as const } : null;
            })
            .filter((a): a is SelectedAddOn => a !== null);
          set({ selectedAddOns: addOns });
        } else {
          set({ selectedAddOns: [] });
        }

        // Set default timeline
        set({
          timeline: 'flexible',
          timelineMultiplier: 1.0,
        });

        get().calculateTotals();
      },

      calculateTotals: () => {
        const state = get();

        // Strategy Foundation (depth, audit, audience, channels, seo)
        const strategyFoundationSubtotal =
          state.depthPrice +
          state.auditPrice +
          state.audiencePrice +
          state.channelsPrice +
          state.seoPrice;

        // Planning & Operations (editorial, governance, measurement)
        const planningOperationsSubtotal =
          state.editorialPrice +
          state.governancePrice +
          state.measurementPrice;

        // Add-ons
        const addOnsTotal = state.selectedAddOns.reduce((sum, a) => sum + a.price, 0);

        // Project subtotal
        const projectSubtotal = strategyFoundationSubtotal + planningOperationsSubtotal + addOnsTotal;

        // Timeline premium
        const timelinePremium = Math.round(projectSubtotal * (state.timelineMultiplier - 1));

        // Total investment
        const totalInvestment = projectSubtotal + timelinePremium;

        // Check for custom quote (startsAt options)
        const depthOption = depthOptions.find((o) => o.id === state.depth);
        const auditOption = auditOptions.find((o) => o.id === state.audit);
        const audienceOption = audienceOptions.find((o) => o.id === state.audience);
        const channelsOption = channelOptions.find((o) => o.id === state.channels);
        const editorialOption = editorialOptions.find((o) => o.id === state.editorial);
        const seoOption = seoOptions.find((o) => o.id === state.seo);
        const governanceOption = governanceOptions.find((o) => o.id === state.governance);
        const measurementOption = measurementOptions.find((o) => o.id === state.measurement);

        const hasCustomQuote =
          depthOption?.startsAt ||
          auditOption?.startsAt ||
          audienceOption?.startsAt ||
          channelsOption?.startsAt ||
          editorialOption?.startsAt ||
          seoOption?.startsAt ||
          governanceOption?.startsAt ||
          measurementOption?.startsAt ||
          false;

        set({
          strategyFoundationSubtotal,
          planningOperationsSubtotal,
          addOnsTotal,
          projectSubtotal,
          timelinePremium,
          totalInvestment,
          hasCustomQuote,
        });
      },

      resetBuilder: () => {
        set(initialState);
        // Clear from unified store
        useUnifiedQuoteStore.getState().clearServiceConfig('content-strategy');
      },

      saveToUnifiedQuote: () => {
        const state = get();
        useUnifiedQuoteStore.getState().saveServiceConfig('content-strategy', {
          contentGoal: state.contentGoal,
          depth: state.depth,
          depthPrice: state.depthPrice,
          audit: state.audit,
          auditPrice: state.auditPrice,
          audience: state.audience,
          audiencePrice: state.audiencePrice,
          channels: state.channels,
          channelsPrice: state.channelsPrice,
          editorial: state.editorial,
          editorialPrice: state.editorialPrice,
          seo: state.seo,
          seoPrice: state.seoPrice,
          governance: state.governance,
          governancePrice: state.governancePrice,
          measurement: state.measurement,
          measurementPrice: state.measurementPrice,
          selectedAddOns: state.selectedAddOns,
          timeline: state.timeline,
          timelineMultiplier: state.timelineMultiplier,
          strategyFoundationSubtotal: state.strategyFoundationSubtotal,
          planningOperationsSubtotal: state.planningOperationsSubtotal,
          addOnsTotal: state.addOnsTotal,
          projectSubtotal: state.projectSubtotal,
          timelinePremium: state.timelinePremium,
          totalInvestment: state.totalInvestment,
          hasCustomQuote: state.hasCustomQuote,
        });
      },
    }),
    {
      name: 'content-strategy-builder-storage',
    }
  )
);
