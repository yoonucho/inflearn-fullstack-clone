// This file is auto-generated by @hey-api/openapi-ts

export type CreateCourseDto = {
    /**
     * 코스 제목
     */
    title: string;
};

export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    user: User;
};

export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: string;
    user: User;
};

export type CourseEnrollment = {
    id: string;
    userId: string;
    courseId: string;
    enrolledAt: string;
    createdAt: string;
    updatedAt: string;
    course: Course;
    user: User;
};

export type CourseReview = {
    id: string;
    content: string;
    rating: number;
    userId: string;
    courseId: string;
    instructorReply?: string;
    createdAt: string;
    updatedAt: string;
    course: Course;
    user: User;
};

export type CourseComment = {
    id: string;
    content: string;
    userId: string;
    questionId: string;
    createdAt: string;
    updatedAt: string;
    question: CourseQuestion;
    user: User;
};

export type CourseQuestion = {
    id: string;
    title: string;
    content: string;
    userId: string;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    course: Course;
    user: User;
    comments: Array<CourseComment>;
};

export type CourseFavorite = {
    id: string;
    userId: string;
    courseId: string;
    createdAt: string;
    user: User;
    course: Course;
};

export type CartItem = {
    id: string;
    userId: string;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    course: Course;
};

export type OrderItem = {
    id: string;
    orderId: string;
    courseId: string;
    courseName: string;
    originalPrice: number;
    discountPrice?: number;
    finalPrice: number;
    createdAt: string;
    updatedAt: string;
    order: Order;
    course: Course;
};

export type Payment = {
    id: string;
    paymentId: string;
    orderId: string;
    transactionId?: string;
    amount: number;
    currency: string;
    paymentMethod: string;
    pgProvider?: string;
    status: string;
    failureReason?: string;
    paidAt?: string;
    cancelledAt?: string;
    virtualAccountNumber?: string;
    virtualAccountBank?: string;
    virtualAccountHolder?: string;
    virtualAccountExpiry?: string;
    portoneData?: {
        [key: string]: unknown;
    };
    createdAt: string;
    updatedAt: string;
    order: Order;
};

export type Order = {
    id: string;
    orderNumber: string;
    userId: string;
    totalAmount: number;
    discountAmount: number;
    finalAmount: number;
    status: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    createdAt: string;
    updatedAt: string;
    user: User;
    orderItems: Array<OrderItem>;
    payments: Array<Payment>;
};

export type User = {
    id: string;
    name?: string;
    email?: string;
    emailVerified?: string;
    hashedPassword?: string;
    image?: string;
    bio?: string;
    accounts: Array<Account>;
    sessions: Array<Session>;
    courses: Array<Course>;
    courseEnrollments: Array<CourseEnrollment>;
    courseReviews: Array<CourseReview>;
    courseQuestions: Array<CourseQuestion>;
    courseComments: Array<CourseComment>;
    lectureActivities: Array<LectureActivity>;
    courseFavorites: Array<CourseFavorite>;
    cartItems: Array<CartItem>;
    orders: Array<Order>;
};

export type LectureActivity = {
    id: string;
    userId: string;
    courseId: string;
    lectureId: string;
    progress: number;
    duration: number;
    isCompleted: boolean;
    lastWatchedAt: string;
    user: User;
    course: Course;
    lecture: Lecture;
};

export type Lecture = {
    id: string;
    title: string;
    description?: string;
    order: number;
    duration?: number;
    isPreview: boolean;
    sectionId: string;
    courseId: string;
    videoStorageInfo?: {
        [key: string]: unknown;
    };
    createdAt: string;
    updatedAt: string;
    section: Section;
    course: Course;
    activities: Array<LectureActivity>;
};

export type CourseCategory = {
    id: string;
    name: string;
    slug: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
    courses: Array<Course>;
};

