'use client';

import { Service } from '@/lib/servicesData';
import { HowWeWork } from './HowWeWork';

export function ServiceProcess({ service }: { service: Service }) {
  if (!service.process || service.process.length === 0) return null;

  return (
    <HowWeWork steps={service.process} />
  );
}
