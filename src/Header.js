import React from "react";

const Header = () => {
    return (
        <>
            <div
                className="hero d-inline-block"
                style={{ height: "100vh", width: "100vw" }}
            >
                <div className="tagline_holder">
                    <h1 className="tagline">Os Magalhães</h1>
                    <h3 className="sub-tagline">
                        Where every meal is a celebration
                    </h3>
                    <a href="#menus">
                        <button
                            className="btn_menu btn btn-danger mt-3"
                            style={{
                                fontWeight: 400,
                                letterSpacing: "0.1rem",
                                borderWidth: "0.2rem",
                                fontSize: "1.7rem",
                            }}
                        >
                            Menus
                        </button>
                    </a>
                </div>

                <img
                    src="./hero_img.jpg"
                    alt=""
                    className="hero_img"
                    style={{ height: "100%", width: "100%" }}
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default Header;
