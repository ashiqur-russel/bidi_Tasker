export declare class PaginationDto {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export declare class SearchDto {
    q?: string;
    fields?: string[];
}
export declare class FilterDto {
    status?: string;
    category?: string;
    startDate?: string;
    endDate?: string;
}
export declare class ApiResponseDto<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}
export declare class PaginatedResponseDto<T = any> {
    data: T[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
}
//# sourceMappingURL=common.dto.d.ts.map