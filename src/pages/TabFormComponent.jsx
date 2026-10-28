import React, { useState } from "react";

const Profile = ({ formData, setFormData }) => {
  const handleProfileDataChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [e.target.name]: e.target.value },
    }));
  };
  return (
    <div className="tab-form-component-items">
      <div className="tab-form-component-item">
        <label htmlFor="name" className="tab-form-component-item-label">
          Name :{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="tab-form-component-item-input"
          value={formData.profile.name}
          onChange={handleProfileDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="email" className="tab-form-component-item-label">
          Email :{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="tab-form-component-item-input"
          value={formData.profile.email}
          onChange={handleProfileDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="phone" className="tab-form-component-item-label">
          Phone :{" "}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="tab-form-component-item-input"
          value={formData.profile.phone}
          onChange={handleProfileDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="address" className="tab-form-component-item-label">
          Address :{" "}
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="tab-form-component-item-input"
          value={formData.profile.address}
          onChange={handleProfileDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="city" className="tab-form-component-item-label">
          City :{" "}
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="tab-form-component-item-input"
          value={formData.profile.city}
          onChange={handleProfileDataChange}
        />
      </div>
    </div>
  );
};

const Interests = ({ formData, setFormData }) => {
  const handleInterestsDataChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      interests: { ...prev.interests, [e.target.name]: e.target.value },
    }));
  };
  return (
    <div className="tab-form-component-items">
      <div className="tab-form-component-item">
        <label htmlFor="hobbies" className="tab-form-component-item-label">
          Hobbies :
        </label>
        <input
          type="text"
          id="hobbies"
          name="hobbies"
          className="tab-form-component-item-input"
          value={formData.interests.hobbies}
          onChange={handleInterestsDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="sports" className="tab-form-component-item-label">
          Favorite Sports :
        </label>
        <input
          type="text"
          id="sports"
          name="sports"
          className="tab-form-component-item-input"
          value={formData.interests.sports}
          onChange={handleInterestsDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="music" className="tab-form-component-item-label">
          Music Preferences :
        </label>
        <input
          type="text"
          id="music"
          name="music"
          className="tab-form-component-item-input"
          value={formData.interests.music}
          onChange={handleInterestsDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="movies" className="tab-form-component-item-label">
          Favorite Movies :
        </label>
        <input
          type="text"
          id="movies"
          name="movies"
          className="tab-form-component-item-input"
          value={formData.interests.movies}
          onChange={handleInterestsDataChange}
        />
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="travel" className="tab-form-component-item-label">
          Travel Interests :
        </label>
        <input
          type="text"
          id="travel"
          name="travel"
          className="tab-form-component-item-input"
          value={formData.interests.travel}
          onChange={handleInterestsDataChange}
        />
      </div>
    </div>
  );
};

const Settings = ({ formData, setFormData }) => {
  const handleSettingsDataChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      settings: { ...prev.settings, [e.target.name]: e.target.value },
    }));
  };
  return (
    <div className="tab-form-component-items">
      <div className="tab-form-component-item">
        <label htmlFor="language" className="tab-form-component-item-label">
          Language :
        </label>
        <select
          id="language"
          name="language"
          className="tab-form-component-item-input"
          defaultValue="en"
          value={formData.settings.language}
          onChange={(e) => handleSettingsDataChange(e)}
        >
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="theme" className="tab-form-component-item-label">
          Theme :
        </label>
        <select
          id="theme"
          name="theme"
          className="tab-form-component-item-input"
          defaultValue="light"
          value={formData.settings.theme}
          onChange={(e) => handleSettingsDataChange(e)}
        >
          <option value="">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <div className="tab-form-component-item">
        <label
          htmlFor="notifications"
          className="tab-form-component-item-label"
        >
          Notifications :
        </label>
        <select
          id="notifications"
          name="notifications"
          className="tab-form-component-item-input"
          defaultValue="enabled"
          value={formData.settings.notifications}
          onChange={(e) => handleSettingsDataChange(e)}
        >
          <option value="">Select Notifications</option>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="privacy" className="tab-form-component-item-label">
          Profile Visibility :
        </label>
        <select
          id="privacy"
          name="privacy"
          className="tab-form-component-item-input"
          defaultValue="public"
          value={formData.settings.privacy}
          onChange={(e) => handleSettingsDataChange(e)}
        >
          <option value="">Select Profile Visibility</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div className="tab-form-component-item">
        <label htmlFor="timezone" className="tab-form-component-item-label">
          Timezone :
        </label>
        <select
          id="timezone"
          name="timezone"
          className="tab-form-component-item-input"
          defaultValue="Asia/Kolkata"
          value={formData.settings.timezone}
          onChange={(e) => handleSettingsDataChange(e)}
        >
          <option value="">Select Timezone</option>
          <option value="Asia/Kolkata">India (IST)</option>
          <option value="UTC">UTC</option>
          <option value="America/New_York">New York (ET)</option>
        </select>
      </div>
    </div>
  );
};

