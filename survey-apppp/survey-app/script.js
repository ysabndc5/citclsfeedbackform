document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const data = {
    visitorType: formData.get("visitorType"),
    name: formData.get("name"), // ✅ Add this line
    purpose: formData.get("purpose"),
    date: formData.get("date"),
    staffRating: formData.get("staffRating"),
    concernAddressed: formData.get("concernAddressed"),
    overallRating: formData.get("overallRating"),
    recommend: formData.get("recommend"),
    comments: formData.get("comments"),
    email: formData.get("email"),
  };

  // Get existing list from localStorage, or start with an empty array
  let surveyList = JSON.parse(localStorage.getItem("surveyList")) || [];
  surveyList.push(data); // Add the new survey

  // Save back to localStorage
  localStorage.setItem("surveyList", JSON.stringify(surveyList));

  // Redirect to thank you page
  window.location.href = "thankyou.html";
});
