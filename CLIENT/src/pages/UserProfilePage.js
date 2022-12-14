import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSideNavbar from "../components/nonShared/UserProfile/ProfileSideNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import AvatarDefault from "../assets/AvatarDefault.png";

const UserProfilePage = () => {
    return (
        <section className="px-0 lg:px-10 my-12">
            {/* toggle button */}

            {/* content row */}
            <div className="drawer drawer-mobile h-full max-h-max">
                <input
                    id="user-profile-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col px-6 lg:px-0 lg:ml-12">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="user-profile-drawer"
                        className="drawer-overlay bg-white"
                    ></label>
                    <div className="rounded-box p-4 overflow-y-auto w-64 bg-neutral  ">
                        {/* avater */}
                        <div className="avatar flex justify-center mb-8 mt-4">
                            <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2">
                                <img
                                    src={`${AvatarDefault}`}
                                    className="w-full"
                                    alt="avater"
                                />
                            </div>
                        </div>
                        {/* Sidebar */}
                        <ProfileSideNavbar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfilePage;