export type Course = {
    id: string;
    slug: string;
    title: string;
    shortDescription?: string;
    description?: string;
    thumbnailUrl?: string;
    price: number;
    discountPrice?: number;
    level: string;
    status: string;
    instructorId: string;
    createdAt: string;
    updatedAt: string;
    sections: Array<Section>;
    lectures: Array<Lecture>;
    categories: Array<CourseCategory>;
    enrollments: Array<CourseEnrollment>;
    instructor: User;
    reviews: Array<CourseReview>;
    questions: Array<CourseQuestion>;
    favorites: Array<CourseFavorite>;
    lectureActivities: Array<LectureActivity>;
    cartItems: Array<CartItem>;
    orderItems: Array<OrderItem>;
};

export type Section = {
    id: string;
    title: string;
    description?: string;
    order: number;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    course: Course;
    lectures: Array<Lecture>;
};

export type CourseDetailDto = {
    id: string;
    slug: string;
    title: string;
    shortDescription?: string;
    description?: string;
    thumbnailUrl?: string;
    price: number;
    discountPrice?: number;
    level: string;
    status: string;
    instructorId: string;
    createdAt: string;
    updatedAt: string;
    sections: Array<Section>;
    lectures: Array<Lecture>;
    categories: Array<CourseCategory>;
    enrollments: Array<CourseEnrollment>;
    instructor: User;
    reviews: Array<CourseReview>;
    questions: Array<CourseQuestion>;
    favorites: Array<CourseFavorite>;
    lectureActivities: Array<LectureActivity>;
    cartItems: Array<CartItem>;
    orderItems: Array<OrderItem>;
    /**
     * 수강등록 여부
     */
    isEnrolled: boolean;
    /**
     * 총 수강생 수
     */
    totalEnrollments: number;
    /**
     * 평균 평점
     */
    averageRating: number;
    /**
     * 총 리뷰 수
     */
    totalReviews: number;
    /**
     * 총 렉처 수
     */
    totalLectures: number;
    /**
     * 총 강의 시간(분)
     */
    totalDuration: number;
};

export type UpdateCourseDto = {
    /**
     * 코스 제목
     */
    title?: string;
    /**
     * 코스 1~2줄 짧은 설명
     */
    shortDescription?: string;
    /**
     * 코스 상태
     */
    status?: string;
    /**
     * 코스 상세페이지 설명
     */
    description?: string;
    /**
     * 썸네일 이미지 URL
     */
    thumbnailUrl?: string;
    /**
     * 코스 가격
     */
    price?: number;
    /**
     * 코스 할인 가격
     */
    discountPrice?: number;
    /**
     * 코스 난이도
     */
    level?: string;
    /**
     * 코스 게시 여부
     */
    categoryIds?: Array<string>;
};

export type PriceRangeDto = {
    /**
     * 최소 가격
     */
    min?: number;
    /**
     * 최대 가격
     */
    max?: number;
};

export type SearchCourseDto = {
    /**
     * 검색 키워드
     */
    q?: string;
    /**
     * 카테고리 ID
     */
    category?: string;
    /**
     * 가격 범위
     */
    priceRange?: PriceRangeDto;
    /**
     * 정렬 기준
     */
    sortBy?: 'price';
    /**
     * 정렬 순서
     */
    order?: 'asc' | 'desc';
    /**
     * 페이지 번호
     */
    page?: number;
    /**
     * 페이지당 결과 수
     */
    pageSize?: number;
};

export type PaginationDto = {
    /**
     * 현재 페이지
     */
    currentPage: number;
    /**
     * 전체 페이지 수
     */
    totalPages: number;
    /**
     * 전체 아이템 수
     */
    totalItems: number;
    /**
     * 다음 페이지 존재 여부
     */
    hasNext: boolean;
    /**
     * 이전 페이지 존재 여부
     */
    hasPrev: boolean;
};

export type SearchCourseResponseDto = {
    /**
     * 강의 목록
     */
    courses: Array<Course>;
    /**
     * 페이지네이션 정보
     */
    pagination: PaginationDto;
};

export type GetFavoriteResponseDto = {
    /**
     * 즐겨찾기 여부
     */
    isFavorite: boolean;
    /**
     * 전체 즐겨찾기 수
     */
    favoriteCount: number;
};

export type CourseReviewsResponseDto = {
    /**
     * 내 리뷰 존재 여부
     */
    myReviewExists: boolean;
    /**
     * 총 리뷰 수
     */
    totalReviewCount: number;
    /**
     * 현재 페이지
     */
    currentPage: number;
    /**
     * 페이지 크기
     */
    pageSize: number;
    /**
     * 총 페이지 수
     */
    totalPages: number;
    /**
     * 다음 페이지 존재 여부
     */
    hasNext: boolean;
    /**
     * 이전 페이지 존재 여부
     */
    hasPrev: boolean;
    /**
     * 전체 리뷰
     */
    reviews: Array<CourseReview>;
};

export type CreateReviewDto = {
    /**
     * 수강평 내용
     */
    content: string;
    /**
     * 평점 (1~5)
     */
    rating: number;
};

export type UpdateReviewDto = {
    /**
     * 수강평 내용
     */
    content?: string;
    /**
     * 평점 (1~5)
     */
    rating?: number;
};

export type InstructorReplyDto = {
    /**
     * 강사 답변
     */
    instructorReply: string;
};

export type CreateLectureDto = {
    /**
     * 개별 강의 제목
     */
    title: string;
};

export type UpdateLectureDto = {
    /**
     * 개별 강의 제목
     */
    title?: string;
    /**
     * 개별 강의 설명
     */
    description?: string;
    /**
     * 개별 강의 순서
     */
    order?: number;
    /**
     * 개별 강의 길이
     */
    duration?: number;
    /**
     * 개별 강의 무료(미리보기) 여부
     */
    isPreview?: boolean;
    /**
     * 개별 강의 비디오 업로드 정보
     */
    videoStorageInfo?: {
        [key: string]: unknown;
    };
};

export type UpdateLectureActivityDto = {
    /**
     * 강의 진행 상황
     */
    progress: number;
    /**
     * 강의 재생 시간
     */
    duration: number;
    /**
     * 강의 완료 여부
     */
    isCompleted: boolean;
    /**
     * 마지막 시청 시간
     */
    lastWatchedAt: string;
};

export type CreateSectionDto = {
    /**
     * 섹션 제목
     */
    title: string;
};

export type UpdateSectionDto = {
    /**
     * 섹션 제목
     */
    title?: string;
    /**
     * 섹션 설명
     */
    description?: string;
    /**
     * 섹션 순서
     */
    order?: number;
};

export type UpdateUserDto = {
    /**
     * 이름
     */
    name?: string;
    /**
     * 프로필 이미지 URL
     */
    image?: string;
    /**
     * 자기소개
     */
    bio?: string;
};

export type CreateCommentDto = {
    /**
     * 댓글 내용
     */
    content: string;
};

export type UpdateCommentDto = {
    /**
     * 댓글 내용
     */
    content?: string;
};

export type CountWithComment = {
    /**
     * 댓글 개수
     */
    comments: number;
};

export type QuestionWithCommentCountDto = {
    id: string;
    title: string;
    content: string;
    userId: string;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    course: Course;
    user: User;
    comments: Array<CourseComment>;
    /**
     * 댓글 개수
     */
    _count: CountWithComment;
};

export type CreateQuestionDto = {
    /**
     * 질문 제목
     */
    title: string;
    /**
     * 질문 내용
     */
    content: string;
};

export type UpdateQuestionDto = {
    /**
     * 질문 제목
     */
    title?: string;
    /**
     * 질문 내용
     */
    content?: string;
};

export type AddToCartDto = {
    [key: string]: unknown;
};

export type CartResponseDto = {
    /**
     * 장바구니 아이템 목록
     */
    items: Array<CartItem>;
    /**
     * 총 개수
     */
    totalCount: number;
    /**
     * 총 주문 금액
     */
    totalAmount: number;
};

export type VerifyPaymentDto = {
    [key: string]: unknown;
};

export type AppControllerGetHelloData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/';
};

export type AppControllerGetHelloResponses = {
    200: unknown;
};

export type AppControllerTestUserData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/user-test';
};

export type AppControllerTestUserResponses = {
    200: unknown;
};

export type CoursesControllerCreateData = {
    body: CreateCourseDto;
    path?: never;
    query?: never;
    url: '/courses';
};

export type CoursesControllerCreateResponses = {
    /**
     * 코스 생성
     */
    200: Course;
};

export type CoursesControllerCreateResponse = CoursesControllerCreateResponses[keyof CoursesControllerCreateResponses];

export type CoursesControllerFindAllInstructorCoursesData = {
    body?: never;
    path?: never;
    query?: {
        skip?: string;
        take?: string;
    };
    url: '/courses/instructor';
};

export type CoursesControllerFindAllInstructorCoursesResponses = {
    /**
     * 코스 목록
     */
    200: Array<Course>;
};

export type CoursesControllerFindAllInstructorCoursesResponse = CoursesControllerFindAllInstructorCoursesResponses[keyof CoursesControllerFindAllInstructorCoursesResponses];

export type CoursesControllerFindAllMyCoursesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/courses/my';
};

export type CoursesControllerFindAllMyCoursesResponses = {
    /**
     * 코스 목록
     */
    200: Array<Course>;
};

export type CoursesControllerFindAllMyCoursesResponse = CoursesControllerFindAllMyCoursesResponses[keyof CoursesControllerFindAllMyCoursesResponses];

export type CoursesControllerDeleteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}';
};

export type CoursesControllerDeleteResponses = {
    /**
     * 코스 삭제
     */
    200: Course;
};

export type CoursesControllerDeleteResponse = CoursesControllerDeleteResponses[keyof CoursesControllerDeleteResponses];

export type CoursesControllerFindOneData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}';
};

export type CoursesControllerFindOneResponses = {
    /**
     * 코스 상세 정보
     */
    200: CourseDetailDto;
};

export type CoursesControllerFindOneResponse = CoursesControllerFindOneResponses[keyof CoursesControllerFindOneResponses];

export type CoursesControllerUpdateData = {
    body: UpdateCourseDto;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}';
};

export type CoursesControllerUpdateResponses = {
    /**
     * 코스 수정
     */
    200: Course;
};

export type CoursesControllerUpdateResponse = CoursesControllerUpdateResponses[keyof CoursesControllerUpdateResponses];

export type CoursesControllerSearchData = {
    body: SearchCourseDto;
    path?: never;
    query?: never;
    url: '/courses/search';
};

export type CoursesControllerSearchResponses = {
    /**
     * 코스 검색
     */
    200: SearchCourseResponseDto;
};

export type CoursesControllerSearchResponse = CoursesControllerSearchResponses[keyof CoursesControllerSearchResponses];

export type CoursesControllerRemoveFavoriteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}/favorite';
};

export type CoursesControllerRemoveFavoriteResponses = {
    200: boolean;
};

export type CoursesControllerRemoveFavoriteResponse = CoursesControllerRemoveFavoriteResponses[keyof CoursesControllerRemoveFavoriteResponses];

export type CoursesControllerGetFavoriteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}/favorite';
};

export type CoursesControllerGetFavoriteResponses = {
    200: GetFavoriteResponseDto;
};

export type CoursesControllerGetFavoriteResponse = CoursesControllerGetFavoriteResponses[keyof CoursesControllerGetFavoriteResponses];

export type CoursesControllerAddFavoriteData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}/favorite';
};

export type CoursesControllerAddFavoriteResponses = {
    200: boolean;
};

export type CoursesControllerAddFavoriteResponse = CoursesControllerAddFavoriteResponses[keyof CoursesControllerAddFavoriteResponses];

export type CoursesControllerGetMyFavoritesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/courses/favorites/my';
};

export type CoursesControllerGetMyFavoritesResponses = {
    200: Array<CourseFavorite>;
};

export type CoursesControllerGetMyFavoritesResponse = CoursesControllerGetMyFavoritesResponses[keyof CoursesControllerGetMyFavoritesResponses];

export type CoursesControllerEnrollCourseData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/courses/{id}/enroll';
};

export type CoursesControllerEnrollCourseResponses = {
    200: boolean;
};

export type CoursesControllerEnrollCourseResponse = CoursesControllerEnrollCourseResponses[keyof CoursesControllerEnrollCourseResponses];

export type CoursesControllerGetLectureActivityData = {
    body?: never;
    path: {
        courseId: string;
    };
    query?: never;
    url: '/courses/{courseId}/activity';
};

export type CoursesControllerGetLectureActivityResponses = {
    /**
     * 개별 강의 활동 이벤트 조회
     */
    200: Array<LectureActivity>;
};

export type CoursesControllerGetLectureActivityResponse = CoursesControllerGetLectureActivityResponses[keyof CoursesControllerGetLectureActivityResponses];

export type CoursesControllerGetCourseReviewsData = {
    body?: never;
    path: {
        courseId: string;
    };
    query: {
        page: number;
        pageSize: number;
        sort: string;
    };
    url: '/courses/{courseId}/reviews';
};

export type CoursesControllerGetCourseReviewsResponses = {
    /**
     * 코스 리뷰 조회
     */
    200: CourseReviewsResponseDto;
};

export type CoursesControllerGetCourseReviewsResponse = CoursesControllerGetCourseReviewsResponses[keyof CoursesControllerGetCourseReviewsResponses];

export type CoursesControllerCreateReviewData = {
    body: CreateReviewDto;
    path: {
        courseId: string;
    };
    query?: never;
    url: '/courses/{courseId}/reviews';
};

export type CoursesControllerCreateReviewResponses = {
    /**
     * 수강평 작성
     */
    200: CourseReview;
};

export type CoursesControllerCreateReviewResponse = CoursesControllerCreateReviewResponses[keyof CoursesControllerCreateReviewResponses];

export type CoursesControllerDeleteReviewData = {
    body?: never;
    path: {
        reviewId: string;
    };
    query?: never;
    url: '/courses/reviews/{reviewId}';
};

export type CoursesControllerDeleteReviewResponses = {
    /**
     * 수강평 삭제
     */
    200: unknown;
};

export type CoursesControllerUpdateReviewData = {
    body: UpdateReviewDto;
    path: {
        reviewId: string;
    };
    query?: never;
    url: '/courses/reviews/{reviewId}';
};

export type CoursesControllerUpdateReviewResponses = {
    /**
     * 수강평 수정
     */
    200: CourseReview;
};

export type CoursesControllerUpdateReviewResponse = CoursesControllerUpdateReviewResponses[keyof CoursesControllerUpdateReviewResponses];

export type CoursesControllerCreateInstructorReplyData = {
    body: InstructorReplyDto;
    path: {
        reviewId: string;
    };
    query?: never;
    url: '/courses/reviews/{reviewId}/instructor-reply';
};

export type CoursesControllerCreateInstructorReplyResponses = {
    /**
     * 강사 답변 작성/수정
     */
    200: CourseReview;
};

export type CoursesControllerCreateInstructorReplyResponse = CoursesControllerCreateInstructorReplyResponses[keyof CoursesControllerCreateInstructorReplyResponses];

export type CoursesControllerGetInstructorReviewsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/courses/reviews/instructor';
};

export type CoursesControllerGetInstructorReviewsResponses = {
    /**
     * 강사의 모든 강의의 리뷰 조회
     */
    200: Array<CourseReview>;
};

export type CoursesControllerGetInstructorReviewsResponse = CoursesControllerGetInstructorReviewsResponses[keyof CoursesControllerGetInstructorReviewsResponses];

export type LecturesControllerCreateData = {
    body: CreateLectureDto;
    path: {
        /**
         * 섹션 ID
         */
        sectionId: string;
    };
    query?: never;
    url: '/lectures/sections/{sectionId}/lectures';
};

export type LecturesControllerCreateResponses = {
    /**
     * 강의 생성 성공
     */
    200: Lecture;
};

export type LecturesControllerCreateResponse = LecturesControllerCreateResponses[keyof LecturesControllerCreateResponses];

