const reelsSection = [
  {
    propilePicture:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "travel_diaries",
    caption: "Sunset vibes hitting different 🌅✨",
    likeCount: 1200,
    commitCount: 85,
    isLiked: true,
    videoUrl: "./videos/1.mp4",
    isFollowed: true
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "fit_with_anna",
    caption: "Morning workout grind 💪🔥",
    likeCount: 950,
    commitCount: 60,
    videoUrl: "./videos/2.mp4",
    isLiked: false,
    isFollowed: false
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "chef_mario",
    caption: "Best homemade pizza recipe 🍕🔥",
    likeCount: 2100,
    commitCount: 140,
    isLiked: true,
    videoUrl: "./videos/3.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "music_lover",
    caption: "New beat dropping soon 🎧🎶",
    likeCount: 1800,
    commitCount: 110,
    isLiked: false,
    videoUrl: "./videos/4.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "car_world",
    caption: "Beast mode activated 🚗💨",
    likeCount: 2600,
    commitCount: 150,
    isLiked: false,
    videoUrl: "./videos/5.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "nature_escape",
    caption: "The mountains are calling 🏔️❤️",
    likeCount: 3400,
    commitCount: 210,
    isLiked: true,
    videoUrl: "./videos/6.mp4",
    isFollowed: true
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "daily_motivation",
    caption: "Small steps every day ✨",
    likeCount: 1400,
    commitCount: 75,
    isLiked: true,
    videoUrl: "./videos/7.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    userName: "pet_paradise",
    caption: "Cutest puppy ever 🐶💕",
    likeCount: 5200,
    commitCount: 420,
    isLiked: true,

    videoUrl: "./videos/8.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    userName: "dance_vibes",
    caption: "Practicing my new choreography 🔥💃",
    likeCount: 2950,
    commitCount: 160,
    isLiked: false,

    videoUrl: "./videos/9.mp4",
    isFollowed: false
  },
  {
    propilePicture:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    userName: "healthy_living",
    caption: "A perfect start with a healthy meal 🥗✨",
    likeCount: 1750,
    commitCount: 90,
    isLiked: true,
    videoUrl: "./videos/10.mp4",
    isFollowed: false
  },
];
let sum = "";
reelsSection.forEach((user) => {
  sum =
    sum +
    ` <div class="reelsParient">
          <div class="videoSec">
          <video src="${user.videoUrl} " autoplay loop  playsinline></video>
          </div>
          <div class="bottum">
            <div class="left">
              <img
                src="${user.propilePicture}"
                alt=""
              />
              <p>@${user.userName}</p>
              <button>${user.isFollowed ? "follow" : "unfollow"}</button>
            </div>
            <p>
             ${user.caption}
            </p>
          </div>
          <div class="icons">

            <div class="like icon">
             ${user.isLiked ? "<i class='ri-heart-fill red'></i>" : "<i class='ri-heart-line'></i>"}
              <span>${user.likeCount}</span>
            </div>

            <div class="chat icon">
              <i class="ri-chat-1-line"></i>
              <span>${user.commitCount}</span>
            </div>

            <div class="share icon">
             <i class="ri-share-forward-line"></i>

            </div >
             <div class="threeDot icon">
             <i class="ri-more-2-line"></i>
              </div>
           
          </div >
        </div > `;
});
const section = document.querySelector("section");
section.innerHTML = sum;
const videos = document.querySelectorAll("video");
// source for chatGPT {

// Create observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;


      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.6, // 60% visible to start play
  }
);

// Observe all videos
videos.forEach((video) => observer.observe(video));
// }
