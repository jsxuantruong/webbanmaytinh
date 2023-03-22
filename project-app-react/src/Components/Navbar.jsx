function Navbar() {
  return (
    <div>
        <div className="banner">
           <img className="img1" src="https://anphat.com.vn/media/banner/03_Feb0953a2e81e3e6e2613a00ff78e899e84.jpg" alt="" />
        </div>
      <div className="header_pc">
        <div className="header-container">
          <img
            className="img_logo"
            src="https://anphat.com.vn/media/banner/logo_logo-web-t4.png"
            alt="logo"
          />

          <h5>
            <i class="fa fa-bars"></i> Danh Mục Sản Phẩm
          </h5>
        </div>

        <div></div>
        <div className="item-header">
          <div className="header_item">
            <select className="scat_id" id="">
              <option value="">Tất cả danh mục</option>

              <option value="">Laptop - Tablet - Mobile</option>

              <option value="">Máy tính - Máy chủ</option>

              <option value="">PCAP Máy Tính An Phát</option>

              <option value="">Apple</option>

              <option value="">Máy in - TB Văn Phòng</option>
            </select>
            <input
              className="input_search"
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
            />

            <button className="btn">
              <i class="fa-solid fa-magnifying-glass"></i> Tìm Kiếm
            </button>
          </div>
        </div>
        <div className="icon">
          <i class="fa-solid fa-phone-volume"></i>
        </div>
        <div className="phone_info">
          <b>Hotline:</b>
          <b>
            <span>0815912222 </span>
          </b>
          <b>
            <span>0886228638 </span>
          </b>
          <b>
            <span>0815677777 </span>
          </b>
        </div>
        <div className="icon">
          <i class="fa-solid fa-computer"></i>
        </div>
        <div className="build_pc">
          <p>
            Xây dựng <br /> Cấu hình PC
          </p>
        </div>
        <div className="icon">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="user_pc">
          <span>Đăng Ký</span>
          <br />
          <span>Đăng nhập</span>
        </div>
        <div className="icon">
          <i class="fa-solid fa-cart-shopping"></i>
          <span></span>
        </div>
      </div>
    
    </div>
    
  );
}

export default Navbar;
