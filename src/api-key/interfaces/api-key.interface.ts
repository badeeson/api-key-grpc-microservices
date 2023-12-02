export interface ApiKey {
  name: string;
  key: string;
  remainingQuota: number;
  maxQuotaPerDay: number;
  createdAt: Date;
}