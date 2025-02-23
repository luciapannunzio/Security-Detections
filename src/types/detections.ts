export interface Detection {
    id: string;
    title: string;
    status: string;
    service: string;
    severity: 'low' | 'medium' | 'high';
    triggeredAt: string;
}