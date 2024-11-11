const apiUrl = import.meta.env.VITE_API_URL;
let servicesData = []; // Initialize as null to indicate it's not yet loaded

// Fetch data immediately and store it in `servicesData`
(async () => {
  try {
    const response = await fetch(`${apiUrl}/services/`);
    servicesData = await response.json();
  } catch (error) {
    console.error("Error fetching services data:", error);
  }
})();

export { servicesData };
