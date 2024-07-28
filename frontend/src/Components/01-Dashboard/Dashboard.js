import React, { useState } from "react";

import { Divider, Fieldset, Knob, Avatar, AvatarGroup } from "primereact";

import profileImage from "../../Assets/icons/boy.png";
import coverImage from "../../Assets/images/cover.png";
import holidayImage from "../../Assets/images/holiday.png";
import "./dashboard.css";

export default function Dashboard() {
  const [attendacenPercentage, setAttendancePercentage] = useState(90);

  return (
    <div>
      <div className="primaryNav">
        <p>Dashboard</p>
        <p className="p-last-edit">Profile last updated 11:43 | Jul 28 2024</p>
      </div>

      <div className="contents">
        <div className="userProfile">
          <div className="coverImage">
            <img src={coverImage} alt="coverImage" />
          </div>
          <div className="coverContents">
            <img src={profileImage} alt="userProfile" />
            <div className="userDetails">
              <div className="userDetOne">
                <div className="userDetPrimary">
                  <p className="username">User name</p>
                  <p className="useremail">User email</p>
                </div>
                <p className="empPosition">Position</p>
              </div>
              <div className="userDetTwo">
                <p><span>Employee ID </span>: COMP01HR1001</p>
                <Divider layout="vertical" />
                <p><span>Department </span>: HR</p>
                <Divider layout="vertical" />
                <p><span>Mobile </span>: +91 9933994499</p>
              </div>
            </div>
          </div>
        </div>

        <div className="userDashboard grid-container">

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Your Actions">
                <div className="actions">
                  <p>
                    <span>0 </span> actions left
                  </p>
                  <p>View Your Previous Actions</p>
                </div>
              </Fieldset>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Attendance">
                <div className="attendance">
                  <Knob
                    value={attendacenPercentage}
                    onChange={(e) =>
                      setAttendancePercentage(e.attendacenPercentage)
                    }
                    valueTemplate={"{value}%"}
                    size={120}
                  />
                  <div className="avgWorkHrs">
                    <p>
                      <span>7.5 Hrs</span> Per Day
                    </p>
                    <p>* Avg Working Hours</p>
                  </div>
                </div>
              </Fieldset>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Leave Balance">
                <div className="leaveBalance">
                  <div className="consumed">
                    <p>5</p>
                    <p>Consumed</p>
                  </div>
                  <div className="balance">
                    <p>10</p>
                    <p>Balance</p>
                  </div>
                </div>
              </Fieldset>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Out Today">
                <div className="card outToday flex justify-content-center">
                  <AvatarGroup>
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar label="+2" shape="circle" size="large" />
                  </AvatarGroup>
                  <p>2 People from HR out today</p>
                </div>
              </Fieldset>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Upcoming Out">
                <div className="card outToday flex justify-content-center">
                  <AvatarGroup>
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar
                      image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
                      size="large"
                      shape="circle"
                    />
                    <Avatar label="+2" shape="circle" size="large" />
                  </AvatarGroup>
                  <p>3 People from Sales</p>
                </div>
              </Fieldset>
            </div>
          </div>

          <div className="grid-item">
            <div className="card">
              <Fieldset legend="Next Holiday">
                <div className="holiday">
                  <div className="holidayContents">
                    <div className="date">
                      <div className="dateOne">15</div>
                      <div className="dateTwo">
                        <p>Aug</p>
                        <p>2024</p>
                      </div>
                    </div>
                    <img
                      src={holidayImage}
                      alt="Holiday"
                      height={80}
                      width={80}
                    />
                  </div>
                  <p>Independence Day</p>
                </div>
              </Fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
