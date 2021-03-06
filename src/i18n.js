import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      English: {
        translations: {
          News: "NEWS",
          School: "SCHOOL",
          Work: "Work",
          Home: "Home",
          Play: "Play",
          "Sign up": "Sign up",
          Login: "Log in",
          Discover: "Discover",
          Library: "Library",
          Reports: "Reports",
          Create: "Create",
          Profile: "Profile",
          Settings: "Settings",
          Logout: "Logout",
          "Add name": "Add name",
          Assignments: "Assignments",
          "Self-paced kahoots are perfect for e-learning as remote workers play independently at a time that suits them.":
            "Self-paced kahoots are perfect for e-learning as remote workers play independently at a time that suits them.",
          "Learn more": "Learn more",
          "Add interests": "Add interests",
          "My interests:": "My interests:",
          Plan: "Plan",
          "See all": "See all",
          questions: "questions",
          " My kahuts": "Kahuts của tôi",
          "Kahuts": "Kahuts",
          "Play demo game": "Play demo game",
          "Create a Kahut": "Create a Kahut",
          "Host kahut": "Host kahut",
          Advertisement: "Advertisement",
          "Log in": "Log in",
          "Forgot password": "Forgot password",
          "Reset your password": "Reset your password",
          "Log in with google": "Log in with google",
          "Don't have an account": "Don't have an account",
          "Already have an account": "Already have an account",
          "Sign up with google": "Sign up with google",
          "Confirm password": "Confirm password",
          "Full name": "Full name",
          Password: "Password",
          "Enter title": "Enter title",
          "Please fill in title field": "Please fill in title field",
          Delete: "Delete",
          "You will use the image cover default if not choose any image":
            "You will use the image cover default if not choose any image",
          Cancel: "Cancel",
          Save: "Save",
          "Add question": "Add question",
          "Save Kahut": "Save Kahut",
          "Question type": "Question type",
          "Time limit": "Time limit",
          Points: "Points",
          "Add more answer": "Add more answer",
          "Remove additional answers": "Remove additional answers",
          "Start typing your question": "Start typing your question",
          "Upload image": "Upload image",
          "Change image": "Change image",
          "Add answer ": "Add answer ",
          Quiz: "Quiz",
          "True or False": "True or False",
          "Multi selections": "Multi selections",
          Standard: "Standard",
          "No points": "No points",
          "Double points": "Double points",
          " minutes ": " minutes ",
          " minute ": " minute ",
          " seconds": " seconds ",
          "Kahut title": "Kahut title",
          "Please fill in title field!": "Please fill in title field!",
          Question: "Question",
          Courses: "Courses",
          "My folders": "My folders",
          "Shared with me": "Shared with me",
          Recent: "Recent",
          Draft: "Draft",
          Favotite: "Favotite",
          Search: "Search",
          " questions": " questions",
          " plays": " plays",
          plays: " plays",
          "Save changes": "Save changes",
          "List answers": "List answers",
          Details: "Details",
          Edit: "Edit",
          "A private kahut": "A private kahut",
          "Updated 6 hours ago": "Updated 6 hours ago",
          "My kahut": "My kahut"
        },
      },
      Vietnamese: {
        translations: {
          News: "Tin tức ",
          School: "Trường học",
          Work: "Công việc",
          Home: "Trang chủ",
          Play: "Chơi",
          Details: "Chi tiết",
          "Sign up": "Đăng kí",
          Login: "Đăng nhập",
          "Log in": "Đăng nhập",
          "Forgot password": "Quên mật khẩu",
          Discover: "Khám phá",
          Library: "Thư viện",
          Reports: "Đánh giá",
          Create: "Tạo mới",
          Profile: "Thông tin",
          Settings: "Cài đặt",
          Logout: "Đăng xuất",
          "Add name": "Thêm mới",
          Assignments: "Bài tập",
          "Self-paced kahoots are perfect for e-learning as remote workers play independently at a time that suits them.":
            "Các kahoots tự nhịp độ là lựa chọn hoàn hảo cho việc học trực tuyến khi những người làm việc từ xa chơi độc lập vào một thời điểm phù hợp với họ.",
          "Learn more": "Thêm",
          "Add interests": "Thêm",
          "My interests:": "Sở thích:",
          Plan: "Kế hoạch",
          "See all": "Xem tất cả",
          questions: "câu hỏi",
          " My kahuts": "Kahuts của tôi",
          "Kahuts": "Kahuts",
          "Play demo game": "Chơi thử",
          "Create a Kahut": "Tạo kahut",
          "Host kahut": "Host kahut",
          Advertisement: "Quảng cáo",
          "Reset your password": "Đặt lại mật khẩu",
          "Log in with google": "Đăng nhập với Google",
          "Don't have an account": "Chưa có tài khoản",
          "Already have an account": "Đã có tài khoản",
          "Sign up with google": "Đăng kí với Google",
          "Confirm password": "Nhập lại mật khẩu",
          "Full name": "Họ và tên",
          Password: "Mật khẩu",
          "Enter title": "Tiêu đề",
          "Please fill in title field": "Vui lòng nhập tiêu đề",
          Delete: "Xóa",
          "You will use the image cover default if not choose any image":
            "Bạn sẽ sử dụng ảnh bìa mặc định nếu không chọn ảnh nào",
          Cancel: "Bỏ thay đổi",
          Save: "Lưu",
          "Add question": "Thêm câu hỏi",
          "Save Kahut": "Lưu Kahut",
          "Question type": "Loại câu hỏi",
          "Time limit": "Thời gian",
          Points: "Điểm",
          "Add more answer": "Thêm câu trả lời",
          "Remove additional answers": "Xóa câu trả lời",
          "Start typing your question": "Nhập câu hỏi",
          "Upload image": "Chọn ảnh",
          "Change image": "Thay đổi ảnh",
          "Add answer ": "Câu trả lời",
          Quiz: "Câu hỏi",
          "True or False": "Đúng sai",
          "Multi selections": "Nhiều lựa chọn",
          Standard: "Tiêu chuẩn",
          "No points": "Không có điểm số",
          "Double points": "Nhân 2",
          " minutes ": " phút ",
          " minute ": " phút ",
          " seconds": " giây ",
          "Kahut title": "Tiêu đề",
          "Please fill in title field!": "Nhập tiêu đề!",
          Question: "Câu hỏi",
          Courses: "Khóa học",
          "My folders": "Thư mục",
          "Shared with me": "Chia sẽ",
          Recent: "Gần đây",
          Draft: "Bản nháp",
          Favotite: "Yêu thích",
          Search: "Tìm kiếm",
          " questions": " câu hỏi",
          " plays": " lượt chơi",
          plays: " lượt chơi",
          "Save changes": "Lưu thay đổi",
          "List answers": "Danh sách câu hỏi",
          Edit: "Sửa",
          "A private kahut": "Kahut cá nhân",
          "Updated 6 hours ago": "Cập nhật cách đây 6h",
          "My kahut": "Kahut của bạn"
        },
      },
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
