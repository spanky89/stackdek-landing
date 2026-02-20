// Blog article index
import { article as article1, default as Component1 } from './best-crm-landscaping-contractors-2026';
import { article as article2, default as Component2 } from './contractor-quotes-invoices-guide';
import { article as article3, default as Component3 } from './free-vs-paid-contractor-crm';
import { article as article4, default as Component4 } from './crm-for-small-contractors-getting-started';
import { article as article5, default as Component5 } from './contractor-crm-software-comparison-2026';
import { article as article6, default as Component6 } from './how-to-send-professional-quotes-under-5-minutes';
import { article as article7, default as Component7 } from './why-contractors-ditching-quickbooks-for-crms';
import { article as article8, default as Component8 } from './10-signs-better-job-management-system';
import { article as article9, default as Component9 } from './lead-to-payment-contractor-workflow';

export const articles = [
  { ...article1, Component: Component1 },
  { ...article2, Component: Component2 },
  { ...article3, Component: Component3 },
  { ...article4, Component: Component4 },
  { ...article5, Component: Component5 },
  { ...article6, Component: Component6 },
  { ...article7, Component: Component7 },
  { ...article8, Component: Component8 },
  { ...article9, Component: Component9 },
];

export const getArticleBySlug = (slug) => {
  return articles.find(article => article.slug === slug);
};