const tabData = [
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Interests",
    component: Interests,
  },
  {
    name: "Settings",
    component: Settings,
  },
];

const TabFormComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    profile: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
    },
    interests: {
      hobbies: "",
      sports: "",
      music: "",
      movies: "",
      travel: "",
    },
    settings: {
      language: "",
      theme: "",
      notifications: "",
      privacy: "",
      timezone: "",
    },
  });

  const ActiveComponent = tabData[activeTab].component;

  const validateProfile = (profileData) => {
    if (
      !profileData.name ||
      !profileData.email ||
      !profileData.phone ||
      !profileData.address ||
      !profileData.city
    ) {
      setErrors("Please fill all the fields");
      return false;
    }
    if (profileData.name.trim().length < 3) {
      setErrors("Name must be at least 3 characters long");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(profileData.email)) {
      setErrors("Email must be a valid email address");
      return false;
    }

    if (profileData.phone.trim().length < 10) {
      setErrors("Phone must be at least 10 digits long");
      return false;
    }
    if (profileData.address.trim().length < 10) {
      setErrors("Address must be at least 10 characters long");
      return false;
    }
    if (profileData.city.trim().length < 3) {
      setErrors("City must be at least 3 characters long");
      return false;
    }
    setErrors("");
    return true;
  };

  const validateInterests = (interestsData) => {
    if (
      !interestsData.hobbies &&
      !interestsData.sports &&
      !interestsData.music &&
      !interestsData.movies &&
      !interestsData.travel
    ) {
      setErrors("Please fill all the fields");
      return false;
    }
    if (interestsData.hobbies === "") {
      setErrors("Please enter a hobby");
      return false;
    }
    if (interestsData.sports === "") {
      setErrors("Please enter a sport");
      return false;
    }
    if (interestsData.music === "") {
      setErrors("Please enter a music");
      return false;
    }
    if (interestsData.movies === "") {
      setErrors("Please enter a movie");
      return false;
    }
    if (interestsData.travel === "") {
      setErrors("Please enter a travel");
      return false;
    }
    setErrors("");
    return true;
  };

  const validateSettings = (settingsData) => {
    console.log("settingsData", settingsData);
    
    if (
      !settingsData.language &&
      !settingsData.theme &&
      !settingsData.notifications &&
      !settingsData.privacy &&
      !settingsData.timezone
    ) {
      setErrors("Please fill all the fields");
      return false;
    }

    if (settingsData.language === "") {
      setErrors("Please select a language");
      return false;
    }
    if (settingsData.theme === "") {
      setErrors("Please select a theme");
      return false;
    }
    if (settingsData.notifications === "") {
      setErrors("Please select a notification");
      return false;
    }
    if (settingsData.privacy === "") {
      setErrors("Please select a profile visibility");
      return false;
    }
    if (settingsData.timezone === "") {
      setErrors("Please select a timezone");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleNextClick = (tabName) => {
    const isValid =
      tabName === "profile"
        ? validateProfile(formData.profile)
        : tabName === "interests"
          ? validateInterests(formData.interests)
          : tabName === "settings"
            ? validateSettings(formData.settings)
            : false;
    if (isValid) {
      if (activeTab < tabData.length - 1) {
        setActiveTab(activeTab + 1);
      }
    }
  };

  const handleSave = () => {
    const isValid = validateSettings(formData.settings);
    if (isValid) {
      console.log(formData);
      setErrors("");
      alert("Form saved successfully");
    } else {
      setErrors("All fields are required");
    }
  };

  return (
    <div className="tab-form-component">
      <h1 className="text-center w-full flex ">Tab Form Component</h1>
      <hr />
      <div className="tab-form-component-tabs">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`tab-form-component-tab-button ${activeTab === index && "tab-form-component-tab-button-active"}`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-form-component-content">
        <ActiveComponent formData={formData} setFormData={setFormData} />
      </div>
      <div className="tab-form-component-bottom-container">
        {errors && <span className="tab-form-component-error">{errors}</span>}
        <div className="tab-form-component-buttons">
          {activeTab > 0 && (
            <button
              className="tab-form-component-button tab-form-component-button-previous"
              onClick={() => setActiveTab(activeTab - 1)}
            >
              Previous
            </button>
          )}
          {activeTab < tabData.length - 1 && (
            <button
              className="tab-form-component-button tab-form-component-button-next"
              onClick={() =>
                handleNextClick(tabData[activeTab].name.toLowerCase())
              }
            >
              Next
            </button>
          )}
          {activeTab === tabData.length - 1 && (
            <button
              className="tab-form-component-button tab-form-component-button-save"
              onClick={() => handleSave()}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabFormComponent;