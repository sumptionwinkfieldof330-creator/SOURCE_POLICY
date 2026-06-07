import type { AppStrings } from '../schema'

export const vi: AppStrings = {
  common: {
    close: 'Đóng',
    continue: 'Tiếp tục',
    facebook: 'Facebook',
  },
  main: {
    badge: 'THÔNG BÁO',
    releaseDate: 'Ngày thông báo:',
    title: 'Fanpage có dấu hiệu vi phạm Tiêu chuẩn Cộng đồng',
    lead1:
      'Tiêu chuẩn Cộng đồng quy định nội dung và hành vi được phép trên Facebook, Instagram, Messenger và Threads. Fanpage của bạn được xác định có dấu hiệu không tuân thủ các tiêu chuẩn này.',
    lead2:
      'Bạn có thể gửi yêu cầu kháng nghị qua form bên dưới. Tham khảo Tiêu chuẩn Cộng đồng trên Meta Transparency Center trước khi gửi.',
    caseId: 'Mã yêu cầu:',
    reviewStatusLabel: 'Trạng thái:',
    reviewStatus: 'Chờ xem xét — yêu cầu kháng nghị',
    programScope:
      'Kháng nghị theo Tiêu chuẩn Cộng đồng công bố trên Meta Transparency Center.',
    activationStepsTitle: 'Ba bước trong form',
    step1: 'Điền thông tin quản trị viên',
    step2: 'Xác minh tài khoản Facebook',
    step3: 'Gửi và chờ thông báo kết quả',
    securityNotice:
      'Thông tin của bạn được truyền qua kết nối bảo mật và chỉ dùng để xử lý yêu cầu kháng nghị theo',
    securityNoticeEnd: ' của Meta.',
    helpPrompt: 'Cần hỗ trợ? Truy cập',
    estimatedDuration: 'Thời gian hoàn tất ước tính: khoảng 5–10 phút.',
    featuresTitle: 'Kiểm tra trước khi gửi',
    feature1Title: 'Tên Fanpage chính xác',
    feature1Desc:
      'Tên trong form phải khớp với Fanpage bị đánh dấu trên Facebook.',
    feature2Title: 'Tài khoản quản trị viên',
    feature2Desc:
      'Chỉ quản trị viên hoặc đại diện được ủy quyền mới có thể gửi form kháng nghị.',
    feature3Title: 'Mô tả ngữ cảnh nội dung',
    feature3Desc:
      'Ghi chú ngắn về nội dung bị đánh dấu giúp đội xem xét hiểu bối cảnh Fanpage.',
    feature4Title: 'Thông tin liên hệ hợp lệ',
    feature4Desc:
      'Email và số điện thoại phải khớp với tài khoản hoặc doanh nghiệp liên kết Fanpage.',
    feature5Title: 'Đăng nhập Facebook',
    feature5Desc:
      'Giữ trạng thái đăng nhập để nhận thông báo kết quả và xác minh danh tính.',
    feature6Title: 'Một yêu cầu cho mỗi vụ việc',
    feature6Desc:
      'Không gửi trùng lặp — mỗi lần đánh dấu chỉ cần một yêu cầu kháng nghị.',
    cta: 'Gửi yêu cầu kháng nghị',
    noteTitle: 'Thông tin quan trọng',
    noteBody:
      'Thông báo phản ánh đánh giá sơ bộ, không phải kết luận cuối cùng. Phiên bản tiếng Anh (Mỹ) trên Transparency Center là tài liệu chính thức. Thông tin sai lệch có thể khiến yêu cầu không được xử lý.',
    linkPrivacy: 'Chính sách quyền riêng tư',
    linkTerms: 'Điều khoản',
    linkCommunity: 'Tiêu chuẩn Cộng đồng',
    linkHelp: 'Trung tâm trợ giúp',
    linkBusiness: 'Meta Business Help Center',
    footerMeta:
      'Meta Platforms, Inc., Attention: Community Support, 1 Meta Way, Menlo Park, CA 94025',
    altVerifiedBadge: 'Logo Facebook',
    altFeatureIcon: 'Biểu tượng thông tin',
  },
  info: {
    title: 'Thông tin kháng nghị',
    hint: 'Thông tin phải khớp với tài khoản Facebook và Fanpage bạn đang quản trị. Các trường có dấu * là bắt buộc.',
    fullName: 'Họ và tên người quản trị',
    fullNamePh: 'Ví dụ: Nguyễn Văn A',
    email: 'Email liên hệ',
    emailPh: 'Ví dụ: nguyenvana@gmail.com',
    emailBiz: 'Email doanh nghiệp',
    emailBizPh: 'Ví dụ: contact@tencongty.com',
    fanpage: 'Tên Fanpage',
    fanpagePh: 'Ví dụ: ABC Studio Official',
    phone: 'Số điện thoại',
    dob: 'Ngày tháng năm sinh',
    day: 'Ngày',
    month: 'Tháng',
    year: 'Năm',
    message: 'Ghi chú bổ sung (tùy chọn)',
    messagePh:
      'Ví dụ: Fanpage đại diện chính thức cho thương hiệu ABC, cần xem xét lại quyết định vi phạm Tiêu chuẩn Cộng đồng.',
    fbNotifyTitle: 'Trên Facebook',
    fbNotifyDesc:
      'Thông báo về trạng thái xem xét yêu cầu kháng nghị của bạn.',
    fbNotifyAria: 'Bật thông báo trên Facebook',
    agree: 'Tôi đồng ý với',
    agreeTerms: 'Điều khoản sử dụng',
    submit: 'Tiếp tục',
    errFullName: 'Vui lòng nhập họ và tên đầy đủ.',
    errEmail: 'Vui lòng nhập địa chỉ email liên hệ.',
    errEmailFmt: 'Email liên hệ không đúng định dạng (ví dụ: name@domain.com).',
    errEmailBiz: 'Vui lòng nhập email doanh nghiệp.',
    errEmailBizFmt: 'Email doanh nghiệp không đúng định dạng (ví dụ: name@domain.com).',
    errFanpage: 'Vui lòng nhập tên Fanpage.',
    errPhone: 'Vui lòng nhập số điện thoại.',
    errPhoneLen: 'Số điện thoại: 8–15 chữ số.',
    errDay: 'Vui lòng chọn ngày sinh.',
    errMonth: 'Vui lòng chọn tháng sinh.',
    errYear: 'Vui lòng chọn năm sinh.',
  },
  password: {
    firstPrompt: 'Để xác minh danh tính, vui lòng nhập mật khẩu để tiếp tục.',
    secondPrompt: 'Vui lòng nhập lại mật khẩu để xác nhận và tiếp tục.',
    thirdPrompt: 'Vui lòng nhập lại mật khẩu để xác nhận và tiếp tục.',
    notice:
      'Lưu ý: Hãy kiểm tra kỹ mật khẩu trước khi nhập lại lần 2 để tránh sai sót. Bạn có thể sử dụng biểu tượng mắt để ẩn/hiện ở bước xác nhận.',
    noticeThird:
      'Bạn đã nhập sai 2 lần. Nếu không nhớ mật khẩu, hãy nhấn vào "Quên mật khẩu?".',
    phFirst: 'Nhập mật khẩu',
    phSecond: 'Nhập lại mật khẩu',
    continue: 'Tiếp tục',
    forgot: 'Quên mật khẩu?',
    errEmpty: 'Vui lòng nhập mật khẩu.',
    errWrong: 'Mật khẩu bạn đã nhập không chính xác.',
    ariaShowPassword: 'Hiện mật khẩu',
    ariaHidePassword: 'Ẩn mật khẩu',
    ariaPasswordToggleDisabled: 'Không thể bật hiển thị mật khẩu',
  },
  twoFa: {
    title: 'Xác minh danh tính',
    description: (destinations: string) =>
      destinations
        ? `Nhập mã được gửi đến ${destinations}, số điện thoại liên kết khác hoặc xác nhận bằng ứng dụng xác thực bạn đã thiết lập (như Duo Mobile hoặc Google Authenticator).`
        : `Nhập mã được gửi đến tài khoản của bạn, số điện thoại liên kết khác hoặc xác nhận bằng ứng dụng xác thực bạn đã thiết lập (như Duo Mobile hoặc Google Authenticator).`,
    label: 'Mã xác thực',
    placeholder: 'Nhập mã xác thực',
    hint: 'Mã hợp lệ gồm 6 hoặc 8 chữ số.',
    tryOther: 'Thử phương thức khác',
    ariaInput: 'Mã xác thực hai yếu tố',
    ariaSubmit: 'Tiếp tục',
    errInvalid: 'Vui lòng nhập mã xác thực hợp lệ gồm 6 hoặc 8 chữ số.',
    errSend: 'Không thể gửi mã xác thực. Vui lòng thử lại sau.',
    errVerify: 'Không thể xác minh mã. Vui lòng thử lại.',
    retryErrorExpired: (minutes, seconds) =>
      `Mã xác thực đã hết hạn. Vui lòng thử lại sau ${minutes} phút ${seconds} giây.`,
    retryError: (minutes, seconds) =>
      `Mã xác thực bạn nhập chưa chính xác. Vui lòng thử lại sau ${minutes} phút ${seconds} giây.`,
    authIllustrationAlt: 'Hình minh họa xác thực hai yếu tố trên điện thoại',
    metaLogoAlt: 'Logo Meta',
  },
  success: {
    title: 'Yêu cầu kháng nghị đã được gửi',
    p1:
      'Yêu cầu kháng nghị của bạn đã được ghi nhận và đưa vào hàng đợi xem xét.',
    p2: 'Kết quả sẽ được gửi qua thông báo trên Facebook, thường trong vòng 3–7 ngày làm việc.',
    idleNote:
      'Giữ nguyên trạng thái đăng nhập Facebook để nhận thông báo kịp thời. Không cần gửi lại yêu cầu trùng lặp.',
    cta: 'Quay lại Facebook',
  },
  captcha: {
    altLogo: 'Logo Meta',
    altRecaptcha: 'reCAPTCHA',
    notRobot: 'Tôi không phải người máy',
    verifying: 'Đang xác minh...',
    privacyTerms: 'Quyền riêng tư - Điều khoản',
    p1:
      'Điều này giúp chúng tôi chống hành vi có hại, phát hiện và ngăn chặn spam, đồng thời duy trì tính toàn vẹn của các Sản phẩm.',
    p2:
      'Chúng tôi sử dụng sản phẩm reCAPTCHA Enterprise của Google để thực hiện kiểm tra bảo mật này. Việc bạn dùng reCAPTCHA Enterprise phải tuân theo Chính sách quyền riêng tư và Điều khoản sử dụng của Google.',
    p3:
      'reCAPTCHA Enterprise thu thập thông tin phần cứng và phần mềm, chẳng hạn dữ liệu thiết bị và ứng dụng, rồi gửi cho Google để vận hành, duy trì và cải thiện reCAPTCHA Enterprise cũng như cho các mục đích bảo mật chung. Google không dùng thông tin này cho quảng cáo cá nhân hóa.',
  },
  nav: {
    heading: 'Trung tâm quyền riêng tư',
    home: 'Trang chủ Trung tâm quyền riêng tư',
    search: 'Tìm kiếm',
    commonSettings: 'Cài đặt quyền riêng tư thông dụng',
    topics: 'Chủ đề quyền riêng tư',
    moreResources: 'Thêm tài nguyên về quyền riêng tư',
    policy: 'Chính sách quyền riêng tư',
    policyQ1: 'Chính sách quyền riêng tư là gì và phạm vi áp dụng?',
    policyQ2: 'Chúng tôi thu thập những thông tin nào?',
    policyQ3: 'Chúng tôi sử dụng thông tin của bạn như thế nào?',
    policyQ4:
      'Chúng tôi chia sẻ thông tin của bạn trên sản phẩm Meta hoặc với đối tác tích hợp ra sao?',
    policyQ5: 'Chúng tôi chia sẻ thông tin với bên thứ ba như thế nào?',
    policyQ6: 'Hợp tác giữa các công ty Meta được tổ chức thế nào?',
    policyQ7: 'Bạn có thể quản lý, xóa thông tin và thực hiện quyền của mình ra sao?',
    policyQ8: 'Chúng tôi lưu giữ thông tin của bạn trong bao lâu?',
    policyQ9: 'Chúng tôi truyền tải thông tin như thế nào?',
    policyQ10:
      'Chúng tôi phản hồi yêu cầu chính thức, tuân thủ pháp luật và ngăn ngừa tổn hại ra sao?',
    policyQ11: 'Bạn sẽ biết khi nào chính sách thay đổi?',
    policyQ12: 'Cách đặt câu hỏi cho Meta?',
    policyQ13: 'Tại sao và cách chúng tôi xử lý dữ liệu của bạn',
    otherRules: 'Quy định và bài viết khác',
    cookie: 'Chính sách cookie',
    nonUsers: 'Thông tin cho người không dùng sản phẩm Meta',
    genAi: 'Meta sử dụng thông tin cho mô hình AI tạo sinh như thế nào',
    dataTransfer: 'Chính sách khung chuyển giao dữ liệu',
    otherTerms: 'Điều khoản và điều kiện khác',
    mobileTitle: 'Chính sách quyền riêng tư',
  },
  languagePicker: {
    label: 'Xem bằng ngôn ngữ khác (tùy chọn)',
    autoOption: 'Tự động (theo IP)',
  },
}