export type LecturesControllerDeleteData = {
    body?: never;
    path: {
        /**
         * 개별 강의 ID
         */
        lectureId: string;
    };
    query?: never;
    url: '/lectures/{lectureId}';
};

export type LecturesControllerDeleteResponses = {
    /**
     * 개별 강의 삭제 성공
     */
    200: Lecture;
};

export type LecturesControllerDeleteResponse = LecturesControllerDeleteResponses[keyof LecturesControllerDeleteResponses];

export type LecturesControllerFindOneData = {
    body?: never;
    path: {
        /**
         * 개별 강의 ID
         */
        lectureId: string;
    };
    query?: never;
    url: '/lectures/{lectureId}';
};

export type LecturesControllerFindOneResponses = {
    /**
     * 개별 강의 상세 정보 조회
     */
    200: Lecture;
};

export type LecturesControllerFindOneResponse = LecturesControllerFindOneResponses[keyof LecturesControllerFindOneResponses];

export type LecturesControllerUpdateData = {
    body: UpdateLectureDto;
    path: {
        /**
         * 개별 강의 ID
         */
        lectureId: string;
    };
    query?: never;
    url: '/lectures/{lectureId}';
};

export type LecturesControllerUpdateResponses = {
    /**
     * 개별 강의 수정 성공
     */
    200: Lecture;
};

export type LecturesControllerUpdateResponse = LecturesControllerUpdateResponses[keyof LecturesControllerUpdateResponses];

export type LecturesControllerGetLectureActivityData = {
    body?: never;
    path: {
        lectureId: string;
    };
    query?: never;
    url: '/lectures/{lectureId}/activity';
};

export type LecturesControllerGetLectureActivityResponses = {
    /**
     * 개별 강의 활동 이벤트 조회
     */
    200: LectureActivity;
};

export type LecturesControllerGetLectureActivityResponse = LecturesControllerGetLectureActivityResponses[keyof LecturesControllerGetLectureActivityResponses];

export type LecturesControllerUpdateLectureActivityData = {
    body: UpdateLectureActivityDto;
    path: {
        lectureId: string;
    };
    query?: never;
    url: '/lectures/{lectureId}/activity';
};

export type LecturesControllerUpdateLectureActivityResponses = {
    /**
     * 개별 강의 활동 이벤트 업데이트
     */
    200: LectureActivity;
};

export type LecturesControllerUpdateLectureActivityResponse = LecturesControllerUpdateLectureActivityResponses[keyof LecturesControllerUpdateLectureActivityResponses];

export type SectionsControllerCreateData = {
    body: CreateSectionDto;
    path: {
        /**
         * 코스 ID
         */
        courseId: string;
    };
    query?: never;
    url: '/sections/courses/{courseId}/sections';
};

export type SectionsControllerCreateResponses = {
    /**
     * 섹션 생성 성공
     */
    200: Section;
};

export type SectionsControllerCreateResponse = SectionsControllerCreateResponses[keyof SectionsControllerCreateResponses];

export type SectionsControllerDeleteData = {
    body?: never;
    path: {
        /**
         * 섹션 ID
         */
        sectionId: string;
    };
    query?: never;
    url: '/sections/{sectionId}';
};

export type SectionsControllerDeleteResponses = {
    /**
     * 섹션 삭제 성공
     */
    200: Section;
};

export type SectionsControllerDeleteResponse = SectionsControllerDeleteResponses[keyof SectionsControllerDeleteResponses];

export type SectionsControllerFindOneData = {
    body?: never;
    path: {
        /**
         * 섹션 ID
         */
        sectionId: string;
    };
    query?: never;
    url: '/sections/{sectionId}';
};

export type SectionsControllerFindOneResponses = {
    /**
     * 섹션 상세 정보
     */
    200: Section;
};

export type SectionsControllerFindOneResponse = SectionsControllerFindOneResponses[keyof SectionsControllerFindOneResponses];

export type SectionsControllerUpdateData = {
    body: UpdateSectionDto;
    path: {
        /**
         * 섹션 ID
         */
        sectionId: string;
    };
    query?: never;
    url: '/sections/{sectionId}';
};

export type SectionsControllerUpdateResponses = {
    /**
     * 섹션 업데이트 성공
     */
    200: Section;
};

export type SectionsControllerUpdateResponse = SectionsControllerUpdateResponses[keyof SectionsControllerUpdateResponses];

export type CategoriesControllerFindAllData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/categories';
};

export type CategoriesControllerFindAllResponses = {
    /**
     * 카테고리를 성공적으로 가져옴
     */
    200: Array<CourseCategory>;
};

export type CategoriesControllerFindAllResponse = CategoriesControllerFindAllResponses[keyof CategoriesControllerFindAllResponses];

export type MediaControllerUploadMediaData = {
    /**
     * 미디어 업로드 요청 파일
     */
    body: {
        /**
         * 이미지(jpg, png 등) 또는 비디오(mp4 등)
         */
        file?: Blob | File;
    };
    path?: never;
    query?: never;
    url: '/media';
};

export type MediaControllerUploadMediaResponses = {
    /**
     * 미디어 업로드 결과 (videoStorageInfo)
     */
    200: unknown;
};

export type UsersControllerGetProfileData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/users/profile';
};

export type UsersControllerGetProfileResponses = {
    /**
     * 코스 수정
     */
    200: User;
};

export type UsersControllerGetProfileResponse = UsersControllerGetProfileResponses[keyof UsersControllerGetProfileResponses];

export type UsersControllerUpdateProfileData = {
    body: UpdateUserDto;
    path?: never;
    query?: never;
    url: '/users/profile';
};

export type UsersControllerUpdateProfileResponses = {
    /**
     * 코스 수정
     */
    200: User;
};

export type UsersControllerUpdateProfileResponse = UsersControllerUpdateProfileResponses[keyof UsersControllerUpdateProfileResponses];

export type CommentsControllerCreateData = {
    body: CreateCommentDto;
    path: {
        questionId: string;
    };
    query?: never;
    url: '/comments/questions/{questionId}/comments';
};

export type CommentsControllerCreateResponses = {
    /**
     * 질문에 댓글 작성
     */
    200: CourseComment;
};

export type CommentsControllerCreateResponse = CommentsControllerCreateResponses[keyof CommentsControllerCreateResponses];

export type CommentsControllerRemoveData = {
    body?: never;
    path: {
        commentId: string;
    };
    query?: never;
    url: '/comments/comments/{commentId}';
};

export type CommentsControllerRemoveResponses = {
    /**
     * 댓글 삭제
     */
    200: boolean;
};

export type CommentsControllerRemoveResponse = CommentsControllerRemoveResponses[keyof CommentsControllerRemoveResponses];

export type CommentsControllerUpdateData = {
    body: UpdateCommentDto;
    path: {
        commentId: string;
    };
    query?: never;
    url: '/comments/comments/{commentId}';
};

export type CommentsControllerUpdateResponses = {
    /**
     * 댓글 수정
     */
    200: CourseComment;
};

export type CommentsControllerUpdateResponse = CommentsControllerUpdateResponses[keyof CommentsControllerUpdateResponses];

export type QuestionsControllerFindAllByInstructorIdData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/instructor/questions';
};

export type QuestionsControllerFindAllByInstructorIdResponses = {
    /**
     * 지식공유자의 모든 질문 조회
     */
    200: Array<QuestionWithCommentCountDto>;
};

export type QuestionsControllerFindAllByInstructorIdResponse = QuestionsControllerFindAllByInstructorIdResponses[keyof QuestionsControllerFindAllByInstructorIdResponses];

export type QuestionsControllerFindAllData = {
    body?: never;
    path: {
        courseId: string;
    };
    query?: never;
    url: '/courses/{courseId}/questions';
};

export type QuestionsControllerFindAllResponses = {
    /**
     * 강의 질문 목록 조회
     */
    200: Array<CourseQuestion>;
};

export type QuestionsControllerFindAllResponse = QuestionsControllerFindAllResponses[keyof QuestionsControllerFindAllResponses];

export type QuestionsControllerCreateData = {
    body: CreateQuestionDto;
    path: {
        courseId: string;
    };
    query?: never;
    url: '/courses/{courseId}/questions';
};

export type QuestionsControllerCreateResponses = {
    /**
     * 강의 질문 생성
     */
    200: CourseQuestion;
};

export type QuestionsControllerCreateResponse = QuestionsControllerCreateResponses[keyof QuestionsControllerCreateResponses];

export type QuestionsControllerRemoveData = {
    body?: never;
    path: {
        questionId: string;
    };
    query?: never;
    url: '/questions/{questionId}';
};

export type QuestionsControllerRemoveResponses = {
    /**
     * 강의 질문 삭제
     */
    200: unknown;
};

export type QuestionsControllerFindOneData = {
    body?: never;
    path: {
        questionId: string;
    };
    query?: never;
    url: '/questions/{questionId}';
};

export type QuestionsControllerFindOneResponses = {
    /**
     * 강의 질문 상세 조회
     */
    200: CourseQuestion;
};

export type QuestionsControllerFindOneResponse = QuestionsControllerFindOneResponses[keyof QuestionsControllerFindOneResponses];

export type QuestionsControllerUpdateData = {
    body: UpdateQuestionDto;
    path: {
        questionId: string;
    };
    query?: never;
    url: '/questions/{questionId}';
};

export type QuestionsControllerUpdateResponses = {
    /**
     * 강의 질문 수정
     */
    200: CourseQuestion;
};

export type QuestionsControllerUpdateResponse = QuestionsControllerUpdateResponses[keyof QuestionsControllerUpdateResponses];

export type CartsControllerClearCartData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/carts';
};

export type CartsControllerClearCartResponses = {
    /**
     * 장바구니 비우기
     */
    200: boolean;
};

export type CartsControllerClearCartResponse = CartsControllerClearCartResponses[keyof CartsControllerClearCartResponses];

export type CartsControllerGetCartItemsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/carts';
};

export type CartsControllerGetCartItemsResponses = {
    /**
     * 장바구니 아이템 목록 조회
     */
    200: CartResponseDto;
};

export type CartsControllerGetCartItemsResponse = CartsControllerGetCartItemsResponses[keyof CartsControllerGetCartItemsResponses];

export type CartsControllerAddToCartData = {
    body: AddToCartDto;
    path?: never;
    query?: never;
    url: '/carts';
};

export type CartsControllerAddToCartResponses = {
    /**
     * 장바구니에 강의 추가
     */
    200: CartItem;
};

export type CartsControllerAddToCartResponse = CartsControllerAddToCartResponses[keyof CartsControllerAddToCartResponses];

export type CartsControllerRemoveFromCartData = {
    body?: never;
    path: {
        courseId: string;
    };
    query?: never;
    url: '/carts/{courseId}';
};

export type CartsControllerRemoveFromCartResponses = {
    /**
     * 장바구니에서 강의 제거
     */
    200: boolean;
};

export type CartsControllerRemoveFromCartResponse = CartsControllerRemoveFromCartResponses[keyof CartsControllerRemoveFromCartResponses];

export type PaymentsControllerVerifyPaymentData = {
    body: VerifyPaymentDto;
    path?: never;
    query?: never;
    url: '/payments/verify';
};

export type PaymentsControllerVerifyPaymentResponses = {
    201: unknown;
};

export type PaymentsControllerHandleWebookData = {
    body: string;
    path?: never;
    query?: never;
    url: '/payments/webhook';
};

export type PaymentsControllerHandleWebookResponses = {
    201: unknown;
};

export type BatchControllerRunPaymentStatsData = {
    body?: never;
    path?: never;
    query: {
        date: string;
    };
    url: '/admin/batch/payment-stats';
};

export type BatchControllerRunPaymentStatsResponses = {
    201: unknown;
};

export type ClientOptions = {
    baseUrl: string;
};