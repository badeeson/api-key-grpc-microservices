export interface ApiKey {
  key: string;
  remainingQuota: number;
  maxQuotaPerDay: number;
  createdAt: Date;
}