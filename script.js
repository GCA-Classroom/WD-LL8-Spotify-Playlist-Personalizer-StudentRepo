/* ===================================================== */
/* Scroll function from hero to app */
/* ===================================================== */

function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

/* ===================================================== */
/* 🎯 STEP 1: CREATE YOUR PLAYLIST DATA */
/* ===================================================== */

/*
 * YOUR TASK:
 * Create your own personalized playlist data object!
 *
 * INSTRUCTIONS:
 * 1. Pick 3 different VIBES/MOODS (e.g. "hype", "sad", "workout", "study", "focus", "chill", etc.)
 * 2. For each vibe, add 3 songs with:
 *    - title: "Artist — Song Name"
 *    - cover: A URL to an image from Unsplash (or any image URL)
 *
 * 💡 TIP: To find images, go to https://unsplash.com/ and search for keywords
 *    like "music", "sunset", "party", "nature", etc.
 *    Right-click on an image → Copy Image Address → Paste it as the cover URL
 *
 * 🎨 MAKE IT YOURS! Pick songs YOU love and images that match the vibe!
 *
 * EXAMPLE STRUCTURE (Replace with your own!):
 */

const playlistData = {
  // 🎵 VIBE 1: Replace "focus" with your first vibe name
  focus: [
    {
      title: "Artist Name — Song Title", // Replace with your song
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL", // Replace with your image URL
    },
    {
      title: "Artist Name — Song Title", // Add your second song
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
    {
      title: "Artist Name — Song Title", // Add your third song
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
  ],

  // 🎵 VIBE 2: Replace "chill" with your second vibe name
  chill: [
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
  ],

  // 🎵 VIBE 3: Replace "hype" with your third vibe name
  hype: [
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
    {
      title: "Artist Name — Song Title",
      cover: "https://images.unsplash.com/photo-YOUR-IMAGE-URL",
    },
  ],
};

/* ✅ CHECKPOINT: Once you've customized your playlist data, move to STEP 2 below! */

/* ===================================================== */
/* DOM ELEMENTS */
/* ===================================================== */

const selector = document.getElementById("mood-selector");

const container = document.getElementById("playlist-container");

const feedback = document.getElementById("feedback");

/* ===================================================== */
/* 🎯 STEP 2: DETECT USER SELECTION & DISPLAY PLAYLIST */
/* ===================================================== */

/*
 * YOUR TASK:
 * Make the app respond when the user selects a mood from the dropdown.
 *
 * Follow these steps to build the event listener:
 */

/* ─────────────────────────────────────────────────────
 * STEP 2A: Set Up the Event Listener
 * ───────────────────────────────────────────────────── */

/*
 * PSEUDOCODE:
 * When user changes mood:
 *   get selected mood
 *   find playlist for that mood
 *   display the songs
 *
 * QUESTION TO ASK YOURSELF:
 * - What event happens when a user selects from a dropdown?
 * - Hint: It's called "change"
 *
 * CODE STRUCTURE:
 * selector.addEventListener("change", function() {
 *   // Your code goes here
 * });
 *
 * 💡 TIP: Start by using console.log("Dropdown changed!") to test it works!
 */

// ✏️ WRITE YOUR EVENT LISTENER HERE:

/* ─────────────────────────────────────────────────────
 * STEP 2B: Get the Selected Mood
 * ───────────────────────────────────────────────────── */

/*
 * INSIDE your event listener function:
 *
 * Get the value from the dropdown and store it in a variable.
 *
 * HINT:
 * const mood = selector.value;
 *
 * QUESTION TO ASK YOURSELF:
 * - What will the value of "mood" be? (It should match your vibe names!)
 *
 * 💡 TIP: Use console.log(mood) to see what mood is selected!
 */

/* ─────────────────────────────────────────────────────
 * STEP 2C: Access the Playlist Data Dynamically
 * ───────────────────────────────────────────────────── */

/*
 * Get the songs array for the selected mood.
 *
 * KEY CONCEPT: Dynamic Property Access
 * - Use playlistData[mood] NOT playlistData.focus
 * - Why? Because "mood" is a variable that changes!
 *
 * HINT:
 * const songs = playlistData[mood];
 *
 * QUESTION TO ASK YOURSELF:
 * - What does playlistData[mood] return? (An array of song objects!)
 *
 * 💡 TIP: Use console.log(songs) to see the array of songs!
 */

/* ─────────────────────────────────────────────────────
 * STEP 2D: Clear Previous Songs
 * ───────────────────────────────────────────────────── */

/*
 * Before showing new songs, clear the old ones.
 *
 * PSEUDOCODE:
 * Clear the playlist display area
 *
 * QUESTION TO ASK YOURSELF:
 * - What happens if we don't clear first?
 * - Will songs duplicate each time we select a new mood?
 *
 * HINT:
 * container.innerHTML = "";
 *
 * 💡 TIP: This line clears all HTML inside the container!
 */

/* ─────────────────────────────────────────────────────
 * STEP 2E: Render Songs Using a Loop ⭐⭐⭐
 * ───────────────────────────────────────────────────── */

/*
 * THIS IS THE CORE OF DYNAMIC RENDERING!
 *
 * PSEUDOCODE:
 * For each song in playlist:
 *   create a song row element
 *   create an image element
 *   create a title element
 *   add image and title to the row
 *   add row to the container
 *
 * LOOP STRUCTURE:
 * songs.forEach(function(song) {
 *   // Create elements here
 * });
 *
 * CREATING ELEMENTS (do this INSIDE the forEach loop):
 *
 * 1. Create a div for the song row:
 *    const row = document.createElement("div");
 *    row.className = "song-row";
 *
 * 2. Create an image element:
 *    const img = document.createElement("img");
 *    img.src = song.cover;
 *
 * 3. Create a div for the title:
 *    const title = document.createElement("div");
 *    title.innerText = song.title;
 *
 * 4. Assemble the parts:
 *    row.appendChild(img);
 *    row.appendChild(title);
 *    container.appendChild(row);
 *
 * QUESTION TO ASK YOURSELF:
 * - Why do we use appendChild?
 * - What does song.cover and song.title refer to?
 *
 * 💡 TIP: Watch the browser update in real-time as you code this!
 */

/* ─────────────────────────────────────────────────────
 * STEP 2F: Add Personalized Feedback (OPTIONAL)
 * ───────────────────────────────────────────────────── */

/*
 * Make users feel understood with a custom message!
 *
 * PSEUDOCODE:
 * If mood is "focus":
 *   show "Time to concentrate"
 * Else if mood is "chill":
 *   show "Relax and enjoy the vibes"
 * Else if mood is "hype":
 *   show "Let's get energized"
 * Else:
 *   show "Enjoy the vibe"
 *
 * HINT - Use conditionals:
 * if (mood === "focus") {
 *   feedback.innerText = "Your custom message here";
 * } else if (mood === "chill") {
 *   feedback.innerText = "Your custom message here";
 * } else if (mood === "hype") {
 *   feedback.innerText = "Your custom message here";
 * }
 *
 * QUESTION TO ASK YOURSELF:
 * - How can I make these messages match MY vibes?
 * - What would make this feel like a real Spotify experience?
 *
 * 💡 TIP: Make it personal! Use language your users would relate to!
 */

/* ═════════════════════════════════════════════════════
 * 🧪 TESTING CHECKLIST
 * ═════════════════════════════════════════════════════
 *
 * Before you finish, test your app:
 *
 * ✅ Select each mood
 * ✅ Verify correct songs appear
 * ✅ Verify old songs disappear (not duplicating)
 * ✅ Verify message updates (if you added feedback)
 * ✅ Verify no errors in console (F12 to check)
 * ✅ Test at least 3–5 times
 *
 * 🎉 When everything works, you've built a dynamic,
 *    personalized playlist app! That's real product thinking!
 * ═════════════════════════════════════════════════════
 */
