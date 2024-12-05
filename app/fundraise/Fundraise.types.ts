export type CreateFundraisePayload = {
    title: string;
    description: string;
    imageIndex: number;
    goalAmount: number;
    startDate: string;
    endDate: string;
    classId: string;
};

export type UpdateFundraisePayload = CreateFundraisePayload;

export type FundraiseDetails = {
    title: string;
    description: string;
    imageIndex: number;
    goalAmount: number;
    raisedAmount: number;
    totalSupporters: number;
    startDate: string;
    endDate: string;
    accountNumber: string;
    classId: string;
    className: string;
    schoolName: string;
    isTreasurer: boolean;
};
