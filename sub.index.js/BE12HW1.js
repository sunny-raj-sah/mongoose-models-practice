const { initializeDatabase } = require("../db/db.connect.js");
const fs = require("fs");
const path = require("path");

const filename = path.join(
  __dirname,
  "../mongoose-models",
  "models-BE11CW",
  "twitterProfile.json"
);

console.log(filename);

const Twitter = require("../mongoose-models/models-BE11CW/twitterProfile.model.js");

initializeDatabase();

const jsonData = fs.readFileSync(filename, "utf-8");

const twitterProfilesData = JSON.parse(jsonData);

async function seedData() {
  try {
    for (const profile of twitterProfilesData) {
      const newTwitterProfile = new Twitter({
        fullName: profile.fullName,
        userName: profile.username,
        bio: profile.bio,
        profilePic: profile.profilePicUrl,
        followerCount: profile.followerCount,
        followingCount: profile.followingCount,
        companyName: profile.companyName,
        city: profile.location,
        protfolioLink: profile.portfolioUrl,
        handle: `@${profile.username}`,
        isOnline: false,
      });

      await newTwitterProfile.save();

      console.log(`${newTwitterProfile.fullName} saved`);
    }

    console.log("Twitter profiles seeded successfully.");
  } catch (error) {
    console.log("Error seeding the data:", error);
  }
}

seedData();