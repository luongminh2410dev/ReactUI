import { UPDATE_PROGRESS } from '../actions/types'
const INITIAL_STATE = {
    lessons: [
        { id: 1, name: 'Main Tags', progress: 1, img: 'https://s3-alpha-sig.figma.com/img/f355/4c30/96ed6b15518aaf196b6129650feecb57?Expires=1623628800&Signature=FbENy2Y6NHHaSkpUhr1oAIfoIm9YSAbzylStLbD99FvLw-u7Xw4gLcaXBhnpAL6I~1nAjG~UVEam6C9Fq5cVhv65f1ixCFY~gJWO8A784G-o2RatmS8Qc5dzowKx-QzGLmhVUITyTz40ULyLsuZM~8VqU87yyenN5Cr3xSm-q0Oz~OIZR3162t7YtLSpeZMFe--mxrVNeCDOfCMcxXyBqhVH3EDt05RdN8fIEir40YclKh0M0BdEiectc1fM795OFDsZ~t6ar03vhSFJYm8E2PS0-48IVMVYUEKpKey3KRESjTl8imE7AE4nRGoaQECFQITGai8i~bgZ8wCZcL26rQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 2, name: 'Tags For Header', progress: 0.4, img: 'https://s3-alpha-sig.figma.com/img/a2b8/bd7f/e2cb33694f28d226d369d6c6e0fb7ad9?Expires=1623628800&Signature=VivP9F3XpsGbRWQThnVlIXhpdu9L3K6dnV~yQAh~6wG5eBXGPNh87UNs6uuiUWUCGRl6vYbrNnN1D~edmlDrnnirzg2fhDapW5OFNhxylpvoc8W71l7AJEraJJqhyE70-TXfXhZXzsvb7ES5zoSqLjqsVV0C4iVB1nga7yr4QYpSKWifKkVVQwW76umNRdWJUCZbvhdNnHg78TXoEK9FkFRPSSDAIt2nXSecHx5QG57ZDYdBqOKbsKtjqm3NLh7WKTXsHulTx-IRVQIextobsDHiaXQ5Q2KHxJ3xwPkv3REEKmXQJE7x~STdwl8SbCXHSIzBiqhMNHxjkXsc88aFkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 3, name: 'Style Tags', progress: 0, img: 'https://s3-alpha-sig.figma.com/img/e7dc/70fc/1c2aa2ab217c362da74ce7d1aac284c7?Expires=1623628800&Signature=V~oDFmYteNEHriDpt8d7EQw5EQxdzEPtRVND3i6AbsSsjtJ1-B6DR6bTP1jKcwW~ov1lnMDhjtSwmCPsIQ1EqMXnWFtCFfEtsBt68i6WMdwqS~tZU0~HibKWPvfEna~10Q4o5dVaYzOwSPF2yRqFm2kQf17kU8D9IG8-OClUSie5edoyZiE8yo5eu1v-DNHQI9bbteOYMfLaclPz19qiNzfu~cvX65gD~ZFQ~xLKziiyWAriNx3Rqrshe~oO0qblTthivHYB~px0uzQFbwMDerOAAA4SmUAzYd5XtlJEKhQIkQllF4VWYcqc8r1fjV0Eh1j~UZf0OsfF0N6yvCvJ8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
    ],
}
export default (state = INITIAL_STATE, { type, lesson }) => {
    switch (type) {
        case UPDATE_PROGRESS:
            const newLessons = state.lessons.map(item => {
                if (item.id === lesson.id) {
                    return lesson
                }
                return item
            })
            return { ...state, lessons: newLessons }
        default:
            return state;
    }
}