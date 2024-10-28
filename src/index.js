console.log("API Key:", process.env.API_KEY);

// const img = document.querySelector('img');
// const btn = document.getElementById('pic_btn');
// const search_btn = document.getElementById('search_btn');
// btn.addEventListener('click', () => {
//     let input = document.getElementById('input').value;
//     search(input);
// });

// search_btn.addEventListener('click', () => {
//     let input = document.getElementById('input').value;
//     search(input);
// });

async function logforecast() {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${process.env.API_KEY}`,
      { mode: "cors" }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to load forecast. Please try again.");
  }
}

logforecast();
