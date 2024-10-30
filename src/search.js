import { display } from "./display";

export async function search(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${process.env.API_KEY}`,
      { mode: "cors" }
    );
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return data.currentConditions;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    alert("Failed to load forecast. Please try again.");
  }
}
