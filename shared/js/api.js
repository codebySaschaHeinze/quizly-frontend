async function createQuiz(url) {
  document.querySelector(".overlay").classList.remove("d_none");
  url = url.trim();

  try {
    const response = await apiFetch(CREATE_QUIZ_URL, {
      method: "POST",
      body: JSON.stringify({ url: url }),
    });

    if (!response) {
      document.querySelector(".overlay").classList.add("d_none");
      return null;
    }

    if (!response.ok) {
      const errorMessages = await getErrorMessages(response);
      showToastMessage(true, errorMessages);
      document.querySelector(".overlay").classList.add("d_none");
      return null;
    }

    const data = await response.json();
    document.querySelector(".overlay").classList.add("d_none");
    return data;
  } catch (error) {
    document.querySelector(".overlay").classList.add("d_none");
    showToastMessage(true, [`Network error: ${error.message}`]);
    return null;
  }
}

async function loadQuizzes(id) {
  let endpoint = GET_QUIZ_URL;
  if (id) {
    endpoint = `${GET_QUIZ_URL}${id}/`;
  }

  try {
    const response = await apiFetch(endpoint, { method: "GET" });
    if (!response || !response.ok) return null;
    return await response.json();
  } catch (error) {
    showToastMessage(true, [`Error while loading quiz data: ${error.message}`]);
    return null;
  }
}

async function updateQuiz(id, quiz) {
  let endpoint = GET_QUIZ_URL;
  if (id) {
    endpoint = `${GET_QUIZ_URL}${id}/`;
  }

  try {
    const response = await apiFetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify({
        title: quiz.title,
        description: quiz.description,
      }),
    });

    if (!response || !response.ok) return null;
    return await response.json();
  } catch (error) {
    showToastMessage(true, [`Error while updating quiz: ${error.message}`]);
    return null;
  }
}

async function getErrorMessages(response) {
  try {
    const data = await response.json();

    if (typeof data.detail === "string") {
      return [data.detail];
    }

    if (typeof data.url === "string") {
      return [data.url];
    }

    if (Array.isArray(data.url)) {
      return data.url;
    }

    if (typeof data === "object" && data !== null) {
      const messages = [];

      for (const value of Object.values(data)) {
        if (typeof value === "string") {
          messages.push(value);
        } else if (Array.isArray(value)) {
          messages.push(...value);
        }
      }

      if (messages.length > 0) {
        return messages;
      }
    }
  } catch (error) {
    return [`Request failed with status ${response.status}`];
  }

  return [`Request failed with status ${response.status}`];
}
