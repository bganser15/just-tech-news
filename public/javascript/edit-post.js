async function editFormHandler(event) {
  event.preventDefault();
  //gets req param id
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if request is fufilled redirect user to dashboard
  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
