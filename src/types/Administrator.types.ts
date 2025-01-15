export interface Administrator {
    id: number;
    name: string;
    supervisoryOrgan: string;
    idCardNumberOrPassport: string;
    jobTitle: string;
    profilePic: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null
}

