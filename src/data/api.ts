async function fetchFlashcardData() {
  const response = await fetch(
    'https://cross-platform.rp.devfactory.com/following',
  );
  const data = await response.json();
  return data;
}

async function fetchMCQData() {
  const response = await fetch(
    'https://cross-platform.rp.devfactory.com/for_you',
  );
  const data = await response.json();
  return data;
}

async function fetchMCQAnswer(id?: number | string) {
  const response = await fetch(
    `https://cross-platform.rp.devfactory.com/reveal?id=${id}`,
  );
  const data = await response.json();
  return data;
}

export default {
  fetchMCQData,
  fetchMCQAnswer,
  fetchFlashcardData,
};
