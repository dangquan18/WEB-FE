import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ThankYouPage.css"; // CSS riêng cho trang này
import { CheckCircleOutlined } from "@ant-design/icons"; // Sử dụng Ant Design icon
import Navbar from "../../Layout/Navbar/Navbar";
import Footer from "../../Layout/Footer/Footer";

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { room, date, startTime, endTime, userId, bookingId } =
    location.state || {};

  if (!room || !date || !startTime || !endTime || !userId || !bookingId) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="thank-you-container">
        <div className="thank-you-card">
          <CheckCircleOutlined className="thank-you-icon" />
          <h1>Đặt phòng thành công!</h1>
          <p className="thank-you-message">
            Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi. Chúng tôi
            đã gửi thông tin đặt phòng và phương thức thanh toán. Thanh toán
            trong vòng 1h để hoàn tất đặt phòng.
          </p>
          <div className="thank-you-details">
            <p>
              <strong>Mã đặt phòng:</strong> {bookingId}
            </p>
            <p>
              <strong>Phòng:</strong> {room.name}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {room.location}
            </p>
            <p>
              <strong>Ngày:</strong> {date}
            </p>
            <p>
              <strong>Thời gian:</strong> {startTime} - {endTime}
            </p>
            <p>
              <strong>Giá:</strong> {room.price} VNĐ/giờ
            </p>
          </div>
          <button className="btn-home" onClick={() => navigate("/")}>
            Quay về trang chính
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
