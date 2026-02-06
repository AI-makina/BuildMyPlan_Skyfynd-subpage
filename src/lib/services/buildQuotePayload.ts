import { usePlanStore } from '@/hooks/usePlanStore';
import { getServiceById } from '@/data/services';
import {
  useUnifiedQuoteStore,
  serviceMetadata,
  type ConfiguredService,
  type WebsiteConfig,
  type AppConfig,
  type PaidMediaConfig,
  type SocialMediaConfig,
  type EmailMarketingConfig,
  type MessagingCopywritingConfig,
  type AIReceptionistConfig,
} from '@/hooks/useUnifiedQuoteStore';
import type { QuoteRequestPayload, TierServiceDetail, BuilderServiceDetail } from '@/lib/types/quote';

/**
 * Builds a quote payload from the tier-based plan store (Main Page + Rent Me a Site).
 * Source is auto-detected: if any item has serviceId === 'website-rental', source = "Rent Me a Site".
 */
export function buildTierQuotePayload(
  formData: { name: string; email: string; company?: string; phone?: string; notes?: string }
): QuoteRequestPayload {
  const { items, subtotal, discountPercentage, total } = usePlanStore.getState();

  const isRental = items.some(item => item.serviceId === 'website-rental');
  const source = isRental ? 'Rent Me a Site' : 'Main Page';

  const servicesDetail: TierServiceDetail[] = items.map(item => {
    const service = getServiceById(item.serviceId);
    return {
      serviceId: item.serviceId,
      serviceName: service?.name ?? item.serviceId,
      tier: item.tierId,
      addOns: item.addOns,
      subtotal: item.subtotal,
    };
  });

  const serviceNames = servicesDetail.map(s => s.serviceName).join(', ');

  return {
    source,
    name: formData.name,
    email: formData.email,
    company: formData.company ?? '',
    phone: formData.phone ?? '',
    notes: formData.notes ?? '',
    serviceCount: items.length,
    serviceNames,
    hasCustomQuote: false,
    oneTimeTotal: subtotal,
    monthlyTotal: 0,
    discountPercentage,
    grandTotal: total,
    servicesDetail,
  };
}

/**
 * Gets the one-time and monthly totals from any configured service.
 */
function getServiceTotals(service: ConfiguredService): { oneTime: number; monthly: number } {
  const c = service.config;
  switch (service.type) {
    case 'website':
      return { oneTime: (c as WebsiteConfig).total, monthly: (c as WebsiteConfig).monthlyRecurring };
    case 'app':
      return { oneTime: (c as AppConfig).oneTimeTotal, monthly: (c as AppConfig).monthlyTotal };
    case 'paid-media':
      return { oneTime: (c as PaidMediaConfig).oneTimeTotal, monthly: (c as PaidMediaConfig).monthlyTotal };
    case 'social-media':
      return { oneTime: (c as SocialMediaConfig).oneTimeTotal, monthly: (c as SocialMediaConfig).monthlyTotal };
    case 'email-marketing':
      return { oneTime: (c as EmailMarketingConfig).oneTimeTotal, monthly: (c as EmailMarketingConfig).monthlyTotal };
    case 'messaging-copywriting':
      return { oneTime: (c as MessagingCopywritingConfig).oneTimeTotal, monthly: (c as MessagingCopywritingConfig).monthlyTotal };
    case 'ai-receptionist':
      return { oneTime: (c as AIReceptionistConfig).oneTimeTotal, monthly: (c as AIReceptionistConfig).monthlyTotal };
    // Services with only one-time totals
    case 'animation':
    case 'image':
    case 'sound':
      return { oneTime: (c as { total: number }).total, monthly: 0 };
    case 'brand-strategy':
    case 'visual-identity':
    case 'brand-applications':
    case 'content-strategy':
      return { oneTime: (c as { totalInvestment: number }).totalInvestment, monthly: 0 };
    default:
      return { oneTime: 0, monthly: 0 };
  }
}

/**
 * Builds a quote payload from the unified quote store (Custom Builders).
 */
export function buildBuilderQuotePayload(
  formData: { name: string; email: string; company?: string; phone?: string; notes?: string }
): QuoteRequestPayload {
  const store = useUnifiedQuoteStore.getState();
  const configuredServices = store.getAllConfiguredServices();
  const totals = store.getCombinedTotals();

  const servicesDetail: BuilderServiceDetail[] = configuredServices.map(service => {
    const meta = serviceMetadata[service.type];
    const serviceTotals = getServiceTotals(service);
    return {
      serviceType: service.type,
      serviceLabel: meta.label,
      oneTimeTotal: serviceTotals.oneTime,
      monthlyTotal: serviceTotals.monthly,
      hasCustomQuote: (service.config as { hasCustomQuote: boolean }).hasCustomQuote,
      config: service.config as unknown as Record<string, unknown>,
    };
  });

  const serviceNames = servicesDetail.map(s => s.serviceLabel).join(', ');

  return {
    source: 'Custom Builder',
    name: formData.name,
    email: formData.email,
    company: formData.company ?? '',
    phone: formData.phone ?? '',
    notes: formData.notes ?? '',
    serviceCount: totals.serviceCount,
    serviceNames,
    hasCustomQuote: totals.hasCustomQuote,
    oneTimeTotal: totals.oneTimeTotal,
    monthlyTotal: totals.monthlyTotal,
    discountPercentage: 0,
    grandTotal: totals.oneTimeTotal,
    servicesDetail,
  };
}
